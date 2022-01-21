import React from 'react';
import '../scss/tuiles.scss';


function Tuile(props) {
    const article = props.article;
    return (

        <section className={props.className}>
            <div className="containerImgT"><img src={''} alt={'articles'} className={'imgArticle'}/></div>
            <h3 className={'titleArticle'}>{article.articleName}</h3>
            <p className={'descArticle'}>{article.description} </p>
            <div className={'opts'}>
                <p className={'price'}>{article.price} €</p>
                <div className={'qte'}>{article.quantity}</div>
            </div>

        </section>
    );
}


export default (Tuile);