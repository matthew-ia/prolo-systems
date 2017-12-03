
/* DATE PICKER */
function enableDatepicker() {
    $('[data-toggle="datepicker"]').datepicker();
}

/* SIDEBAR JUMP MENU */
function enableSmoothScrollJump() {
    var offset = -160;
    var scrollTime = 500;

    $('a[href*=\\#]:not([href=\\#]').click(function() {
        if ($(this).attr('id') === '#') return; // if href="#" return, otherwise jump
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top + offset
        }, scrollTime);
    });
}

function generatePopup() {
    $('#popup').append(
        '<p>' +
        "Please give your report a name before exiting!" +
        '</p>'
    );
    $('#popup').hide();
}

function showPopup() {
    $('#popup').slideToggle(250).delay(2000).slideToggle(400);
}
