$(document).ready(function () {
    "use strict";
//STEP 1
//    $('#alertClick').click(function () {
//        window.alert('you\'ve been clicked');
//    });
//STEP 2
//    $('#bindClick').bind("click", function () {
//        window.alert('you\'ve been clicked');
//    });
//STEP 3
//    $('#onClick').on("click", function () {
//        window.alert('you\'ve been clicked');
//    });
//STEP 4
//    $('.part4').on("click", function () {
//        window.alert('you\'ve been clicked');
//    });
//STEP 5
//    $('#part5').css({'width': '400px', 'height': '400px', 'background-color': 'yellow'});
//    $('#part5').on("mouseenter", function () {
//        window.alert('the mouse has entered');
//    });
//    $('#part5').on("click", function () {
//        window.alert('the mouse has been clicked');
//    });
//    $('#part5').on("mouseleave", function () {
//        window.alert('the mouse has left');
//    });
//STEP 6
//    $('#part6').on('mouseenter', function () {
//        $('#span1').html('<p>The mouse has entered</p>');
//    });
//    $('#part6').on('click', function () {
//        $('#span2').html('<p>The span has been clicked</p>');
//    });
//    $('#part6').on('mouseleave', function () {
//        $('#span3').html('<p>The mouse has left</p>');
//    });
//STEP 7
//    $('#googleLink').on('click', function () {
//        $('#googleLink').css('color', 'red');
//        window.alert('you\'ve been clicked');
//        event.preventDefault();
//    });
//STEP 8
//    function getDims() {
//        var width = $(window).width();
//        var height = $(window).height();
//        $('#divWidth').html(width);
//        $('#divHeight').html(height);
//    }
//    $(window).resize(getDims);
//STEP 9
//    $('#step9').on({
//        click: function () {
//            $('#step9').css('background-color', 'lightgrey');
//        },
//        blur: function () {
//            $('#step9').css('background-color', 'white');
//        }
//    });
//STEP 10
//    $('#formSubmit').on('click', function () {
//        if ($('#formName').val().length === 0 || $('#formEmail').val().length === 0) {
//            window.alert('you forgot to fill in a field');
//        }
//        if ($('#formName').val().length === 0) {
//            $('#formName').css('border-color', 'red');
//        }
//        if ($('#formEmail').val().length === 0) {
//            $('#formEmail').css('border-color', 'red');
//        } else {
//            $('#formEmail, #formName').css('border-color', 'green');
//        }
//    });
//PART 2
//STEP 1, 2
    $('#container').css({'width': '172px', 'height': '180px', 'max-width': '180px', 'max-height': '180px', 'background-color': 'blue', 'border': 'solid 1px blue'});
    $('input[type=button]').css({'width': '40px', 'height': '40px'});
//STEP 3
});