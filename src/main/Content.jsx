import React, {useEffect} from 'react';
import network from '../networkParam';
import axios from "axios";

import '../scss/backbone.scss';
import '../scss/detailsArticle.scss'
import Tuile from "../pages/Tuile";

function Content(props) {
    const isCarton = props.isCartonMenu;
    const catSelect = props.catSelect;

    useEffect(() => {


        if (isCarton || catSelect) {
            if (isCarton && !catSelect) {
                console.log("je suis ds carton vrai cat select faux");
                axios.get(network.url + 'articleInCarton')
                    .then((res) => {
                        props.setArticles(res.data);
                    }).catch((err) => {
                    console.log("ERR : ", err);
                })
            } else if (isCarton && catSelect) {
                console.log("je suis ds carton vrai cat select vrai");
                axios.get(network.url + 'selectCatInCarton', {params: {catSelect: catSelect}})
                    .then((res) => {
                        props.setArticles(res.data);
                    }).catch((err) => {
                    console.log("ERR : ", err);
                })
            } else if (!isCarton && catSelect) {
                console.log("je suis ds carton faux cat select vrai");
                axios.get(network.url + 'selectCat', {params: {catSelect: catSelect}})
                    .then((res) => {
                        props.setArticles(res.data);
                    }).catch((err) => {
                    console.log("ERR : ", err);
                })
            }
        } else {
            axios.get(network.url + 'articles')
                .then((res) => {
                    props.setArticles(res.data);
                }).catch((err) => {
                console.log("ERR : ", err);
            })
        }


    }, [isCarton, catSelect]);

    return (
        <>
            <main>
                <div className={'tuiles'}>
                    {props.articles !== null ?
                        props.articles.map((article) => (
                            <div key={article._id} className={"column-item"}
                                 onClick={() => window.location.href = '/DetailsArticle?id=' + article._id}><Tuile
                                className={'tuile'} article={article}/></div>
                        ))

                        : <p>nul</p>}

                </div>


            </main>

        </>
    );
}


export default (Content);