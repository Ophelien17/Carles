import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import axios from "axios";
import network from '../networkParam';
import '../scss/detailsArticle.scss'


function Tuile(props) {
    const [article, setArticle] = useState(null);

    const search = useLocation().search;
    const idArticle = new URLSearchParams(search).get('id');

    useEffect(() => {
        axios.get(network.url + 'article', {params: {id: idArticle}})
            .then((res) => {
                setArticle(res.data);
            }).catch((err) => {
            console.log("ERR : ", err);
        })
    }, []);

    const deleteArticle = () => {
        axios.delete(network.url + 'deleteArticle', {data: {id: idArticle}});
        window.location.href = "/";
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
                                            <div className="section" key={section}>
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

                                    <button onClick={deleteArticle} className={'btnTrash'}><img src={'/icons/trash.svg'}
                                                                                                alt={'bin'}
                                                                                                className={'trash'}/>
                                    </button>
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