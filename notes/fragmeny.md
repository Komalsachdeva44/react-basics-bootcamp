# React Fragment

## **1. Fragment kya hota hai?**
React mein **Fragment** ek special component hai jo aapko multiple elements ko group karne ka option deta hai bina extra DOM nodes create kiye. Yani agar aapko multiple child elements ko return karna ho, lekin unke around koi extra wrapper element, jaise `<div>`, nahi chahiye ho, toh aap **Fragment** ka use kar sakte hain.

### **Fragment ka use kyun karein?**
- **Extra DOM nodes se bachna:** Jab aapko ek wrapper element ki zarurat nahi hoti, Fragment aapko extra nodes create kiye bina multiple elements ko group karne ka moka deta hai.
- **Performance:** React ko extra DOM nodes render karne ki zarurat nahi hoti, jo performance ko improve karta hai.
- **Cleaner Code:** Aap apne code ko clean rakh sakte ho bina unnecessary wrapper elements ke.

---

## **2. Fragment ka Syntax**
React mein Fragment ko use karne ka do tarike hote hain:

### **(1) Full Syntax**
```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <React.Fragment>
      <h1>Heading</h1>
      <p>Some Content</p>
    </React.Fragment>
  );
};


Usse of fragment 
const MyComponent = () => {
  return (
    <>
      <h1>List of Items</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
};
