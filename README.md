# fluted0g.github.io
Bubbles Plugin

Bubbles: a simple plugin that allows you to create expandable divs.

These bubbles can be expanded by doubleclicking, and can be filled with any content.
            
To install the plugin, just add the bubbles.js and bubbles.css files in your project.
When those files are in, make sure to link them in the html files you want to use bubbles.
Bubbles requires jqueryjquery-ui.

A bubble element looks like this:

            <div class="draggable bubble" id="bubble01">
                <div class="reduced_body">
                    <h4>Bubble One</h4>
                </div>
                <div class="expanded_body">
                    <div><h4>I'm a bubble!</h4></div>
                    <p>You can put almost anything inside here!!!</p>                    
                </div>
            </div>
            
Remember to add the class "bubble", "reduced_body" and "expanded_body", and add this script on the bottom of your html:

            $(document).ready(function () {
                //if you don't want the bubbles to move, don't put this line
                //draggable function can be customized, look here: http://api.jqueryui.com/draggable/
                $(".draggable").draggable();
                expandableDBL($("#bubble01"));
                expandableDBL($("#bubble02"));
                expandableDBL($("#bubble03"));
            });
            
Finally, you should declare the initial position of each bubble in your css, like this:

            #bubble01 {
              top: 10px;
              left: 20px;
            }
