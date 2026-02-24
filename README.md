# 1. Difference Between getElementById, getElementsByClassName, and querySelector / querySelectorAll :
## getElementById():
- It Selects one element based on its unique id.
- It Returns a single element object.
- Since IDs should be unique, it always returns either one element or null.

  
**Example :** const element = document.getElementById("header");
## getElementsByClassName()
- It Selects elements that share the same class name.
- It Returns a live HTMLCollection (updates automatically if DOM changes).
- we must loop through it to access individual elements.


**Example :** const items = document.getElementsByClassName("card");
## querySelector() :
- It selects the first element that matches a CSS selector.
- It is very flexible because it supports any valid CSS selector.


**Example :** const firstCard = document.querySelector(".card");

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
## How It Works:
Standard DOM events actually go through a three-step journey. <br>
**1. Capturing Phase:** The event starts from the root of the document and propagates down to the target element. <br>
**2. Target Phase:** The event reaches the target element where it triggers any handlers attached directly to that element. <br>
**3. Bubbling Phase:** After reaching the target element, the event bubbles up back through the parent elements. <br>

# 4. What is Event Delegation? Why Is It Useful?
## Event Delegation :
Event Delegation is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to their parent.

It is Useful because 
- It improves performance (fewer event listeners)
- It works for dynamically added elements
- It keeps code cleaner and more organized

# 5. Difference Between preventDefault() and stopPropagation():
## preventDefault():
- It stops the default browser behavior.
- It does NOT stop event bubbling.


**Example:** <br>
form.addEventListener("submit", function(event) {
  event.preventDefault();
});
## stopPropagation():
- It stops the event from moving up (or down) the DOM tree.
- It prevents bubbling.


**Example:** <br>
button.addEventListener("click", function(event) {
  event.stopPropagation();
});









