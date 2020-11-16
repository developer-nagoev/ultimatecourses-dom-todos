/* ==============================
🔥 DOM Nodes Explained
 ================================ */

//  <html>
console.dir(document.documentElement);

// <head>
console.dir(document.head);

// <body>
console.dir(document.body);

// Print body constructor
console.log(document.body.constructor.name);

// Print prototype chain
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

/* NodeTypes
1. Element
2. Attribute
3. Text
4. CDATASection
5. EntityReference
6. Entity
7. ProcessingInstruction
8. Comment
9. Document
10. DocumentType
11. DocumentFragment
12. Notation
*/

console.log(document.body.nodeType);
console.log(document.nodeType);

// nodeName
console.log(document.body.nodeName);

// tagName
console.log(document.body.tagName);
