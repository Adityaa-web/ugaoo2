// let name = "Aditya";
// console.log("Welcome to Javasceipt, " + name + "!");
// function test(){
//     var a="Adi";
//     let c="niraj";
//     console.log(c);
// }

// a=1;
// let a; //Error before intialization same constant but not for Var

// let a=["a","b","c",10*2, true]; // Data Types string,number,Boolean
// console.log(!a[4]);

// let a;
// console.log(a);

// let p={name: "Aditya", age: 20};
// console.log(p.name,p.age); //object Non-p

// *Operators*
// Arithmatic operators
// let a=10;
// let b= 12;
// console.log(a+2);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b); //Modulus operator
// console.log(a**b) // Exponential operator

// Assignment operators
//  let a=10;
//  console.log(a+=2);
//  console.log(a-=2);
//  console.log(a*=2);
//  console.log(a/=2);
//  console.log(a%=2);

// Comparison operators
//  let a=17;
//  let b= "10";
//  console.log(a==b);
//  console.log(a===b);
//  console.log(a!=b);
//  console.log(a!==b);
//  console.log(a>b);
//  console.log(a<b);
//  console.log(a>=b);
//  console.log(a<=b);

// Logical operators
// let a=2;
// let b=2;
// let c=2;
// console.log(a==b&&b==c);
// console.log(a==b||b==c);
// console.log(!a);  // Not operator

// Ternary operator
// let age=15;
// let result= age<=18 ? "Minor" : "Adult";
// console.log(result);

// Typeof operator
// let age=2;
// console.log(typeof(age));

// oprator precedence
// let a=2;
// let b=3;
// let c=6;
// console.log(a+b*c/a)+b;

// Control Flow
// Conditional statements
// let age=70;
// if(age>=18 && age<60){console.log("You are eligible to vote.");}
// else if(age>=60){console.log("You are older to vote");}
// else{console.log("You're not eligible to vote.")}
// let marks=20;
// if(marks>=90){console.log("Grade A");}
// else if(marks<90 && marks>75){console.log("Grade B");}
// else if(marks<75 && marks>35){console.log("Grade C");}
// else{console.log("Fail")}
// switch case
// let day=0;
// switch (day) {
//   case 1:
//     console.log("MONDAY");
//     break;
//   case 2:
//     console.log("TUESDAY");
//     break;
//   case 3:
//     console.log("WEDNESDAY");
//     break;
//   case 4:
//     console.log("THURSDAY");
//     break;
//   case 5:
//     console.log("FRIDAY");
//     break;
//   case 6:
//     console.log("SATURDAY");
//     break;
//   case 7:
//     console.log("SUNDAY");
//     break;
//   default:
//     console.log("Invalid day");
// }

// For Loops
// let i;
// for(i=0; i<=5; i++){console.log("count:" + i)}

// While loop
// let i=1;
// while(i<=5){console.log("count:" + i); i++}

// let cars = ["Pagani" , "BMW" , "Audi" , "Lambo" , "Mercides" , "Suzuki" , "Kawasaki"];
// let i=0;
// while (i<cars.length){console.log(cars[i]); i++}

// let i=50;
// while (i>=1){ console.log(i); i--}

// Exrcise-1
// let minutes=2;
// console.log(minutes*60);

// // Exercise-2
// let base=4;
// let height=5;
// let area;
// console.log(area=base * height);

// // Exercise-3
// let mark=91;
// if(mark>=90){console.log("Grade A");}
// else if(mark<90 && mark>75){console.log("Grade B");}
// else if(mark<60 && mark>50){console.log("Grade C");}
// else{console.log("Fail");}

// // Exercise-4
// let i;
// for(i=1;i<11;i++){console.log("count:" + i);}
// i=1;
// let num=12;
// while (i<=5){console.log(num*i); i++}

// // Exersice-5
// let day=1;
// switch (day) {
//   case 1:
//     console.log("MONDAY");
//     break;
//   case 2:
//     console.log("TUESDAY");
//     break;
//   case 3:
//     console.log("WEDNESDAY");
//     break;
//   case 4:
//     console.log("THURSDAY");
//     break;
//   case 5:
//     console.log("FRIDAY");
//     break;
//   case 6:
//     console.log("SATURDAY");
//     break;
//   case 7:
//     console.log("SUNDAY");
//     break;
//   default:
//     console.log("Invalid day");
// }

// // Exercise-6
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let operator= prompt("Enter an operator (+, -, *, /):");

// let result;

// switch (operator) {
//     case "+":
//         result = parseInt(num1) + parseInt(num2);
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;
//     case "/":
//         result = num1 / num2;
//         break;
//     default:
//         result = "Error: Invalid operator.";
// }
// console.log("Result:" + result);

// Exercise 2.1
// function findEvenOrOdd(arr, type) {
//     let result = [];
//     let i = 0;

//     do {
//       if (type === "even" && arr[i] % 2 === 0) {
//         result.push(arr[index]);
//       } else if (type === "odd" && arr[i] % 2 !== 0) {
//         result.push(arr[index]);
//       }
//       index++;
//     } while (index < arr.length);

