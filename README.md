# 1. Difference Between getElementById, getElementsByClassName, and querySelector / querySelectorAll
## getElementById() :
- It Selects one element based on its unique id.
- It Returns a single element object.
- Since IDs should be unique, it always returns either one element or null.

  
Example :
const element = document.getElementById("header");
## getElementsByClassName()
- It Selects elements that share the same class name.
- It Returns a live HTMLCollection (updates automatically if DOM changes).
- we must loop through it to access individual elements.

  Example : const items = document.getElementsByClassName("card");
