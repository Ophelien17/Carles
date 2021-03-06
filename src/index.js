import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom";

import Backbone from './main/Backbone';
import DetailsArticle from "./pages/DetailsArticle";
import AddArticle from "./pages/AddArticle";
import Menu from "./main/Menu";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Menu/>
            <Route exact path="/">
                <Backbone/>
            </Route>
            <Route path="/DetailsArticle">
                <DetailsArticle/>
            </Route>
            <Route path="/AddArticle">
                <AddArticle/>
            </Route>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
