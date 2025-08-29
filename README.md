**What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Answer: 
getElementById --> used to get a single element from the DOM, returns an object element or Null.

getElementsByClassName --> used to get all elements with the same class name, returns a
live HTML collection or [], can't be used with the 'for each' method.

querySelector --> returns the first found element or null. Can use all kinds of
search methods to find the element (tag name, class name, id etc)

querySelectorAll --> It's the same as querySelector, but returns all the found elements
in a static NodeList, and works with for each. If no results are found, it returns an empty NodeList


**How do you create and insert a new element into the DOM?**
Answer:
1. Create an Element (const newElement = document.createElement('element name')
2. insert content into the element (newElement.innerText/innerHTML = 'content goes here'/`html elements go here`)
3. Append the element to a parent (parent.appendChild(newElemenet)


**What is Event Bubbling and how does it work?**
Answer: 
Event bubbling is how events travel from a specific element up through its parent elements.
When we click a nested element, the event first runs on that element, then on each parent in order,
until it reaches the main parent 'document'.

**What is Event Delegation in JavaScript? Why is it useful?**
Answer: 
Event Delegation is a technique to reduce the use of multiple event listeners on child elements.
Hence, improving  performance and saving memory.
It works by adding eventListener to a parent and using .target to target a child element.


**What is the difference between preventDefault() and stopPropagation() methods?**
Answer: 
Both are different methods, one is used to prevent the default behavior of the browser 
(eg: reloading the page after submitting a form).
The other one is to stop the event bubbling effect & doesn't stop default behavior (eg: clicking a button within a div will
not trigger the div's event, if stopPropagation() is set on the button element)
