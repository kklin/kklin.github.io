var truths = ["truth1",
              "truth2",
              "truth3",
              "truth4",
              "truth5",
              "truth6",
              "truth7",
              "truth8",
              "truth9",
              "truth10"];

var lies = ["lie1",
            "lie2",
            "lie3",
            "lie4",
            "lie5",
            "lie6",
            "lie7",
            "lie8",
            "lie9",
            "lie10",];

var used_statements = []

var main = function() {
    $('.statement').click(function() {
       $('.statement').removeClass('statement-selected');
       $(this).addClass('statement-selected');
    });

    $('.confirm-next').click(function() {
        // TODO: use constants for the names of the button
        if ($('.confirm-next').text() === 'Submit') {
            var selection = $('.statement-selected');
            if (is_lie(selection.text())) {
                //$('.feedback').text("Yup!");
                alert("Yup!");
                toggle_submit_next_button();
            } else {
                alert("Nah..");
                // $('.feedback').text("Nah...");
            }
        } else {
            set_statements();
            $('.statement').removeClass('statement-selected');
            toggle_submit_next_button();
        }
    });

    $('.confirm-next').text('Submit');
    set_statements();
};

var toggle_submit_next_button = function() {
    if ($('.confirm-next').text() === 'Submit') {
        $('.confirm-next').text('Next');
    } else {
        $('.confirm-next').text('Submit');
    }
}

var is_lie = function(statement) {
    var i;
    for (i = 0 ; i < lies.length ; i++) {
        if (statement === lies[i]) {
            return true;
        }
    }
    return false;
}

var set_statements = function() {
    var statements = get_statements();
    statements = shuffle(statements);
    var statement_containers = $('.statement');
    // just going to assume there's exactly three statements
    // TODO: I feel like this is jquery-ic?
    statement_containers[0].innerText = statements[0];
    statement_containers[1].innerText = statements[1];
    statement_containers[2].innerText = statements[2];
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// returns, in order, two truths and one lie, all of which have not been seen
// before
var get_statements = function() {
    var usable_truths = remove_elements(truths, used_statements);
    var usable_lies = remove_elements(lies, used_statements);

    var truth1 = get_random(usable_truths);

    usable_truths = remove_elements(usable_truths, [truth1]);

    var truth2 = get_random(usable_truths);
    var lie = get_random(usable_lies);

    used_statements.push(truth1);
    used_statements.push(truth2);
    used_statements.push(lie);

    return [truth1, truth2, lie]

}

// returns a random item from the given list
var get_random = function(list) {
    return list[Math.floor(Math.random()*list.length)];
}

var remove_elements = function(list, to_remove) {
    var i, j, should_keep;
    var ret = [];
    for (i = 0 ; i < list.length ; i++) {
        should_keep = true;
        for (j = 0 ; j < to_remove.length ; j++) {
           if (list[i] === to_remove[j]) {
                should_keep = false;
           }
        }
        if (should_keep) {
           ret.push(list[i]); 
        }
    }

    return ret;
}

$(document).ready(main)
