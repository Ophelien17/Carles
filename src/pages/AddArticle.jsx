import React, {useEffect, useState} from 'react';
import network from '../networkParam';
import axios from "axios";
import '../scss/addArticle.scss';

function AddArticle(props) {
    const [section, setSection] = useState(null);
    const [isAdd, setIsAdd] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const varForm = evt.target.elements;


        axios.post(network.url + 'addArticle', {
            articleName: varForm.articleName.value,
            description: varForm.description.value,
            price: varForm.price.value,
            quantity: varForm.quantity.value,
            link: varForm.link.value,
            cat: evt.target.elements.cat.value,
            section: varForm.sections.value.split(', '),
            carton: varForm.carton.checked
        });
        setIsAdd(true);
        setTimeout(() => {
            window.location.reload()
        }, 1500);

    };

    useEffect(() => {
        console.log(section)
    }, [section]);

    return (
        <>
            <form onSubmit={handleSubmit} className={'formAdd'}>
                <input type={'text'} placeholder={'Nom de l\'article'} id={'articleName'} className={'inputAdd'}
                       required/>
                <textarea rows="2" cols="33" name={'description'} placeholder={'Description'} id={'description'}
                          className={'inputAdd'}/>
                <input type={'number'} placeholder={'0.00 €'} id={'price'} className={'inputAdd'}/>
                <input type={'number'} placeholder={'3'} id={'quantity'} className={'inputAdd'}/>
                <input type={'text'} placeholder={'www.example.com'} id={'link'} className={'inputAdd'} required/>
                <input type={'file'} className={'inputAdd'}/>

                <section className={'cat'}>
                    <h4 className={'catTitle'}>Catégories</h4>
                    <input type="radio" id="sofas_armchairs" name="cat" value="sofas_armchairs" checked/>
                    <label htmlFor="sofas_armchairs">Canapées & Fauteuils</label><br/>
                    <input type="radio" id="furniture" name="cat" value="furniture"/>
                    <label htmlFor="furniture">Meubles</label><br/>
                    <input type="radio" id="decoration" name="cat" value="decoration"/>
                    <label htmlFor="decoration">Déco</label><br/>
                    <input type="radio" id="bedding" name="cat" value="bedding"/>
                    <label htmlFor="bedding">Literie</label><br/>
                    <input type="radio" id="lighting" name="cat" value="lighting"/>
                    <label htmlFor="lighting">Luminaires</label>
                    <input type="radio" id="linens_Rugs" name="cat" value="linens_Rugs"/>
                    <label htmlFor="linens_Rugs">Linge de maison & Tapis</label>
                    <input type="radio" id="garden" name="cat" value="garden"/>
                    <label htmlFor="garden">Jardin</label>
                    <input type="radio" id="table_art" name="cat" value="table_art"/>
                    <label htmlFor="table_art">Art de la table</label>
                    <input type="radio" id="dining_room" name="cat" value="dining_room"/>
                    <label htmlFor="dining_room">Salle à manger</label>
                </section>

                <input type={'text'} placeholder={'section1, section2, ...'} id={'sections'} className={'inputAdd'}/>
                <section className="carton">
                    <input type={'checkbox'} id={'carton'} name={'carton'} className={'inputCarton'}/>
                    <label htmlFor="carton" className={'labelCarton'}>Carton</label>
                </section>


                <button type={'submit'} className={'btnNewArticle'}>Nouvel article</button>
                <p style={{display: isAdd ? 'block' : 'none'}}>Artcile ajouté ️✅</p>

            </form>
        </>
    );
}


export default (AddArticle);