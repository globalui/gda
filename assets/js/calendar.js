// initialize your calendar, once the page's DOM is ready

$(document).ready(function () {

    $('#calendar').evoCalendar({
        eventListToggler:false,

        getActiveEvents: true,
        theme: 'Midnight Blue',
        'eventDisplayDefault': true,
        calendarEvents: [{
            id: 1,
            date: "May/13/2020",
            type: "not-available"
        },
            {
                id: 2,
                date: "May/14/2020",
                type: "fillingfast"
            },
            {
                id: 3,
                date: "May/15/2020",
                type: "available"
            },
            {
                id: 3,
                date: "May/15/2021",
                type: "available"
            }
        ]

    })

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

    $('.calendar-year button').on('click', function(){
        customCalenderFunction();
    });

});


//mobile custom show moth list
$(document).on('click','#monthTrigger',function(){
    $('#calendar').toggleClass('sidebar-hide');
});