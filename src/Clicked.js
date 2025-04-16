function Clicked() {
    let name="komal Sachdeva";
    function handleClick() {
        name="brouno";
        alert(name);
    }
    return (
        <div className="clicked">
            <h1>{name}</h1>     
            <button onClick={handleClick} >Click me  </button>
            </div>           
    );
}
export default Clicked;