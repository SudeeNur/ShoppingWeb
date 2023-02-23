

//Prop->Parameter:Component‘e geçilen parametre diyebiliriz. !Bir üst componentten data çekmek
//State->Component Memory: Component oluşturulduğunda içinde veri tutacak olan js nesnesi/objesi.


import React, { Component } from 'react'
import Navigate from './Navigate'
import Kategori from './Kategori';
import UrunListesi from './UrunListesi';
import {Container,Row,Col } from 'reactstrap';
import alertify from 'alertifyjs';
class App extends Component {
  state={ secilicategories:"", urunler:[], sepet:[] };
  kategoriDegistir=(kategori)=>{
    this.setState({ secilicategories:kategori.categoryName})
  };

  urunGetir(){
    fetch("http://localhost:4000/products")
    .then(rsponse=> rsponse.json())
    .then(data=>this.setState({urunler:data}))
  }
  sepeteEkle=(urun)=>{
    //alert(urun.productName)
    let yeniUrun = this.state.sepet;
    var urunEklendi= yeniUrun.find((s)=>s.urun.id===urun.id);
    if(urunEklendi){
      urunEklendi.adet+=1

    }else{
      yeniUrun.push({urun:urun, adet:1})
    }
    this.setState({sepet:yeniUrun})
    alertify.success(urun.productName + " Sepete Eklendi :)",3)

  }
  //error function yazıyoruz.
  sepettenCikar=(urun)=>{
    let kalanUrunler=this.state.sepet.filter(u=>u.urun.id!==urun.id)
    this.setState({sepet:kalanUrunler})
  }

  componentDidMount(){
    this.urunGetir();
  }

  render() {
    let baslikKategori = "Kategoriler";
    let bilginavigate={baslik:"Navigations", ilaveBilgi:"ExtraNavigation"};

    return(
        <div>
          <Container>
            <Row>
              <Navigate bilgi={bilginavigate} sepet={this.state.sepet} sepettenCikar={this.sepettenCikar}/>
            </Row>
            <Row>
              <Col xs="4">
              <Kategori secilicategories={this.state.secilicategories} kategoriDegistir={this.kategoriDegistir} baslik={baslikKategori}/>  
              </Col>
              <Col xs="8">
              <UrunListesi 
              sepeteEkle={this.sepeteEkle} //fonskiyon olduğu için state kullanma
              urunler={this.state.urunler}
              secilicategories={this.state.secilicategories}
              title="Ürün Listeleri"/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    }
    export default App;

