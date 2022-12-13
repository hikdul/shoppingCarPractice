
import { Component } from "react";

const styles ={
    button:{
        backgroundColor:'#67a7b0',
        color: '#f3f3f3',
        border: 'none',
        borderRadius: '5px',
        padding: '15px 20px',
        cursor: 'pointer'
    }
}
class Buttom extends Component
{
    
    render(){
        return(<button style={styles.button} {...this.props} />)
    }
}

export default Buttom