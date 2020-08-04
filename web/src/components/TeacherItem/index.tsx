import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/18699240?s=60&u=c1ea97a0c7914029ac14a4acd15f6e7b3a9955da&v=4" alt="Ohanna Dezidério"/>
                <div>
                    <strong>Ohanna Dezidério</strong>
                    <span>Francês</span>
                </div>
            </header>

            <p>
                Encantada pela língua francesa.
                <br /> <br />
                Apaixonada por idiomas.
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 60,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;