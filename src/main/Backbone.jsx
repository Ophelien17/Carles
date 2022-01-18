import React, {useState} from 'react';
import Menu from './Menu';
import '../scss/backbone.scss';
import Tuile from "../pages/Tuile";
import DetailsArticle from "../pages/DetailsArticle";


function Backbone(props) {
    const [detailsArticle, setDetailsArticle] = useState(0);
    const [displayTuiles, setDisplayTuiles] = useState(true);

    const openDetail = (article) => {
        if (article === detailsArticle)
            setDetailsArticle(0);
        else
            setDetailsArticle(article);
    };

    return (
        <>
            <Menu/>
            <main>


                <div className={'tuiles'} style={{display: displayTuiles === true ? 'flex' : 'none'}}>
                    <Tuile onClick={(article) => {
                        if (detailsArticle === 0) {
                            setDetailsArticle(1);
                            setDisplayTuiles(false)
                        } else
                            setDetailsArticle(0);
                    }} className={'column-item tuile'}/>
                    <Tuile className={'column-item tuile'}/>
                    <Tuile className={'column-item tuile'}/>
                </div>

                <div style={{display: detailsArticle !== 0 ? 'block' : 'none'}}>
                    <DetailsArticle/>
                </div>

            </main>

        </>
    );
}


export default (Backbone);