
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
    $('#popup').hide();
}

function showPopup(errorStatus) {
    $('#popup').html(''); // remove children if they exist
    var message = "";
    switch (errorStatus) {
        case DUPLICATE:
            message = "There is already a report with that name! Choose another.";
            break;
        case EMPTYNAME:
            message = "Please give your report a name before exiting!";
            break;
    }

    $('#popup').append(
        '<p>' +
        message +
        '</p>'
    );
    $('#popup').slideToggle(250).delay(2000).slideToggle(400);
}

function checkError() {

    var reportName;
    // Make sure we're in a Report view, then check report name
    if ($('#general').css("display") !== "none") {
        if ($('#general [name="reportName"]').val() === undefined ||
            $('#general [name="reportName"]').val() === "") {
                //showPopup();
                return EMPTYNAME;
                //isSafe = false;
                //return;
        } else {
            reportName = $('#general [name="reportName"]').val();
        }
    } else return OK; // if not in report view, can't check so OK

    // Duplicate name error checking
    var numInstances = 0;
    var copyName = "";
    for (i = 0; i < REPORTLIST.length; i++) {
        if (REPORTLIST[i].reportName === reportName) {
            numInstances++;
        }
    }

    if (numInstances > 1) return DUPLICATE;
    else return OK;
}
