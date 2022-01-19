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
                        <li onClick={scrollMenu('chambre')}>Chambre</li>
                        <li>SDB</li>
                        <li>Cuisine</li>
                        <li>Salle à manger</li>
                        <li onClick={() => window.location.href = '/AddArticle'}>ajouter article</li>
                    </ul>
                </section>

                <section className={'optionsMenu optionsMenuDeploy'}>
                    <ul>
                        <li onClick={scrollMenu('chambre')}>Chambre</li>
                        <li>SDB</li>
                        <li>Cuisine</li>
                        <li>Salle à manger</li>
                        <li onClick={() => window.location.href = '/AddArticle'}>ajouter article</li>
                    </ul>
                </section>

            </nav>
        </div>
    );
}


export default (Menu);