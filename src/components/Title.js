import { Component } from "react";

const styles = {
    Title:{
        marginBottom: '30px'
    }
}

class Title extends Component
{
    render(){
        return(<h1 style={styles.Title}>{this.props.text}</h1>)
    }
}

export default Title