function Clicked() {
    let name="komal Sachdeva";
    function handleClick() {
        name="brouno";
        alert(name);
    }
    console.warn('---------------');
<h1>hy</h1>
    return (
        <div className="clicked">
            <h1>{name}</h1>     
            <button onClick={handleClick} >Click me  </button>
            </div>           
    );
}
export default Clicked;