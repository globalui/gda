// initialize your calendar, once the page's DOM is ready

$(document).ready(function () {

    $('#calendar').evoCalendar({
        eventListToggler: false,

        getActiveEvents: true,
        theme: 'Midnight Blue',
        'eventDisplayDefault': true,
        calendarEvents: [
            {
                id: 1,
                date: "Nov/23/2020",
                type: "not-available",
                price: "$520"
            },
            {
                id: 2,
                date: "Nov/24/2020",
                type: "fillingfast",
                price: "$820"
            },
            {
                id: 3,
                date: "Nov/25/2020",
                type: "available",
                price: "$320"
            },
            {
                id: 4,
                date: "Nov/26/2020",
                type: "available",
                price: "$720"
            },
            {
                id: 4,
                date: "Nov/26/2021",
                type: "available",
                price: "$720"
            }
        ]

    });

    function customCalenderFunction() {
        var setStartYear = '2020';
        var setLastYear = '2021';

        var getCYear = $('.calendar-year').children('p').text();
        $('[data-year-val="prev"]').addClass('d-none');

        if (getCYear === setStartYear) {
            $('[data-year-val="prev"]').addClass('d-none');
            $('[data-year-val="next"]').removeClass('d-none');
        }
        if (getCYear != setStartYear) {
            $('[data-year-val="prev"]').removeClass('d-none');
            $('[data-year-val="next"]').removeClass('d-none');
        }
        if (getCYear === setLastYear) {
            $('[data-year-val="next"]').addClass('d-none');
            $('[data-year-val="prev"]').removeClass('d-none');
        }

    }

    customCalenderFunction();

    $('.calendar-year button').on('click', function () {
        customCalenderFunction();
    });

});


//mobile custom show moth list

$(document).ready(function () {
    if ($(window).width() <= 1024) {
        $(document).on('click', '#monthTrigger', function () {
            $('#calendar').toggleClass('sidebar-hide');
        });

    }


    $(document).on('click', '.vs-calender-active', function () {
        var __getDate = $(this).attr('data-date-val');
        var __getPrice = $(this).attr('data-price-val');
        var __getStatus = $(this).children('.event-indicator').attr('data-status');
        var __markup = "";
        var __getIDThis = $('.vs-calender-active');

       /* if (__getStatus == "available") {
            __getIDThis.addClass('alert-success');
        } else if (__getStatus == "fillingfast") {
            __getIDThis.addClass('alert-warning');
        } else if (__getStatus == "not-available") {
            alert('not');
            __getIDThis.attr('alert-danger');
        } else {
            __getIDThis.addClass('alert-light');
        }*/

        __markup += '<div class="text-center">';
        __markup += '<h3 class="mb-0">' + __getDate + '</h3>';
        __markup += '<small> (' + __getStatus + ') </small>';
        __markup += '<h2 class="mt-2">' + __getPrice + '</h2>';
        __markup += '<button class="btn btn-success">Book Now</button>';
        __markup += '</div>';

        $('#datePriceContainer').empty().append(__markup);
    });
});