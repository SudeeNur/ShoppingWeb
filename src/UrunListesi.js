import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Alert,
  CardTitle,
  Button,
  Card,
  CardText,
} from "reactstrap";
import { Table } from "reactstrap";
class UrunListesi extends Component {
//  sepeteEkle(urun){
//    alert(urun.productName)
//  }
  render() {
    return (
      //  div arasındakileri return eder
      <div>
        <h3>Ürün listesi -- {this.props.title}</h3>
        <h4>{this.props.secilicategories}</h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün İsmi</th>
              <th>Birim Fiyat</th>
              <th>quantityPerUnit     </th>
              <th>UnitsinStock</th>
              
            </tr>
          </thead>
          <tbody>
            {this.props.urunler.map((urun) => (
              <tr key={urun.id}>
                <th scope="row">{urun.id}</th>
                <td>{urun.productName}</td>
                <td>{urun.unitPrice}</td>
                <td>{urun.quantityPerUnit}</td>
                <td>{urun.producunitsInStocktName}</td>
                <td>{urun.unitsInStock}</td>
                <td>
                  <div>
                    <Button 
                    onClick={()=>this.props.sepeteEkle(urun)} //fonksiyon olarak çağrılırsa çalışsın diye bu kısmı ekledik :  ()=>...
                   // Sepete ekle fonksiyonunu App e götürdüğümüz için props kullanmalıyız.
                   color="primary">Ekle</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UrunListesi;
