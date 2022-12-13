
import { Component } from "react";

const styles ={

    carDetails:{
        backgroundColor: '#f3f3f3',
        position: 'absolute',
        marginTop:30,
        boxShadow: '1px 5px 5px rgb(0,0,0,.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    ul:{
        margin: 0,
        padding: 0,
    },
    li:{
        listStyleType:'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class CarDetails extends Component
{
    render()
    {
        const {carro} = this.props
        console.log(carro)
            return(
            <div style={styles.carDetails}>
                <ul style={styles.ul}>
                    {carro.map(cr =>
                    <li 
                    style={styles.li}
                    key={cr.name}>
                         <img alt={cr.name} src={cr.img} width={50} height={32} />
                         {cr.name}
                         <span> {cr.cant}</span>
                    </li>
                    )}
                </ul>
            </div>)
        
    }
}

export default CarDetails 