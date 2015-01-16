var main = function () {
    $('#truth-statement1').click(function() {
        $('.feedback1').show("slow");
        $('.statement-selected').removeClass('statement-selected');
        $('#truth-statement1').addClass('statement-selected');
    });

    $('#truth-statement2').click(function() {
        $('.feedback2').show("slow");
        $('.statement-selected').removeClass('statement-selected');
        $('#truth-statement2').addClass('statement-selected');
    });

    $('#truth-statement3').click(function() {
        $('.feedback3').show("slow");
        $('.statement-selected').removeClass('statement-selected');
        $('#truth-statement3').addClass('statement-selected');
    });

    $('#reset').click(function() {
        $('.feedback1').hide();
        $('.feedback2').hide();
        $('.feedback3').hide();
        $('.statement-selected').removeClass('statement-selected');
    });
};

$(document).ready(main);
