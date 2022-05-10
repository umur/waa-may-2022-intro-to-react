import { useState } from "react";
import Product from "./Product";

function Dashboard() {

    const [productState, setProductState] = useState([
        { id: 1, name: 'iphone', price: 100 },
        { id: 2, name: 'mac', price: 200 }
    ]);
    return (
        <div>
        <div>
            My Dashboard
        </div>
        {
        productState.map(item =>{
            return(
                <Product
                key={item.id}
                name={item.name}
                price={item.price}  >
                </Product>
            )
        } )
    }
    </div>
    )
    
}

export default Dashboard;