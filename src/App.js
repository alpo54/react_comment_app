import React from 'react';
import YaziListesi from './components/YaziListesi';
import {BrowserRouter as Router,Route} from "react-router-dom";
import YaziDetayi from './components/YaziDetayi';
function App() {
  //gelen api bilgilerini kaydedecek bir liste oluşturuyoruz
 
  return (
    //header component
    //post list component
    <Router>
    <div className="main-wrapper">
      <header></header>
      
      <div className="ui raised very padded text container segment">
        <Route path="/" exact component={YaziListesi}/>
        <Route path="/posts/:id/" component={YaziDetayi}/>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
