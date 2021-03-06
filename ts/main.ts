window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");// this ill grab the child button below form
    formBtn.onclick = main;
}

function main():void{
    resetErrorMessages();
    isTextPresent("first-name","First Name is required");
    isTextPresent("last-name", "Last name is required")
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");

    for (let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if (currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the text box with the given id has some text inside it
 * @param id The id of the <input type = "text"> to validate
 * @param errMsg The message to display in the sibling span of the textbox
 * @returns the text box
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errorSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
    else{
        return true;
    }
}
