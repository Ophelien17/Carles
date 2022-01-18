import React from 'react';
import '../scss/tuiles.scss';


function Tuile(props) {

    return (

        <section onClick={props.onClick} className={props.className}>
            <div className="containerImg"><img src={''} alt={'articles'} className={'imgArticle'}/></div>
            <h3 className={'titleArticle'}>Nom article</h3>
            <p className={'descArticle'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at doloremque
                eligendi </p>
            <div className={'opts'}>
                <p className={'price'}>100 000 €</p>
                <div className={'qte'}>20</div>
            </div>

        </section>
    );
}


export default (Tuile);