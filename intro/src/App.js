import React, { Component } from "react";
import Navi from "./Navi"; //Navi.js'yi import ettik.Navi component'ini aşağıda kullanmak için <Navi>
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {

  state={currentCategory:""}

  changeCategory = (category) => {//Bu fonksiyonu CategoryList'ten buraya taşımamızın sebebi currentCategory'i ProductList'te de geçmek istiyoruz
    //Bu bir fonksiyon(Error function)
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let productInfo = { title: "Product List" }; //Bir değişkene atılarakta çağırılabilir
    let categoryInfo = { title: "Category List" }; //Bir değişkene atılarakta çağırılabilir
    return (
      //jsx yapısı.Bu divin react kütüphanesinde karşılığı var.Div bir container tag'idir.
      //Row bir satır demektir.İkinci satırda Col elemanında yer alan 3 ve 9 kapladığı alanı belirtiyor.Sayfamız 12 parçadan oluşur.
      //Burda 3 tane component mevcut(Navi,ProductList,CategoryList). App ana component.
      //Props->Bir component'ten diğerine data taşımak için.
      //Sonra CategoryList'e gel.
      //Aşağıdaki CategoryList'teki changeCategory={this.changeCategory} ile changeCategory fonksiyonunu CategoryList.js'ye gönderdik
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
