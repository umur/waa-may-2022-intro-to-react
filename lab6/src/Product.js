
function CreateProduct(props) {


    return (
        <div className="App">
            <div>
                <h1>
                    Name : {props.name}
                    Price:  {props.price}
                </h1>
            </div>



        </div>
    );
}

export default CreateProduct;