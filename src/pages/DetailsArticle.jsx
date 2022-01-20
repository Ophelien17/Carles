import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import axios from "axios";
import '../scss/detailsArticle.scss'


function Tuile(props) {
    const [article, setArticle] = useState(null);

    const search = useLocation().search;
    const idArticle = new URLSearchParams(search).get('id');
    console.log(idArticle);

    useEffect(() => {
        axios.get('http://192.168.250.4:8080/article', {params: {id: idArticle}})
            .then((res) => {
                setArticle(res.data);
            }).catch((err) => {
            console.log("ERR : ", err);
        })
    }, []);

    const deleteArticle = () => {
        axios.delete('http://localhost:8080/deleteArticle', {data: {id: idArticle}})
    };

    return (
        <section className={'detailsArticle'}>
            {article !== null ?
                article.map((detail) => (
                    <div>
                        <div className={'containerImg'}>
                            <img src={''} alt={'imgArticle'} className={''}/>
                        </div>

                        <div className="under">
                            <div className="categories">
                                {console.log(detail.section)}
                                {
                                    detail.section !== null ?
                                        detail.section.map((section) => (
                                            <div className="section">
                                                <img
                                                    src={"/icons/section/" + section.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + ".png"}
                                                    alt="logoSection"/>
                                                <h5>{section}</h5>
                                            </div>
                                        )) : <p></p>
                                }
                            </div>

                            <div className="details">
                                <h3 className={'titleArticle'}
                                    onClick={window.open('http://www.example.com', '_blank')}>{detail.articleName}</h3>
                                <p className={'desc'}>{detail.description}</p>
                                <div className="container1">
                                    <a className={'articleLink'} href={detail.link}>Lien vers l'article</a>
                                    <p className={'price'}>{detail.price} €</p>
                                </div>
                                <div className="container2">
                                    <div className={'quantity'}>
                                        - <div>{detail.quantity}</div> +
                                    </div>
                                    <img src={'/icons/trash.svg'} alt={'bin'} className={'trash'}
                                         onClick={deleteArticle()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                : <p>nul</p>}



        </section>
    );
}


export default (Tuile);