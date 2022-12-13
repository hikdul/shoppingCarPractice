
import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CarDetails from "./CarDetails";

const styles = {
    Car:{
        backgroundColor:'#67a7b0',
        color: '#f3f3f3',
        padding: '15px', 
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble:{
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Car extends Component
{

    render(){
        const {carro,isSCVissible,showShoppingCar} = this.props
        const cant = carro.reduce((acc,el)=> acc + el.cant,0)
        return (
        <div>
            <span style={styles.bubble}>
                {cant !== 0 ?
                    <BubbleAlert value={cant}/>
                :null}
            </span>
            <button style={styles.Car} onClick={showShoppingCar}>
                Shoppin Car
            </button>
            {isSCVissible ? <CarDetails carro={carro}/>: null}
        </div>
        )
    }
    
}

export default Car 