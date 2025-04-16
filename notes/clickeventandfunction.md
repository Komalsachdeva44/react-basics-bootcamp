How to make a click event 

call function in the button click 

variable in functional component 


When we use button onclick function like this it will call function auto and show alert always even when button is not clicked yes that means even on refresh 

            <button onClick={handleClick()} >Click me  </button>
            To prevent it we use 
            onclick function like this 
                        <button onClick={handleClick} >Click me  </button>


### ✅ If you want to **run a function immediately** (no user interaction):

👉 Use **brackets**:

```js
handleClick(); // this will run right now
```

Example:

```jsx
const result = handleClick(); // runs now
console.log(result);
```

---

### ✅ If you want to **pass a function to be run later** (like on click, on hover, etc):

👉 Use **function reference** (no brackets):

```jsx
<button onClick={handleClick}>Click me</button>
```

React/JavaScript will **store the reference (like a pointer)** and run it **when the event happens**

---

### 🧠 So your logic is 💯 right:

> ✔️ Use `()` when **you want to call the function yourself right now**  
> ❌ Don’t use `()` if **you want the system (like React) to call it later**

React, JavaScript, or any event handler will then **take care of running the function when the time is right.**

---
