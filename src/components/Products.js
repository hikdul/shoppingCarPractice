
import { Component } from "react";
import Product from "./Product";

const styles = {
    products:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Products extends Component
{
    
    render(){
        const {products, addToCar} = this.props
        return(
            <div style={styles.products}>
                {products.map(pr => 
                <Product 
                    key={pr.name}
                    addToCar={addToCar}
                    product={pr}
                    />
                )}
            </div>
        )
    }
}

export default Products