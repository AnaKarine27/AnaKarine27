import styled from "styled-components";

export const CardInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 18px 5px #0D0014;
    border-radius: 1rem;
    margin: 10px 0;
    height: 450px;
    max-width: 450px;
    padding: 20px;
    background-color: #1A0020; 
    color: #E8E8E8;
    cursor: pointer;
`
export const Titulo = styled.h2`
    color: #FFA800;
`
export const Content = styled.div`
    display: grid;
    justify-self: center;
    grid-template-columns: 35% 35% 35%;
    gap: 20px;
    margin-right: 100px;
`
export const Content2 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 100px;
    gap: 20px;
`
export const Botao = styled.button`
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 0.6em;
    cursor: pointer;
      -ms-flex-item-align: center;
          align-self: center;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1;
    padding: 1em 2em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    border-color: #FFA800;
    color: black;
    box-shadow: 0 0 40px 40px #FFA800 inset, 0 0 0 0 #FFA800;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;

&:hover {
  box-shadow: 0 0 10px 0 #FFA800 inset, 0 0 10px 4px #FFA800;
  color: white;
}
`