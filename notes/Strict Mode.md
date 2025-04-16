# React Strict Mode aur Fragment ko samajhna

## **1. React Strict Mode kya hota hai?**
React ka **StrictMode** ek aisa tool hai jo aapke app mein potential problems ko detect karta hai. Yeh sirf development mode mein kaam karta hai aur yeh aapko help karta hai:

- **Deprecated methods** ke baare mein batata hai.
- **Unsafe lifecycle methods** ko warn karta hai.
- Wo cheezein jo future React versions mein **issues** create kar sakti hain, unko highlight karta hai.

StrictMode ka production build par koi asar nahi padta, yeh sirf development mein aapki code quality improve karne mein madad karta hai.

### Key Points:
- **StrictMode** development mein issues detect karta hai.
- Iska **production website** pe koi asar nahi padta.

---

## **2. Strict Mode do baar render kyun karta hai?**
Jab **React StrictMode** on hota hai, toh yeh development ke dauran kuch components ko **do baar render karta hai**. Iska reason yeh hai:

- **State updates** ko check karna.
- **Side effects** ko detect karna jo future mein issues create kar sakte hain.

### **Yeh kyun hota hai?**
React yeh do baar render isliye karta hai taake components ko ekdum properly test kiya ja sake. Agar kuch issues hain, toh yeh StrictMode aapko turant bata dega.

#### **Example:**
```jsx
function MyComponent() {
  console.log("Rendering Component");
  return <h1>Heading</h1>;
}


