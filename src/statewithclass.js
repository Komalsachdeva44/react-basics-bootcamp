import React from "react";  

class StateWithClass extends React.Component {  
    constructor() {
        super();  
        // Storing Dynamic data in state
        this.state = {  
            data: "komal",  // Initially a string
            value: 0         // This should be a number to count properly
        };  

        // // Explicitly bind the apple method to the component
        this.apple = this.apple.bind(this);
        this.count = this.count.bind(this); // Bind count method as well
    }

    apple() { 
        alert("Apple");

        console.log("Apple function called!");
        this.setState({ data: "komal sachdeva" });
    }

    count() {  
        // Ensure value is incremented numerically
        this.setState({value:this.state.value+1})

    }

    render() {  
        return (  
            <div>  
                <h1>Welcome to React</h1>  
                <p>This {this.state.data} is a simple component using class.</p>  
                <button onClick={this.apple}>Click</button>
                <button onClick={this.count}>Update Value</button>
                <button onClick={()=>this.apple()}>hi</button>
                <h2>Value: {this.state.value}</h2> {/* Display the updated value */}
            </div>  
        );  
    }  
}

// ✅ Component without constructor
class WithoutConstructor extends React.Component {
    state = {
      name: "Komal without constructor",
      count: 0,
    };
  
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <h2>{this.state.name}</h2>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increase (without constructor)</button>
        </div>
      );
    }
  }
  
  // ✅ Named exports for both components
  export { StateWithClass, WithoutConstructor };