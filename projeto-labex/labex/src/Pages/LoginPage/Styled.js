import styled from "styled-components";

export const DivContainer = styled.div`
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        margin-right: 300px;
`
export const Input = styled.input`
 color: white;
    background-color: transparent;
    border-radius: 0.8rem;
    border: 1px solid #BF0087;
    height: 40px;
    width: 450px;

&:hover {
    color: white;
}

&:focus {
    outline: none;
    background-color: transparent;
    box-shadow: 6px 7px 15px 2px #1A081C;
}
`
export const DivBotoes = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`
export const Botoes = styled.button`
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 0.6em;
    cursor: pointer;
      -ms-flex-item-align: center;
          align-self: center;
    font-size: 0.9rem;;
    font-weight: 600;
    line-height: 1;
    padding: 1em 2em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    border-color: #1ABEF5;
    color: #000000;
    box-shadow: 0 0 40px 40px #1ABEF5 inset, 0 0 0 0 #1ABEF5;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;

&:hover {
  box-shadow: 0 0 10px 0 #1ABEF5 inset, 0 0 10px 4px #1ABEF5;
  color: #E8E8E8;
}
`

export const Titulo = styled.h1`
    color: #1ABEF5;
`
export const Img = styled.img`
    height: 89vh;
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`
export const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

