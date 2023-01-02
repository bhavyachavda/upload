// getName();
// console.log(x)

// var x = 7;
// function getName(){
//     console.log("I am bhavya chavda");
// } 

// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 100;
//     console.log(x);
// }

// function b(){
//     var x = 10;
//     console.log(x);
// }

// function x(){
//     var a = 1;
//     setTimeout(function(){
//         console.log(a);
//     }, 5000);
//     console.log("I am bhavya chavda")
// }
// x();


function x(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function (){
            console.log(i);
    },i * 1000);
}
    console.log("I am bhavya");
}
x();