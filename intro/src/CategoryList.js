import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  //export public anlamına geliyor.Diğer taraflardan erişilebilir.Extends-> CategoryList'de bir componenttir.Çünkü Component sınıfından miras almış.
  //App.js'den verileri almak için bir constructor oluştur.

  /*constructor(props) { //Bunun kullanılması zorunlu değil
    super(props); //super ile props'u Component'e gönderiyoruz.Aşağıda {this.props.title} ile Component'e gönderdiğimiz props'a erişmiş oluyoruz.
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" },
      ],
    };
  }*/

  state = {
    //Constructor olmadan da tanımlanabilir.
    categories: []
    //onClick eventi içine this.setState(currentCategory="abc") ->Değer atama
  };

  componentDidMount(){//Component yerleşti anlamına geliyor.
    this.getCategories();//Componenti yerleştir.Categories'leri doldur.
  }

  getCategories=()=>{//Verileri db.json dosyasından çekmek için
    fetch("http://localhost:3000/categories")//Bu çalışınca bir sonuç(response) dönüyor.Aşağıda;
    .then(Response=>Response.json())//Buradan verilerimize ulaşmış oluyoruz ve Response.json'a döndürüyoruz.
    .then(data=>this.setState({categories:data}));;//Response.json'a dönen data buraya geliyor.
  }
  render() {
    //render bir fonksiyon.render değişen veriye göre güncellenir.CategoryList'i kullanmak için App.js'ye git.
    //this = Component
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {
            this.state.categories.map((category //Bir listenin eleman sayısını tek tek döner. map bir döngüdür.Her bir category için bir tane ListGroupItem döndür.
) => (
              <ListGroupItem
                onClick={() => this.props.changeCategory(category)}//App.js'de tanımlanan changeCategory={this.changeCategory} buraya gelir.
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
              //Burada categoryName'leri yazdırırken her eleman için ayrı ayrı bir Id veriyor.
            )) //setState(obje)->State'deki herhangi bir nesnenin değiştirilmesini sağlar.
          }
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
