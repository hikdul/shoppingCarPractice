import { Component } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Title from './components/Title';

class App extends Component
{
  
  state = {
    products:[
      {name: 'Pendragon keycaps', price: 5.5, img: '/product/p1.png'},
      {name: 'Color keycaps', price: 3.5, img: '/product/p2.jpg'},
      {name: 'Mountaint keycaps', price: 4, img: '/product/p3.jpg'},
    ],
    carro:[
      //! estructura que se deberia de usar en este caso
      //{name: 'Mountaint keycaps', price: 4, img: '/product/p3.jpg', cant:1},
    ],
    isSCVissible: false
  }
  
  addToCar = (product) =>{
    const {carro} = this.state
    if(carro.find(x => x.name === product.name)){
      const newCar = carro.map( sc => sc.name === product.name ?({
        ...sc,
        cant: sc.cant + 1
      }): sc)
      return this.setState({
        carro: newCar
      })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...product,
        cant: 1,
      })
    })
  }
  
  showShoppingCar = () =>{
    if(!this.state.carro.lenght)
      return
    this.setState({isSCVissible: !this.state.isSCVissible})
  }
  
  render()
  {
    
    const {isSCVissible} = this.state
    return(
     <div>
      <Navbar 
        carro={this.state.carro}
        isSCVissible={isSCVissible}
        showShoppingCar={this.showShoppingCar}
      />
       <Layout>
          <Title text={'Store'} />
          <Products
           addToCar={this.addToCar}
           products={this.state.products}
          />
       </Layout>
     </div>
    )
  }
}


export default App;
