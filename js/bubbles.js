/* 
    Created on : 05-feb-2016, 10:17:33
    Author     : fluted0g
*/


//TAKEN FROM: http://stackoverflow.com/questions/8568158/changing-z-index-to-make-a-clicked-div-appear-on-top (thanks keeganwatkins)
//on click puts the bubble on top of the other bubbles
$(function() {
    // Change this selector to find whatever your 'bubbles' are
    var bubbles = $(".bubble");

    // Set up click handlers for each bubble
    bubbles.click(function() {
        var clickedBubble = $(this), // The bubble that was clicked
            max = 0;

        // Find the highest z-index
        bubbles.each(function() {
            // Find the current z-index value (has to be INT for Math.max)
            var z = parseInt( $( this ).css( "z-index" ), 10 );
            // Keep either the current max, or the current z-index, whichever is higher
            max = Math.max( max, z );
        });

        // Set the bubble that was clicked to the highest z-index plus one
        clickedBubble.css("z-index", max + 1 );
    });
});

//double click bubble,$time is optional
expandableDBL = function ($elem,$time) {

    //default time is 1 second
    $time = $time || 1000;
    //hide the bubble body
    $(this).find(".expanded_body").hide();
    
    //boolean to toggle the state from expanded to reduced
    var state = true;

    $($elem).dblclick(function () {   
        
        //toggle reduced state, then proceed to toggle expanded state
        $($elem).toggleClass("reduced", $time).promise().done(function () {
            
            if (state) {
                //hide reduced content, show expanded content while body expands
                $(this).find(".reduced_body").fadeOut(1200);
                $(this).toggleClass("expanded", $time).promise().done(function() {                    
                    $(this).find(".expanded_body").fadeIn(800);                    
                });                
                state = false;                
            } else {
                //show reduced content, hide expanded content while body reduces
                $(this).find(".expanded_body").fadeOut(800);
                $(this).toggleClass("expanded", $time);
                $(this).find(".reduced_body").fadeIn(1200);                
                state = true;
            }
        });

    });
};


//this one is exactly the same function as expandableDBL, but triggers on a single click
//it's not recommended with the draggable function from jquery-ui, though, as this triggers while dragging a reduced bubble
expandableSGL = function ($elem,$time) {

    
    $time = $time || 1000;
    $(this).find(".expanded_body").hide();
    var state = true;

    $($elem).click(function () {   
        
        $($elem).toggleClass("reduced", $time / 4).promise().done(function () {
            if (state) {  
                $(this).find(".reduced_body").fadeOut(1200);
                $(this).toggleClass("expanded", $time).promise().done(function() {                    
                    $(this).find(".expanded_body").fadeIn(800);                    
                });                
                state = false;                
            } else {
                
                $(this).find(".expanded_body").fadeOut(800);
                $(this).toggleClass("expanded", $time);
                $(this).find(".reduced_body").fadeIn(1200);                
                state = true;
            }
        });

    });
};

