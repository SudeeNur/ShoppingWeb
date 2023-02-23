import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';
class Kategori extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {categoriId: 1, categoriName:"Computer"},
                {categoriId:2, categoriName:"Table"},
                {categoriId:3, categoriName:"Harddisk"},
                {categoriId:4, categoriName:"CD"},
            ],
            //secilicategories:""
        };
    
    //kategoriDegistir=(kategori)=>{
    //    this.setState({ secilicategories:kategori.categoriName})
    }

    kategoriGetir(){
      fetch("http://localhost:4000/categories")
      .then(rsponse=> rsponse.json())
      .then(data=>this.setState({categories:data}))
    }
    componentDidMount(){
      this.kategoriGetir();
    }
  render() {
    return (
      <div>
        <h3>Kategori / {this.props.baslik} </h3>
        <ListGroup>
            {this.state.categories.map(kategori=>(
                <ListGroupItem 
                active={kategori.categoryName ===this.props.secilicategories?true:false}
                onClick={()=>this.props.kategoriDegistir(kategori)}

                key={kategori.id}> {kategori.categoryName}
                </ListGroupItem>

            ))}
          
        </ListGroup>
        <h5>{this.props.secilicategories}</h5>
      </div>
    );
  }
}

export default Kategori;