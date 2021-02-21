import React, { Component } from 'react'

export default class ProductList extends Component{//export public anlamına geliyor.Diğer taraflardan erişilebilir.Extends-> ProductList'de bir componenttir.Çünkü Component sınıfından miras almış.
    render(){//render bir fonksiyon.render değişen veriye göre güncellenir.ProductList'i kullanmak için App.js'ye git.
    //CategoryList'te yaptığımız mantığın aynısı {this.props.title} burdada geçerli
        return(
            <div>
                <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
            </div>
        )
    }
}