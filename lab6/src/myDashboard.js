import axios from "axios";
import { useState, useEffect } from "react";
import CreateProduct from "./Product";
import NewProduct from "./NewProduct";


function MyDashboard() {
/**display Product */
    const [productStae, setProductState] = useState([
        { id: 1, name: "iphone", price: 100 },
        { id: 2, name: "Computer", price: 200 }
    ]);

    const url = 'http://localhost:8080/api/v1/products';

    const fetchProducts = async () => {
        const result = await axios.get(url)
        setProductState(result.data)
    }


    useEffect(() => {
        fetchProducts();
    }, [])

    /**new Produc */
    const [newProductState, setNewProductState] = useState({ name: '', price: 0.0 });
    const onFieldsChanged = (event)=>{
        let copy = {... newProductState};
        console.log('event.target.value'+event.target.value);
        console.log('event.target.name'+event.target.name);
        copy[event.target.name] = event.target.value;
        setNewProductState(copy);
}

const saveButtonClicked = async () => {
    await axios.post(url,newProductState)
    fetchProducts();
}


    return (
        <div>

            {
                productStae.map(
                    item => {
                        return (
                            <CreateProduct
                                key={item.id}
                                name={item.name}
                                price={item.price}
                            ></CreateProduct>
                        )
                    }
                )


            }
            {/* <div>
            <NewProduct
                n = {newProductState.name}
                p = {newProductState.price} 
                onFieldsChanged = {onFieldsChanged}
                onSave = {saveButtonClicked}
            >

            </NewProduct>
            </div> */}
        </div>

    );
}

export default MyDashboard;