import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";

import '../scss/main.scss';
import Menu from "./Menu";
import Content from "./Content";
import DetailsArticle from "../pages/DetailsArticle";
import AddArticle from "../pages/AddArticle";

function Backbone() {
    const [isCartonMenu, setIsCartonMenu] = useState(null);
    const [catSelect, setCatSelect] = useState(null);
    const [articles, setArticles] = useState(null);


    return (
        <BrowserRouter>
            <div className={'all'}>
                <nav className="menu">
                    <Menu isCartonMenu={isCartonMenu} setIsCartonMenu={setIsCartonMenu} catSelect={catSelect}
                          setCatSelect={setCatSelect} articles={articles} setArticles={setArticles}/>
                </nav>
                <main className="main">
                    <Route exact path="/">
                        <Content isCartonMenu={isCartonMenu} catSelect={catSelect} articles={articles}
                                 setArticles={setArticles}/>
                    </Route>
                    <Route path="/DetailsArticle">
                        <DetailsArticle/>
                    </Route>
                    <Route path="/AddArticle">
                        <AddArticle/>
                    </Route>
                </main>
            </div>


        </BrowserRouter>
    );
}


export default (Backbone);