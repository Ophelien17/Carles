import React, {useEffect, useState} from 'react';

import '../scss/backbone.scss';
import '../scss/detailsArticle.scss'
import Tuile from "../pages/Tuile";
import axios from "axios";

function Backbone() {
    const [articles, setArticles] = useState(null);
    const [une] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/articles')
            .then((res) => {
                setArticles(res.data);
            }).catch((err) => {
            console.log("ERR : ", err);
        })

    }, []);

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


export default (Backbone);