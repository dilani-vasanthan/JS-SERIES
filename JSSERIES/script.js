//Q1//empty object
var a={};
console.log(a);
//Q2//
var person={
  name:"Dila",
  age:23,
introduceYou:function()
{
  return ("hello,my name is"+"  "+this.name);
}
};
console.log(person.introduceYou());

//3//function called greet student 

 var student ={name:"Dilani",
                    age:23
                     };
          function greetStudent()   {
            return ("Hello"+   "   " +student.name+"  "+"Welcome to the Coding School");
          }    
          console.log(greetStudent()); ;  
//4//dot notation and bracket notation object
var obj = {
    name: "Dila",
    age: 80,
    language: "javascript",
  }
  console.log(obj.name);
 
   console.log(obj["name"]);
  
  

  //5//to add a new property to an existing object
  const object = {
    name: "Dila",
    age: 80,
    language: "javascript",

  }
  object.language="tamil";
  console.log(object);
//6//remove property
var developerOne = {
    name: "Dilani",
    country: "United States",
    isEmployed: true,
  };
  delete developerOne.name;
  console.log(developerOne);


//7// check weather a property exists in an object
   var developer = {
    name: "Dilani",
    country: "United States",
    isEmployed: true,
  };
  console.log("name" in developer);
//8//create two objects and merge studentcourse
 studentOne={name:"dila"};
 Course={course:"IT"};
 studentCourse={...studentOne,...Course};
 console.log(studentCourse);



//9//how do you check a specific property
var z={address:"Sandilipay",name:"Raja"};

console.log(z.address);

//10//
let myObj = { title: "Chris", author: "Dil",year:2023, };

let myString = JSON.stringify(myObj);
console.log( myString);
//11//
var students=["Dilani",23,3.512];
console.log(students);