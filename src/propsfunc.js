import React from 'react';

function ParentComponent() {
    const user = {
        name: "Alice",
        age: 30,
        image: "https://example.com/alice.jpg",
    };

    return (
        <div>
            {/* Passing 'user' as prop to ChildComponent */}
            <ChildComponent user={user} />
        </div>
    );
}

function ChildComponent(props) {
    return (
        <div>
            <img src={props.user.image} alt="Profile" />
            <h1>{props.user.name}</h1>
            <p>Age: {props.user.age}</p>
        </div>
    );
}

export default ParentComponent;
