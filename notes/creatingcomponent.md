To create a component u need to create a js file let suppose it is user.js 

then in that u need to use jsx that html style js 
which can be look like this 

function User() {
    return (
      <div className="App">
       <h1>This is React</h1>
      </div>
    );
  }
  
  export default User;
  
  and then u have to import wherever u want to import let suppose in app.js which load by default as a home page 
  with the function name and a file name and add tag of that where u want it to visible that

  <User/>
Something like this