// users to add, check, uncheck, and remove items from a shopping list.

// all of the classes for buttons are class = 'button-label' (All in spans)
// we want to change button to check & uncheck when each different button is selected
// do i create a new button called uncheck when check is clicked?
// how do i reverse back to "check"

//create a way to check if .button-label currently has text of 'check' or 'uncheck'


//this function checks if the .button-label is currently check or uncheck 
function isButtonNameCheck (item) {
    if(item == 'check') {
        return true;
    } else {
        return false;
    }
}

// creating global variable for check and uncheck
// cant be inside the function because you're always checking the current value inside function
let isButtonCurrentlyCheck = true;

// first .shopping-item-toggle selector : body > div > ul > li:nth-child(1) > div > button.shopping-item-toggle


function changeCheckButton() {
    $('.shopping-item-toggle').on('click', event => {
        event.stopPropagation();
        event.preventDefault();
        $(event.currentTarget).empty();
        // establish the main state of the logic so you know how to move forward 
        // thats why we set the state in variable
        // if check = true, change to check and none
        // if uncheck = true, change to uncheck and line through

        // establish variable to represent the current target's current text
        // let isButtonTrue = isButtonNameCheck($(event.currentTarget).text());
        let isButtonTrue = isButtonCurrentlyCheck;

        // console.log isButtonTrue to see if it works
        console.log(isButtonTrue);

        // create a conditional statement to change event.currentTarget's inner text based on current state
        if(isButtonTrue == true) {
            // need line through once you click on button
            // need to target the parent span of the current target
            //$('.shopping-item-toggle').parents().eq(3).addClass('.shopping-item__checked');
            //$(event.currentTarget).parent().parent().prev().addClass('.shopping-item__checked');
            // change button label to uncheck
            $(event.currentTarget).text('uncheck');
            isButtonCurrentlyCheck = false;
        } else if (isButtonTrue == false) {
            // remove the line through 
            // need to target the parent span of the current target
            // $(event.currentTarget).parent('span').removeClass('.shopping-item__checked');
            // change button label to check
            $(event.currentTarget).text('check');
            isButtonCurrentlyCheck = true;
        }
    });  
}

$(changeCheckButton);