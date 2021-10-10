import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link } from "react-router-dom"


const YaziListesi=(props)=>{
    const [yaziListesi,setYaziListesi]=useState([]);
    // uygulamanın açılışında çalışan hook
      useEffect(()=>{
        axios.get("https://react-yazi-yorum.herokuapp.com/posts")
        .then(response=>{setYaziListesi(response.data)});//gelen veriyi state atıyoruz.
      },[]);
      console.log({yaziListesi});
    return (
       
        yaziListesi.map(yazi=>{
            return (
              <div className="item" key={yazi.id}>
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <Link to={`/posts/${yazi.id}`} className="header">{yazi.title}</Link>
                <div className="description">{yazi.created_at}</div>
              </div>
            </div>);
          })
          
         
    );
}
export default YaziListesi;