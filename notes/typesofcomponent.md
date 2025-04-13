Piece of code that can be resuse is called component 
such as function 
it has its own life cycle 
Header and Footer are the best eg of components 
and sidebar too

**React Component Types — Overview**
🧩 Component Types in React
1. Functional Components
Description: Modern components that are built using JavaScript functions.

Key Features:

Uses Hooks like useState, useEffect for state and lifecycle management.

More concise and easier to read.

Recommended for most use-cases today.

2. Class Components
Description: Older React components that use classes and extend React.Component.

Key Features:

Uses state, setState(), and lifecycle methods like componentDidMount().

Less commonly used in newer codebases, but still maintained for backward compatibility.

3. Presentational Components
Description: Focus solely on rendering UI based on the data they receive through props.

Key Features:

No internal state or logic.

Can be written as either functional or class components.

Keep UI rendering separate from the business logic.

4. Container Components
Description: Components that handle state, logic, and data fetching.

Key Features:

Often wraps presentational components.

Manages application logic and communicates with backend services.

Can pass down state and data to presentational components via props.

5. Pure Components
Description: Class-based components that optimize rendering performance.

Key Features:

Only re-renders if props or state change.

Uses shouldComponentUpdate() for optimizing rendering.

Helps in reducing unnecessary re-renders.

6. Memoized Components
Description: A functional component wrapped in React.memo() to avoid unnecessary re-renders.

Key Features:

Only re-renders when props change.

Provides performance optimizations for functional components.

Commonly used when passing the same props multiple times.

7. Higher-Order Components (HOC)
Description: A function that takes a component and returns a new enhanced component.

Key Features:

Used to reuse logic across multiple components.

Can be used for authentication, data fetching, and other shared behaviors.

They don't modify the original component but enhance its capabilities.

8. Controlled Components
Description: Form elements that are controlled by React state.

Key Features:

Form input elements’ values are set via React state using onChange.

Always reflect the latest state in the component.

Ideal for handling complex form validation and logic.

9. Uncontrolled Components
Description: Form elements that are controlled by the DOM rather than React state.

Key Features:

Uses refs instead of state to manage form values.

Less powerful than controlled components but simpler and faster for some use-cases.

Often used when performance is a key concern.

10. Lazy-loaded Components
Description: Dynamically imported components that are only loaded when needed.

Key Features:

Reduces the initial bundle size.

Uses React.lazy() and Suspense for code splitting.

Improves performance by loading parts of the app on demand.