//     return result;
//   }

// Exercise 2.2
// let a=2;
// let b=2;
// do{
//     a++;
//     console.log(a*b);
// }
// while(a*b==10)/

// Breakk

// session 2

// objects traditional way

// let obj1 = {
//     name: "Aditya",
//     age: 20,
//     job: "Developer"
// };
// console.log(obj1.age);

// object accesing in constructor
// let obj2 = new Object();
// obj2.name = "Aditya";
// obj2.age = 20;
// obj2.job = "Developer";
// console.log(obj2["name"]);
// console.log(obj2.name);

// object modifying
// let obj3 = {
//     name: "Aditya",
//     age: 20,
//     job: "Developer",
// };
// console.log(obj3);
// obj3.age = 17;
// console.log(obj3);

// Adding properties to an object
// let carobj={mobel:"dodge"}
// carobj.color="black";
// console.log(carobj);

// // Removing properties from an object
// let carobj1={mobel:"dodge",color:"black"};
// delete carobj1.color;
// console.log(carobj1);

// // checking if a property exists in an object
// let carobj2={mobel:"dodge"};
// console.log("color" in carobj2);
// console.log(carobj2.hasOwnProperty("mobel"));

// // Iterating trhough  object properties
// let carobj3={mobel:"dodge",color:"black"};
// for (let key in carobj3) {
//     console.log(key + " : " + carobj3[key]);
// }

// // merging objects
// let obj1 = { name: "Aditya", age: 20 };
// let obj2 = {obj1,carobj,carobj1,carobj2,carobj3};
// console.log(obj2);

// //object length
// let obj4={name:"aditya",age:20,job:"developer",hobby: "badminton"};
// console.log(Object.keys(obj4).length);

// array using constructor
// let a = new Array(5,10,15);
// console.log(a);

// Accessing array elements
// let a = [1, 2, 3, 4, 5];
// console.log(a[0]);
// console.log(a[1]);

// // Accessing the first element of an array
// let b = [1, 2, 3, 4, 5];
// let fst= b[0]
// console.log("First Element:", fst);

// // Accessing the last element of an array
// let c = [1, 2, 3, 4, 5];
// let lst = c[c.length - 1];
// console.log("Last Element:", lst);

// // Modifying array elements
// let d = [1, 2, 3, 4, 5];
// console.log(d);
// d[0] = 10;
// console.log(d);

// // Adding elements to an array
// let e = [1, 2, 3, 4, 5];
// console.log(e);
// e.push(6);
// e.unshift(0);
// console.log(e);

// // Removing elements from an array
// let f = [1, 2, 3, 4, 5];
// console.log(f);
// f.pop();
// console.log(f);
// f.shift();
// console.log(f);
// f.splice(1,2);
// console.log(f);

// array iteration
// let g = [1, 2, 3, 4, 5];
// for (let i = 0; i < g.length; i++) {
//     console.log(g[i]);
//     }

// array concatation
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = a.concat(b);
// console.log("Concatenated Array:",c);

// // Array to String
// let d = [1, 2, 3, 4, 5];
// let str = d.toString();
// console.log("Array to String:", str);

// // type of array
// let e = [1, 2, 3, 4, 5, true , "hello"];
// console.log("Type of Array:", typeof e[5]);

// create string using constructor
// let str = new String("Hello");
// console.log("String using constructor:", str);

// //template literals
// let n1 = 'Aditya';
// let n2 = 'kadam', $(n1);
// console.log(`${n1} ${n2}`);

// Upper and lowercase , search , replace
// let a ="welcome to javasceript";
// let b = a.indexod("javasceript");
// console.log(b);

// let c = "Aditya welcome to Place it";
// let d = c.replace("Place it","Anottation");
// console.log(d);

// trim
// let a = '     Aditya welcome to Placeit          ';
// let b = a.trim();
// console.log(b);

// //acces character from string
// let c = "learn javascript";
// let d = c.charAt(8);
// console.log(d);

// //stirng comparision 
// let e = "javascript";
// let f = "javascript";
// console.log(e == f);


//scientific notation
// let a = "100" - "20";
// let b=  "100" * "20";
// let c = "100" / "20";
// console.log(a);
// console.log(b);
// console.log(c);


// // Math
// console.log("Math LN10:" + Math.LN10);
// console.log("Math LN2:" + Math.LN2);
// console.log("Math LOG10E:" + Math.LOG10E);
// console.log("Math LOG2E:" + Math.LOG2E);
// console.log("Math SQRT1_2:" + Math.SQRT1_2);
// console.log("Math SQRT2:" + Math.SQRT2);
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.round(4.7));
// console.log(Math.abs(-4.7));
// console.log(Math.max(4.7, 5.7, 6.7));
// console.log(Math.min(4.7, 5.7, 6.7));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(16));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10));
// // console.log(Math.sin(30));
// console.log(Math.cos(30));
// console.log(Math.tan(30));


