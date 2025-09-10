
**1.Answer:**
getElementById → Used to get a specific element by its ID name, as defined in the CSS file.

getElementsByClassName → Used to get all elements with a specific class name, as defined in the CSS file.

querySelector → Used to get only the first element that matches a CSS selector.

querySelectorAll → Used to get all elements that match a CSS selector.
**2.Answer:**
First, I create a new element using the document.createElement('elementName') method. Then, I identify the target element using event bubbling and retrieve its innerHTML with element.innerHTML. Finally, I use the append() method to add the newly created element, like this: element.append(createdElement).

**3.Answer:**
Wherever the event occurs, it is handled by the target element and can also be passed to its parent elements.

Event bubbling means the event moves upward from the target element to its parent elements.

In contrast, event capturing (or "trickling") means the event moves downward from the top of the DOM (like the document) to the target element.

**4.Answer:**
Event delegation is a technique where a single event listener is added to a parent element to handle events on its child elements.

It is useful because it reduces code, improves performance, and allows handling of multiple child elements, including those added dynamically.
**5.Answer**
preventDefault() method is default action .its cant stop default action
stopPropagation() methos stops the default action
  
