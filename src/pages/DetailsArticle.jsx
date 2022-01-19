import React from 'react';

import '../scss/detailsArticle.scss'


function Tuile(props) {

    return (
        <section className={'detailsArticle'}>

            <div className={'containerImg'}>
                <img src={''} alt={'imgArticle'} className={''}/>
            </div>

            <div className="under">
                <div className="categories">
                    <div className="section">
                        <img src="" alt="logoSection"/>
                        <h5>nom section</h5>
                    </div>
                    <div className="section">
                        <img src="" alt="logoSection"/>
                        <h5>nom section</h5>
                    </div>
                </div>

                <div className="details">
                    <h3 className={'titleArticle'}>Nom article</h3>
                    <p className={'desc'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus hic illum
                        iste
                        soluta, tempora totam voluptas. A blanditiis, deserunt, eaque maiores nobis nostrum officia,
                        officiis optio praesentium quis similique tempora?</p>
                    <div className="container1">
                        <a className={'articleLink'} href={'example.com'}>Lien vers l'article</a>
                        <p className={'price'}>100 €</p>
                    </div>
                    <div className="container2">
                        <div className={'quantity'}>
                            - <div>20</div> +
                        </div>
                        <img src={'/icons/trash.svg'} alt={'bin'} className={'trash'}/>
                    </div>
                </div>
            </div>

        </section>
    );
}


export default (Tuile);