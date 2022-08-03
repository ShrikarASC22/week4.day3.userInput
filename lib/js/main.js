let outputButton = document.getElementById('submit_button');
let output = document.getElementById('story_result');
let mainTitle = document.getElementById("main_title")
let inputBox1 = document.getElementById('title_input');
let inputBox2 = document.getElementById('noun');
let inputBox3 = document.getElementById('verb');
let inputBox4 = document.getElementById('adjective');
let container = document.querySelector('form');

inputBox1.onkeyup = function (event){
    event.preventDefault();
    mainTitle.innerHTML=inputBox1.value
}

// ok I think everything should work now ok 
outputButton.onclick = function (event) {
    event.preventDefault();
    let userInput = [inputBox1.value, inputBox2.value, inputBox3.value, inputBox4.value];
    console.log(userInput);
    
    let result = ('Last night I ate a ' + userInput[1] + ' and today I just had to ' + userInput[2] + '. What a ' + userInput[3] + ' day!')
    //removes original div and replaces with output box
    container.style.display = 'none';
    output.innerHTML = result
    
}

