console.log("hello world");

const options =["rock","paper","scissors"];

function getComputerChoice(){
    return console.log(options[(Math.floor(Math.random()*options.length))]);
};

getComputerChoice();
