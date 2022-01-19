import React from 'react';

import '../scss/backbone.scss';
import '../scss/detailsArticle.scss'
import Tuile from "../pages/Tuile";

function Backbone(props) {


    return (
        <>
            <main>

                <div className={'tuiles'}>
                    <div className={"column-item"} onClick={() => window.location.href = '/DetailsArticle'}><Tuile
                        className={'tuile'}/></div>
                    <div className={"column-item"} onClick={() => window.location.href = '/DetailsArticle'}><Tuile
                        className={'tuile'}/></div>

                    <Tuile className={'column-item tuile'}/>
                    <Tuile className={'column-item tuile'}/>
                </div>


            </main>

        </>
    );
}


export default (Backbone);