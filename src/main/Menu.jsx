import React, {useState} from 'react';
import '../scss/menu.scss';


function Menu(props) {
    const [displayOpt, setDisplayOpt] = useState('none');

    const openMenu = () => {
        if (displayOpt === 'none')
            setDisplayOpt('block');
        else
            setDisplayOpt('none');
    };

    const scrollMenu = (menu) => {

    };

    const handleChange = (evt) => {
        props.setIsCartonMenu(evt.target.checked);
    };

    return (
        <div className={'menu'}>
            <header onClick={() => window.location.href = '/'}>
                <h1 className={'titleApp'}>Carles</h1>
                <img src={'/icons/logo.png'} alt={'logo'} className={'logo'}/>
            </header>


            <nav>
                <div className={'search'}>
                    <input type={'text'} placeholder={'Rechercher'} className={'inputSearch'}/>
                    <button onClick={openMenu} className={'settingsBtn'}><img src="/icons/settings.svg" alt="réglage"/>
                    </button>
                </div>

                <section className={'optionsMenu'} style={{display: displayOpt}}>
                    <ul>
                        <li onClick={scrollMenu('chambre')}>Canapées & Fauteuils</li>
                        <li>Meubles</li>
                        <li>Déco</li>
                        <li>Litterie</li>
                        <li>Luminaires</li>
                        <li>Linge de maison & Tapis</li>
                        <li>Jardin</li>
                        <li>Art de la table</li>
                        <li>Salle à manger</li>
                        <li>
                            <input type={'checkbox'} id={'carton'} name={'carton'} onChange={handleChange}/>
                            <label htmlFor="carton">Carton</label>
                        </li>
                        <li onClick={() => window.location.href = '/AddArticle'}>ajouter article</li>
                    </ul>
                </section>

                <section className={'optionsMenu optionsMenuDeploy'}>
                    <ul>
                        <li onClick={scrollMenu('chambre')}>Canapées & Fauteuils</li>
                        <li>Meubles</li>
                        <li>Déco</li>
                        <li>Litterie</li>
                        <li>Luminaires</li>
                        <li>Linge de maison & Tapis</li>
                        <li>Jardin</li>
                        <li>Art de la table</li>
                        <li>Salle à manger</li>
                        <li>
                            <input type={'checkbox'} id={'carton'} name={'carton'} onChange={handleChange}/>
                            <label htmlFor="carton">Carton</label>
                        </li>
                        <li onClick={() => window.location.href = '/AddArticle'}>ajouter article</li>
                    </ul>
                </section>

            </nav>
        </div>
    );
}


export default (Menu);