import React from 'react';
import styled from "styled-components";
import colors from "../dataStyle";

const Form = styled.form`
display: flex;
  flex-wrap: wrap;
  @media (min-width: 900px){
  margin-top: 5%
  width: 80%;
  }
  `;

const Input = styled.input`
background-color: ${colors.back};
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    margin: 10px 15px;
    width: 100%;
    font-family: 'Dongle', sans-serif;
    font-size: 20px;`;
const Textarea = styled.textarea`
background-color: ${colors.back};
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    margin: 10px 15px;
    width: 100%;
    font-family: 'Dongle', sans-serif;
    font-size: 20px;`;

const Cat = styled.div`
background-color: ${colors.back};
    padding: 5px 10px;
    margin: 10px 15px;
    color: ${colors.secondary};
    border-radius: 10px;
    width: 100%;`;

const CatTitle = styled.p`
    color: ${colors.secondary};
    font-size: 20px;
    margin: 0;
`;
const BtnNewArticle = styled.input`
border: none;
border-radius: 5px
background-color: ${colors.back};
color: ${colors.secondary};
padding: 10px;
margin: 10px 15px;`;

function AddArticle(props) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt)
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input type={'text'} placeholder={'Nom de l\'article'}/>
                <Textarea rows="2" cols="33" name={'description'} placeholder={'Description'}/>
                <Input type={'number'} placeholder={'0.00 €'}/>
                <Input type={'text'} placeholder={'www.example.com'}/>
                <Input type={'file'}/>

                <Cat>
                    <CatTitle>Catégories</CatTitle>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Cat1"/>
                    <label htmlFor="vehicle1">Cat name</label><br/>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Cat2"/>
                    <label htmlFor="vehicle2">Cat name</label><br/>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Cat3"/>
                    <label htmlFor="vehicle3">Cat name</label>
                </Cat>

                <BtnNewArticle type={'submit'} value={'Nouvel article'}/>
            </Form>
        </>
    );
}


export default (AddArticle);