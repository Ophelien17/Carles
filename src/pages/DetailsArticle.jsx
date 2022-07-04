import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import network from '../networkParam';
import '../scss/detailsArticle.scss'


function Tuile() {
    const [article, setArticle] = useState();

    const {id} = useParams()

    useEffect(() => {
        axios.get(network.url + 'article/' + id)
            .then(function (response) {
                setArticle(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [article !== null]);

    const deleteArticle = () => {
        axios.delete(network.url + 'article/delete/' + id);
        window.location.href = "/";
    };

    const handleChange = (evt) => {
        axios.put(network.url + 'article/addToBox/' + id, {carton: evt.target.checked});
        window.location.reload();
    };

    const modifyQte = (signe) => {
        axios.put(network.url + 'article/modifyQte/' + id, {qte: signe});
        window.location.reload();
    };

    return (
        <section className={'detailsArticle'}>
            {article !== undefined ?
                <div>
                    <div className={'containerImg'}>
                        <img src={network.url + 'images/' + article.imgLink} alt={'imgArticle'} className={''}/>
                    </div>

                    <div className="under">
                        <div className="categories">
                            {
                                article.section !== null ?
                                    article.section.map((section) => (
                                        <div
                                            className={article.carton === true ? "section carton" : "section noCarton"}
                                            key={section}>
                                            <img
                                                src={"/icons/section/" + section.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + ".png"}
                                                alt="logoSection"/>
                                            <h5>{section}</h5>
                                        </div>
                                    )) : <p></p>
                            }
                        </div>

                        <div className={article.carton === true ? "details carton" : "details noCarton"}>
                            <h3 className={'titleArticle'}><a href={'https://' + article.link} target={'_blank'}
                                                              rel={'noreferrer'}
                                                              className={'linkTitle'}> {article.articleName}</a></h3>
                            <p className={'desc'}>{article.description}</p>
                            <div className="container1">
                                <a className={'articleLink'} href={article.link}>Lien vers l'article</a>
                                <p className={'price'}>{article.price} €</p>
                            </div>
                            <div className="container2">
                                <div className={'quantity'}>
                                    <div className={'btn'} onClick={() => {
                                        modifyQte('-')
                                    }}>-
                                    </div>
                                    <div className={'num'}>{article.quantity}</div>
                                    <div className={'btn'} onClick={() => {
                                        modifyQte('+')
                                    }}>+
                                    </div>
                                </div>

                                <div className="isCarton">
                                    <input type={'checkbox'} id={'carton'} name={'carton'} onChange={handleChange}
                                           checked={article.carton}/>
                                    <label htmlFor="carton">Ajouter au carton</label>
                                </div>


                                <button onClick={deleteArticle}
                                        className={article.carton === true ? 'btnTrash carton' : 'btnTrash noCarton'}>
                                    <img src={'/icons/trash.svg'}
                                         alt={'bin'}
                                         className={'trash'}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                : <p>nul</p>}


        </section>
    );
}


export default (Tuile);
