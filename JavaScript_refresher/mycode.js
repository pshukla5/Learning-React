console.log("Hello");

for (let idx = 0; idx < 10; idx++) {
    
    console.log("Lorem ipsum dolor sit.");
    
}

// ---------------------------------------------------------------------------


let a = 3;
console.log(a);

var b = 34;

// var
// let
// const
// ---------------------
// Datatypes

// Numbers
// Objects
// Booleans
// String
// Undefined
// null

function hello(){
    console.log("hey prabhat");
}

let obj = {
    r: 32,
    m:34
}

// 3
// hello()
// hey prabhat
// console.log(obj)
// {r: 32, m: 34}
// console.log(obj.m)
// 34
// console.log(obj.r)
// 32

let obj1 = {
    r: 32,
    m:34,
    func: function myFunc(number) {

        console.log("The number is " + number);
        
    }

}

// console.log(obj1.func(45))
// The number is 45

// -------------------- EVENT LISTENER ----------------------------------------

// document.addEventListener("click", function click(){
//     console.log("clicked");


//     alert("Hello");

//     let conf1 = confirm("Do you want to proceed?");
//     let conf = confirm("Are you sure?");

//     console.log(conf1 + " " + conf)
// })

// clicked
// true false

// ----------------------------------------------------------------------------------------

//         JAVASCRIPT String Methods

// ------------------------------------------------------------------------------------------



let arr = [23, 44, 45];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

arr.forEach(element => {
    console.log(element);
});

arr.forEach(element => {
    console.log(element);
});




// ----------------  THIS KEYWORD --------------------------

console.log(this);

let func1 = function () {
    console.log(this);
}

func1();

let func = () => console.log(this);
func();

let obj2  = {
    
    a : this,

    func1 : function () {
        return this;
    },

    func2 : () => this

}

console.log(obj2.a);
console.log(obj2.func1);
console.log(obj2.func2);

// ------------ CALLBACK FUNCTION --------------------------

setTimeout(() => {

    console.log("callback function")
    
}, 4000);

console.log("neeche wai script");