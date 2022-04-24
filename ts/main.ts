window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");// this ill grab the child button below form
    formBtn.onclick = main;
}

function main():void{
    alert('register button was clicked')
}