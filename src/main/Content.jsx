import React, {useEffect, useState} from 'react';
import network from '../networkParam';
import axios from "axios";

import '../scss/backbone.scss';
import '../scss/detailsArticle.scss'
import Tuile from "../pages/Tuile";

function Content(props) {
    const isCarton = props.isCartonMenu;
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        if (isCarton) {
            axios.get(network.url + 'articleInCarton')
                .then((res) => {
                    setArticles(res.data);
                }).catch((err) => {
                console.log("ERR : ", err);
            })
        } else {
            axios.get(network.url + 'articles')
                .then((res) => {
                    setArticles(res.data);
                }).catch((err) => {
                console.log("ERR : ", err);
            })
        }


    }, [isCarton]);

    return (
        <>
            <main>
                <div className={'tuiles'}>
                    {articles !== null ?
                        articles.map((article) => (
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