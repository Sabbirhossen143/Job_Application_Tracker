# 1. Difference Between getElementById, getElementsByClassName, and querySelector / querySelectorAll
## getElementById() :
- It Selects one element based on its unique id.
- It Returns a single element object.
- Since IDs should be unique, it always returns either one element or null.

  
Example : const element = document.getElementById("header");
## getElementsByClassName()
- It Selects elements that share the same class name.
- It Returns a live HTMLCollection (updates automatically if DOM changes).
- we must loop through it to access individual elements.


Example : const items = document.getElementsByClassName("card");
## querySelector() :
- Selects the first element that matches a CSS selector.
- Very flexible because it supports any valid CSS selector.


Example : const firstCard = document.querySelector(".card");

# 2. How to Create and Insert a New Element into the DOM 
## First, create the element. <br>
const newDiv = document.createElement("div");
## Secondly, add content or attributes. <br>
newDiv.textContent = "Hello World!";
newDiv.classList.add("box");
## Thirdly, insert it into the DOM. <br>
document.body.appendChild(newDiv);

# 3. What is Event Bubbling? How Does It Work?
## Event Bubbling :
Event Bubbling is a behavior in JavaScript where an event starts from the target element and then moves upward through its parent elements.















