function solve() {
    let name = "Todor";
    let age = 30;
    let arr = ["a", "b", "c", "d"]

    console.log(name);
    console.log(age);
    console.table(arr);
    console.log(arr[2]);
    console.log(arr.length);
}
solve();



function readText(input) {
    let name = input[2];
    console.log(name);
}
readText(["a", "b", "c", "d"]);


function hello(){
    console.log("Hello world!");
}
hello();

function greetingByName(input){
    let name = input[0];
    let age = 30;
    let result = "Hello, " + name + "!";
    console.log(result);
    let str = `${name} Petrow ${age}`;
    console.log(str);
}
greetingByName(["Todor"]);