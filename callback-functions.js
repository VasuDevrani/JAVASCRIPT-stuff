// function displayer(e)
// {
//     console.log(e);
// }
// function add(a,b)
// {
//     return a+b;
// }
// displayer(add(3,4));

// function greet(function2)
// {
//    console.log("how are you");
//    function2();
// }

// function newt()
// {
//     console.log("hello");
// }

// greet(newt);
// // When a function is called as ans argument inside another function, called callback function
// // always a function is written withour parenthesis


// // arrow functions
// let greet= function(user){
//     console.log("hello" + user);
//     return 1;
// }
// // or 
// let greeti=(user)=>{
//     console.log("hello" + user);
//     return 1;
// }


let game=(function_call)=>{
    console.log("So lets play a game");
    function_call();
}

function hello(){   //Parent

    setTimeout(() => {   //Child
        console.log("But what to play?");
          
        setTimeout(() => {   //Grand-child
            console.log("The game could be cricket");

            setTimeout(() => {   //Grand Grand Child
                console.log("Brings the Bat and Ball so that we can play it");
            }, 3000);
        }, 2000);
    }, 2000);
}

game(hello);