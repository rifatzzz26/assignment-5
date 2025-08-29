🔰 Q1: What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

document.getElementById() selects one element by its unique ID,
document.getElementsByClassName() selects all elements by their class name,
document.querySelector() selects the first matching element using any CSS selector,
and document.querySelectorAll() selects all matching elements using any CSS selector.

🔰 Q2: How do you **create and insert a new element into the DOM**?

Answer: 👇
To create and insert a new element into the DOM, you first create it using document.createElement().
Next, you prepare the new element by adding content, classes, or other attributes.
Finally, you insert it into the document using a method like appendChild() to add it as the last child of a parent element, or prepend() to add it as the first child.


🔰 Q3: What is **Event Bubbling** and how does it work?
Answer: 👇
event bubbling is like a flow of wave in water. you throw a rock on a point of the pond and the waves created and slowly spreading from the point to all on the surface to the last border of the pond.
just like you click on a deeply nested element and it creates a bubble. which goes from the targetted button to the top level which is the top level of the DOM tree.
we can add event listers and do all kinds of stuff with this feature.


🔰 Q3: What is **Event Bubbling** and how does it work?

Answer: 👇
event bubbling is like a flow of wave in water. you throw a rock on a point of the pond and the waves created and slowly spreading from the point to all on the surface to the last border of the pond.
just like you click on a deeply nested element and it creates a bubble.
which goes from the targetted button to the top level which is the top level of the DOM tree.
we can add event listers and do all kinds of stuff with this feature.

🔰 Q5: What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: 👇
preventDefault() is like a little dude who is in charge of one and only element only. 
but stopPropagation() is like the big guy who is the big dawg who does the job of holding down a wave of a huge tide or tied, what ever it is.

preventDefault() blocks the default behavior of an individula element.

On the controray, the stopPropagation() blocks the flow of the event bubbling going to the top level of the DOM.
