 React is maintained by Meta (formerly Facebook). 🧠💻

React js doesnot require npm if ur only learning the things You can use Cdn link also to run program or html page 
# 🌟 React Beginner Notes – Komal Sachdeva

## ✅ 1. Is React a Library or Framework?
- React is a **JavaScript library**, not a full framework.
- It is used only for building **User Interfaces (UI)**.
- React doesn't include routing, state management, or backend features — you can add those with other libraries.

---

## ✅ 2. What is ReactDOM?
- `ReactDOM` is a separate library that helps **render React components into the DOM**.
- It tells React **where** to show components in your actual HTML page.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```
- `document.getElementById('root')` → Finds the HTML element where the component should appear.
- `ReactDOM.createRoot()` → Creates a React root.
- `root.render(<App />)` → Renders your component inside the root.

---

## ✅ 3. What is Babel?
- Babel is a **JavaScript compiler** (tool).
- It converts **JSX** and **modern JavaScript (ES6+)** into **plain JavaScript**.
- JSX like this:

```jsx
const el = <h1>Hello</h1>;
```

Gets converted to:

```js
const el = React.createElement("h1", null, "Hello");
```

### In CDN-based setup:
```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
This allows Babel to work directly in the browser.

### In real projects (CRA, Vite):
Babel runs in the background via Webpack or Vite build tools.

---

## ✅ 4. What is a React Component?
### ➤ You created this:
```jsx
function App() {
  return <h1>Hi Komal Sachdeva</h1>;
}
```

### 🔍 Explanation:
- This is a **functional component**.
- It’s a function that returns **JSX**.
- JSX = JavaScript + HTML (like syntax).
- React renders this JSX to real HTML.

### Rendering it:
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

## ✅ Comments in React
| Location         | Syntax                       |
|------------------|-------------------------------|
| JSX (in return)  | `{/* comment */}`             |
| JavaScript       | `// comment` or `/* comment */` |
| HTML (index.html)| `<!-- comment -->`            |

---

## 🧠 Summary Table
| Concept       | Type     | Description                              |
|---------------|----------|------------------------------------------|
| React         | Library  | Builds reusable UI components            |
| ReactDOM      | Library  | Renders components into DOM              |
| Babel         | Tool     | Converts JSX to JS for browser           |
| Component     | Function | Returns JSX (UI code)                    |

---


