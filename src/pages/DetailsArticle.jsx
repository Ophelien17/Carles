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

    const handleChange = (evt) => {
        axios.put(network.url + 'addCarton', {data: {id: idArticle, carton: evt.target.checked}});
        window.location.reload();
    };

    const modifyQte = (signe) => {
        axios.put(network.url + 'modifyQte', {data: {id: idArticle, qte: signe}});
        window.location.reload();
    };

    return (
        <section className={'detailsArticle'}>
            {article !== null ?
                article.map((detail) => (
                    <div>
                        <div className={'containerImg'}>
                            <img src={'/images/' + detail.imgLink} alt={'imgArticle'} className={''}/>
                        </div>

                        <div className="under">
                            <div className="categories">
                                {console.log(detail.section)}
                                {
                                    detail.section !== null ?
                                        detail.section.map((section) => (
                                            <div
                                                className={detail.carton === true ? "section carton" : "section noCarton"}
                                                key={section}>
                                                <img
                                                    src={"/icons/section/" + section.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + ".png"}
                                                    alt="logoSection"/>
                                                <h5>{section}</h5>
                                            </div>
                                        )) : <p></p>
                                }
                            </div>

                            <div className={detail.carton === true ? "details carton" : "details noCarton"}>
                                <h3 className={'titleArticle'}><a href={'https://' + detail.link} target={'_blank'}
                                                                  rel={'noreferrer'}
                                                                  className={'linkTitle'}> {detail.articleName}</a></h3>
                                <p className={'desc'}>{detail.description}</p>
                                <div className="container1">
                                    <a className={'articleLink'} href={detail.link}>Lien vers l'article</a>
                                    <p className={'price'}>{detail.price} €</p>
                                </div>
                                <div className="container2">
                                    <div className={'quantity'}>
                                        <div className={'btn'} onClick={() => {
                                            modifyQte('-')
                                        }}>-
                                        </div>
                                        <div className={'num'}>{detail.quantity}</div>
                                        <div className={'btn'} onClick={() => {
                                            modifyQte('+')
                                        }}>+
                                        </div>
                                    </div>

                                    <div className="isCarton">
                                        <input type={'checkbox'} id={'carton'} name={'carton'} onChange={handleChange}
                                               checked={detail.carton}/>
                                        <label htmlFor="carton">Ajouter au carton</label>
                                    </div>


                                    <button onClick={deleteArticle}
                                            className={detail.carton === true ? 'btnTrash carton' : 'btnTrash noCarton'}>
                                        <img src={'/icons/trash.svg'}
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