import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import {Background} from './Styled'

function ErrorPage() {
    const history = useNavigate()

    const irParaHomePage = (() => {
        history("/");
    })

    return (
        <Background>
            <iframe src="https://giphy.com/embed/aYpmlCXgX9dc09dbpl" 
            width="480" 
            height="480" 
            ></iframe>
            <h1>Ops!</h1>
            <p>A página que você está procurando não foi encontrada.</p>

            <Button variant="contained" onClick={irParaHomePage}>🚀 PÁGINA INICIAL</Button>
        </Background>
    );
}

export default ErrorPage;