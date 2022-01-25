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
                        <li onClick={() => {
                            if (props.catSelect === 'sofas_armchairs') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('sofas_armchairs')
                            }
                        }}>Canapées & Fauteuils
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'furniture') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('furniture')
                            }
                        }}>Meubles
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'decoration') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('decoration')
                            }
                        }}>Déco
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'bedding') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('bedding')
                            }
                        }}>Litterie
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'lighting') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('lighting')
                            }
                        }}>Luminaires
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'linens_Rugs') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('linens_Rugs')
                            }
                        }}>Linge de maison & Tapis
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'garden') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('garden')
                            }
                        }}>Jardin
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'table_art') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('table_art')
                            }
                        }}>Art de la table
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'dining_room') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('dining_room')
                            }
                        }}>Salle à manger
                        </li>
                        <li>
                            <input type={'checkbox'} id={'carton'} name={'carton'} onChange={handleChange}/>
                            <label htmlFor="carton">Carton</label>
                        </li>
                        <li onClick={() => window.location.href = '/AddArticle'}>Ajouter article</li>
                    </ul>
                </section>

                <section className={'optionsMenu optionsMenuDeploy'}>
                    <ul>
                        <li onClick={() => {
                            if (props.catSelect === 'sofas_armchairs') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('sofas_armchairs')
                            }
                        }}>Canapées & Fauteuils
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'furniture') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('furniture')
                            }
                        }}>Meubles
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'decoration') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('decoration')
                            }
                        }}>Déco
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'bedding') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('bedding')
                            }
                        }}>Litterie
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'lighting') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('lighting')
                            }
                        }}>Luminaires
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'linens_Rugs') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('linens_Rugs')
                            }
                        }}>Linge de maison & Tapis
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'garden') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('garden')
                            }
                        }}>Jardin
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'table_art') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('table_art')
                            }
                        }}>Art de la table
                        </li>
                        <li onClick={() => {
                            if (props.catSelect === 'dining_room') {
                                props.setCatSelect(null)
                            } else {
                                props.setCatSelect('dining_room')
                            }
                        }}>Salle à manger
                        </li>
                        <li>
                            <input type={'checkbox'} id={'carton'} name={'carton'} onChange={handleChange}/>
                            <label htmlFor="carton">Carton</label>
                        </li>
                        <li onClick={() => window.location.href = '/AddArticle'}>Ajouter article</li>
                    </ul>
                </section>

            </nav>
        </div>
    );
}


export default (Menu);