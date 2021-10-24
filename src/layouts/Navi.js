import React, {} from "react";
import { Image } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
         
      <Image src="https://dosyamerkez.saglik.gov.tr/2020webfiles/logolar/logo.svg" className="App-saglik"/>
      
      <h2>
        <a href="https://saglik.gov.tr" className="App-yazi1"  >T.C. Sağlık Bakanlığı</a>
      </h2>
      <h3 className="App-yazi2" >
        COVID-19 Bilgilendirme Platformu
      </h3>
      <h4 className="App-yazi3" >
        "Elimizde Güçlü Bir Koz Var YAKALANMAMAK"
      </h4>
    
      
      </div>
  );
}