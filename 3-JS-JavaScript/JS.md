# `Introduction to JavaScript`
*Use CTRL + F to search for keywords in this file*  
*You are encouraged to copy and alter the code in this file to understand how it works*

<br>

***This file is intended as a brief introduction to JavaScript, and not a in depth explaination of the language.***

<br>

___

<br>

Covered in this file:
1. [`JavaScript Defined`](#javascript-defined)
1. [`Adding JS to HTML`](#adding-js-to-html)
1. [`Comments`](#comments)
1. [`Data Representation`](#data-representation)
1. [`Variables`](#variables)
1. [`Operators`](#operators)
1. [`Conditionals`](#control-flow-statements-conditionals)
1. [`Loops`](#control-flow-statements-loops)
1. [`Functions`](#functions)
1. [`Classes`](#classes)
1. [`Objects`](#objects)


<br>

___

<br>

# `JavaScript Defined`
`JavaScript (JS)` is a high-level, interpreted programming language designed to make web pages interactive and dynamic.
* `JavaScript` can be used for client-side scripting to create dynamic content, handle events, and interact with the user.
* Javascript files have the file extension `.js`


<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Adding JS to HTML`
There are 3 ways that Javascript can be added to an HTML file

`External JavaScript:`
* JavaScript code is stored in a separate external file (ex: script.js) and linked to the HTML document.

```html
<!DOCTYPE html> 
<html lang="en-us"> 
  <head>
    <title>Page Title</title> 

    <!--External JavaScript: use the <script> tag with the src attribute-->
    <script src="script.js"></script>


  </head> 

  <body> 

    <h1>This is a heading</h1> 
    <p>This is a paragraph.</p> 

  </body> 
</html> 
```

<br>

`Internal JavaScript:`
* JavaScript code is directly written within the `<script>` tags in the HTML document.

```html
<!DOCTYPE html> 
<html lang="en-us"> 
  <head>
    <title>Page Title</title> 

    <!--Internal JavaScript: use the script tag and write the code in between the tags-->
    <script>

      function showMessage() {
        console.log("We use console.log() to show output in JavaScript")
      }

    </script>

  </head> 

  <body> 

    <h1>This is a heading</h1> 
    <p>This is a paragraph.</p> 

  </body> 
</html> 
```

<br>

`Inline JavaScript:`
* JavaScript code is added directly to HTML elements using the `"onclick"` attribute or other event attributes.

```html
<!DOCTYPE html> 
<html lang="en-us"> 
  <head>
    <title>Page Title</title> 

    <!--Internal JavaScript: use the script tag and write the code in between the tags-->
    <script>

      function showMessage() {
        console.log("We use console.log() to show output in JavaScript")
      }

    </script>

  </head> 

  <body> 

    <h1>This is a heading</h1> 
    <p>This is a paragraph.</p> 

    <!-- 
     Inline JavaScript: is typically paired with interal or external js, and uses
     special event attributes
    -->
    <button onclick="showMessage1()">1. Click Me </button>
    <button onclick="showMessage2()">2. Click Me </button>

  </body> 
</html> 
```

<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Comments`
`Comments` are lines of text written inside of a source code file that are ignored and not executed as apart of the program.

`Comments:`
* can be notes about the source code 
* can be used to disable source code temporarily (prevent certain code from executing)
* can include metadata about the source code file
* use `//` for single line comments
* use `/* */` for multi-line comments

```js
// This is a single line comment

/*
   This 
         is
               a
                  multi-line
                              comment

*/
```

   
<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Data Representation`
`Data` refers to raw, unorganized facts or information that can be collected, recorded, measured, or analyzed.

In order to work with data it must be classified into types, and identified to the computer. 


## `Literal Data`
`Literals` are actual data values that do not represent any other data.

| **Value**                           | **Description**                                       | **Type in JavaScript**          |
|-------------------------------------|-------------------------------------------------------|----------------------------------|
| `true`                              | Booleans (true/false)                                 | Boolean                          |
| `false`                             | Booleans (true/false)                                 | Boolean                          |
| `2`                                 | Integers (whole numbers)                              | Number                           |
| `2.0`                               | Floats (fractional numbers)                           | Number                           |
| `"a"`                               | Characters (symbols)                                  | String                           |
| `"Hello"`                           | Strings (a group of characters)                       | String                           |
| `["a","b","c","d"]`                 | Arrays (a group of values)                            | Object (Array)                   |
| `{"a": 97, "b": 98, "c": 99}`       | Dictionaries/Hashmaps (a group of key:value pairs)    | Object                           |
| `console`                           | Objects (custom data type)                            | Object                           |


Here is what they look like in JavaScript:
```js
true;                               //booleans      (true/false)
false;
2;                                  // integers     (whole numbers
2.0;                                // floats       (fractional numbers)
"a";                                // characters   (symbols) 
"Hello";                            // strings      (a group of characters)
["a","b","c","d"];                  // arrays       (a group of values) 

{"a" : 97,  "b" : 98, "c" : 99}; 
//dictionaries/hashmaps(a group of key:value pairs)  

console;                            // objects      (custom data type) 
```
<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Variables`
`Variables` are pointers to locations in memory where literal data is physically stored.

<br> 

`Variables can be though of as containers for literal data.`

*Variables as containers is a good way for beginners to think about variables, but it is a misrepresentation of how variables actually work. Variables are actually pointers to locations in computer memory where data is physically stored. As you learn more about programming this distinction becomes important.* 

<br>

In JavaScript, variables can be declared using keywords like `var`, `let`, or `const`.
```js
var myVariable = "My value varies";

let message = "Goodbye World";
let x = 6;
let y = 8; // In general it is better to use 'let'

const pi = 3.14; // const for constants
```
<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Operators`
`Operators` are symbols or keywords that represent a particular operation on data.

There are many different types of operaters but here are some for beginners:

## `Assignment`
| **Operator** | **Example**  | **Description**              |
|--------------|--------------|------------------------------|
| `=`          | `let a = 10` | Assigns the value to a       |

```js
let a = 10;
let b = 2;
```

<br>

## `Arithmetic`
| **Operator** | **Example**   | **Description**                  |
|--------------|---------------|----------------------------------|
| `+`          | `a + b`       | Addition                        |
| `-`          | `a - b`       | Subtraction                     |
| `*`          | `a * b`       | Multiplication                  |
| `/`          | `a / b`       | Division                        |
| `%`          | `a % b`       | Remainder                       |
| `++`         | `a++`         | Increment (add 1 to the value)  |
| `--`         | `a--`         | Decrement (subtract 1 from value) |

```js
a + b; // addition
a - b; // subtraction
a * b; // multiplication
a / b; // division
a % b; // remainder
a++;   // increment (add one)
a--;   // decrement (subtract one)
```

<br>

## `Comparision`
Also called `Relational Operators`
| **Operator** | **Example** | **Description**                   | **Result** |
|--------------|-------------|-----------------------------------|------------|
| `==`         | `a == b`    | Equal to                         | `false`    |
| `!=`         | `a != b`    | Not equal to                     | `true`     |
| `>`          | `a > b`     | Greater than                     | `true`     |
| `>=`         | `a >= b`    | Greater than or equal to         | `true`     |
| `<`          | `a < b`     | Less than                        | `false`    |
| `<=`         | `a <= b`    | Less than or equal to            | `false`    |

```js
a == b; // Equal to >> false
a != b; // Not Equal to >> true
a > b ; // Greater Than >> true
a >= b; // Greater Than or Equal To >> true
a < b;  // Less Than >> false
a <= b; // Less Than or Equal To >> false
```

<br>

## `Logical Operators`
| **Operator** | **Example** | **Description** | **Result** |
|--------------|-------------|-----------------|------------|
| `!`          | `!c`        | NOT             | `false`    |
| `&&`         | `c && d`    | AND             | `false`    |
| `\|\|`         | `c \|\| d`    | OR              | `true`     |

```js
c = true;
d = false;
!c;     // NOT >> false
!d;     //     >> true
c && d; // AND >> false
c || d; // OR  >> true
```

<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Control Flow Statements: Conditionals`
`Control Flow Statements` control the flow of program execution, examples include conditionals and loops. 

`Conditionals` are structures that allow the computer to make decisions within the execution of source code. 

<br>

Conditionals use the keywords `if`, `else if`, and `else`
```js
x = 1; y = 10;

if(x == y){
   message = "x and y are equal";
}
else if(x > y){
   message = "x is larger than y";
}
else{
   message = "y is larger than x";
}
```

<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Control Flow Statements: Loops`
`Control Flow Statements` control the flow of program execution, examples include conditionals and loops. 

`Loops` are blocks of code used for repetitive execution of code.
* Loops used the keywords `while` and `for`

<br>

`While Loops` repeat a block of code as long as a specified condition is `true`.
```js
let count = 1;

while(count <= 10){
   console.log(count);
   count++;
}

/* Output:
1
2
3
4
5
6
7
8
9
10
*/
```

<br>

`For Loops` are used for iterating(looping) over a range of values or elements(items).
```js
for(let i = 0; i < 5; i++){
   console.log("Looping " + i);
}

/* Output:
Looping 0
Looping 1
Looping 2
Looping 3
Looping 4
*/
```

<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Functions`
Functions are reusable blocks of code that perform a specific task.
* Functions must be defined first
* Function must be called in order to execute

<br>

## `Function Definition` 
`Function Definition` is the process of creating a function by specifying its name, parameters, and the code to be executed.
* Can be thought of as teaching the computer how to perform a function.
* The code can be writen once and executed over and over. 
* The `function` keyword is used to indicate a function is being defined.

```js 
function hello(){
   console.log("The hello function was called.");
}

function add(x,y){  // x and y are called parameters
    console.log(x + y);
}

// There is no output because the function was not called 
```

<br>

## `Function Calling`
`Function Calling` is the act of instructing a function to execute.
* This involves using the function's name folled by parenthesis `()`, which may or may not contain values called arguements depending on the definition.

```js
hello(); // calling the hello function
// Output: The hello function was called.

add(2,2) // calling the add function with arguements
// Output: 4
```

<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Classes`
`Classes` are blueprints for creating data structures called objects.
* Classes define the properties(data) and methods(functions) that an object created from the class will have. 

`Objects` are typically built from a blueprint like the one below. 

```js 
//Defining the Animal Class (creating a blueprint for Animals)
class Animal {

   // Constructor Method to initialize object properties(builds objects)
   constructor(name, species) {
     this.name = name;
     this.species = species;
   }
 
   // Method to display information about the animal
   displayInfo() {
     console.log(`Name: ${this.name}, Species: ${this.species}`);
   }
 
   // Getter method to retrieve the sound of the animal
   get sound() {
     return "Some generic animal sound";
   }
 
   // Setter method to update the species of the animal
   set updateSpecies(newSpecies) {
     this.species = newSpecies;
   }

}
```

<br>

[Back To Top](#introduction-to-javascript)

___

<br>

# `Objects`
`Objects` are instances of a class that contain a collection of related `data` and `methods` that operate on that data.


## `Constructing Objects`
`Contructing an Object` is the act of building a new object with the class constructor method

In JavaScript objects can be a created as a collection of key-value pairs.
```js
let person = {
    name: "Alice",
    age:25,
    isStudent: true
}

console.log(person.name)        // Output: Alice
console.log(person.age)         // Output: 25
console.log(person.isStudent)   // Output: true
```

<br>

Objects are also created by explicitly calling a class constructor method.
syntax:
```
let variable = new Constructor();
```
```js
// Constructing an instance of the Animal class (an object)
const tiger = new Animal("Tony", "Tiger");
// variable = new Constructor()
```
Here the tiger variable stores an animal object. 
* `new Animal("Tony", "Tiger")` creates a new Animal object with the properties of "Tony", and "Tiger"

<br>

## `Accessing Properties`
`Accessing Properties` is the act of retrieving the literal value of a object property.
* this is achieved with dot `.` syntax

```js
tiger.name; // Tony
```
Here tiger refers to the object and we are accessing the name property of the object. 

<br>


```js
console.log( tiger.name ); // Output: Tony
```
`console` also refers to an object, but not an Animal object. 

`log()` is a method being called on the `console` object. 

<br>

## `Calling Methods`
`Calling a Method` is the act of instructing a method to execute using the data associated with an object.
* this is achieved with dot `.` syntax

```js
tiger.displayInfo(); // Output: Name: Tony, Species: Tiger
```
Here tiger refers to the object and displayInfo() is being called on the object

<br>

```js
tiger.sound();       // Output: Some generic animal sound
tiger.updateSpecies("Panthera tigris"); // tiger.species = Panthera tigris
```

<br>

[Back To Top](#introduction-to-javascript)

___

<br>

*Created and maintained by Mr. Merritt*

