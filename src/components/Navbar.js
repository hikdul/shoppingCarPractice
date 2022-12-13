
import { Component } from "react";
import Car from "./Car";
import Logo from "./Logo";

const styles = {
    Navbar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    },
}

class Navbar extends Component
{
    
    render(){

        const {carro,isSCVissible,showShoppingCar} = this.props

        return (
           <nav style={styles.Navbar}>
            <Logo/>
            <Car carro={carro} isSCVissible={isSCVissible} showShoppingCar={showShoppingCar}/>
            </nav>
        )
    }
    
}

export default Navbar 