const Child = (props) => {

    function change(e){
     props.updateValue(e.target.value)
        

    }
    return (
        <div className="child">
            <form>
                <h1>Child Component</h1>
                <input type="text" onChange={change}></input>
            </form>
        </div>
    )
}

export default Child