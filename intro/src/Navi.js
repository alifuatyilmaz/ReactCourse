import React, { Component } from 'react'

export default class Navi extends Component{//export public anlamına geliyor.Diğer taraflardan erişilebilir.Extends-> Navi bir componenttir.Çünkü Component sınıfından miras almış.
    render(){//render bir fonksiyon.render değişen veriye göre güncellenir.Navi' yi kullanmak için App.js'ye git.
        return(
            <div>
                <h2>Navi Component</h2>
            </div>
        )
    }
}
