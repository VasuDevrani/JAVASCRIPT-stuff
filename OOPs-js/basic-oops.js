console.log("Welcome");

// Objects in js
let car={
    name:"Maruti 800",
    speed:'120km/hr',
    run:function(){
          console.log("Ruunning car");
    },
    stop:function()
    {
        console.log("The car has stopped");
    }
};



console.log(car);
// Object constructors in js
function cars(name,speed){
    this.name=name,
    this.speed=speed,
    this.Ruunning=function()
    {
         console.log(`${name} is running with the speed of ${speed}km/hr`);
    }
};

let car1=new cars('verna',100);
console.log(car1);
car1.Ruunning();