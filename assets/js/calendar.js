mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

$(function () {
    var now = new Date(),
        currYear = now.getFullYear(),
        currMonth = now.getMonth(),
        currDay = now.getDate(),
        min = new Date(currYear, currMonth, currDay),
        max = new Date(currYear, currMonth + 6, currDay),
        firstload = true;

    $('#demo-booking-single').mobiscroll().calendar({
        display: 'inline',
        controls: ['calendar'],
        min: min,
        max: max,
        yearChange: false,
        responsive: {
            xsmall: {
                months: 1
            },
            medium: {
                months: 2
            }
        },
        onPageLoading: function (event, inst) {
            getPrices(event.firstDay, function callback(bookings) {
                inst.settings.labels = bookings.labels
                inst.settings.invalid = bookings.invalid;
                inst.redraw();
            });
        }
    });



    function getPrices(d, callback) {
        var invalid = [],
            labels = [];

        mobiscroll.util.getJson('https://trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(), function (bookings) {
            for (var i = 0; i < bookings.length; ++i) {
                var booking = bookings[i],
                    d = new Date(booking.d);

                if (booking.price > 0) {
                    labels.push({
                        d: d,
                        text: '$' + booking.price,
                        background: 'none',
                        color: '#e1528f'
                    });
                } else {
                    invalid.push(d);
                }
            }
            callback({ labels: labels, invalid: invalid });
        }, 'jsonp');
    }

    function getBookings(d, callback) {
        var invalid = [],
            labels = [];

        mobiscroll.util.getJson('https://trial.mobiscroll.com/getbookings/?year=' + d.getFullYear() + '&month=' + d.getMonth(), function (bookings) {
            for (var i = 0; i < bookings.length; ++i) {
                var booking = bookings[i],
                    d = new Date(booking.d);

                if (booking.nr > 0) {
                    labels.push({
                        d: d,
                        text: booking.nr + ' SPOTS',
                        background: 'none',
                        color: '#e1528f'
                    });
                } else {
                    invalid.push(d);
                }
            }
            callback({ labels: labels, invalid: invalid });
        }, 'jsonp');
    }

});