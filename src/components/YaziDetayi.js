import axios from "axios";
import React, { useEffect, useState } from "react"

const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    // const [display_name, setDisplay_name] = useState('');
    //const [body, setBody] = useState('');
    const [yorum,setYorum]=useState({display_name:"",body:""})
    const handleCommentSubmit=(yorum)=>{
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,yorum).then(response=>{
            
            setYorumlar([...yorumlar,response.data])
        })
    }
   const handleOnChange=event=>{
        setYorum({...yorum,[event.target.name]:event.target.value});
    }

    useEffect(() => {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
            .then(response => {
                setYaziDetayi(response.data);
            }).catch(hata => { console.log("hata") });
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`).then(response => {
            console.log(`@${response.data}`);
            setYorumlar(response.data);
            }).catch(hata=>{
                console.log(hata);
            });
    }, [])

   
    return (
        <React.Fragment>
            <h2 className="ui header">{yaziDetayi.title}</h2>
            <p>
                {yaziDetayi.created_at}
            </p>
            <p>
                {yaziDetayi.content}
            </p>
            <h2>Yorumlar</h2>
            {yorumlar.map(y => {
                return (
                    <div className="ui relaxed list" key={y.id}>
                        <div className="item">
                           { /*<img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>*/}
                            <div className="content">
                                <a className="header">{y.display_name}</a>
                                <div className="description">{y.body}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <h3>Yorum Yaz</h3>
            <form className="ui form" onSubmit={(e)=>{
                e.preventDefault();
                handleCommentSubmit(yorum)
                }}>
                <div className="ui mini icon input">
                    <input type="text"
                        name="display_name"
                        placeholder="Adınız..."
                        onChange={handleOnChange}
                        value={yorum.display_name} />

                </div>
                <textarea placeholder="Yorumunuz.. us more"
                    name="body"
                    rows="3"
                    onChange={handleOnChange}
                    value={yorum.body}>
                </textarea>

                <button className="ui blue button" type="submit">Gönder</button>
            </form>

        </React.Fragment>
    );
}
export default YaziDetayi;

//video Refaktörinde kaldık. 30. dakika