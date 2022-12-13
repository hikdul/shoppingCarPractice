import { Component } from "react";
import Buttom from "./Buttom";

const styles ={
    product:{
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '15px'
    },
    img:{
        width: '100%',
    }
}

class Product extends Component
{
    
    render(){
        const {product, addToCar} = this.props
        return(
        <div style={styles.product}>
            <img style={styles.img} alt={product.name} src={product.img}/>
            <h3>{product.name}</h3>
            <p>{product.price} S/. </p>

            <Buttom onClick={()=>addToCar(product)}>
                add to car
            </Buttom>

        </div>)
    }
}

export default Product