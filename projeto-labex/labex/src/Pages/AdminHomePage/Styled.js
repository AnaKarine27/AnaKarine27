import styled from "styled-components";

export const CardViagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 5px 5px 18px 5px #0D0014;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    max-width: 800px;
    width: 170%;
    background-color: #682082; 
    color: #E8E8E8;
    cursor: pointer;
`
export const DivBotoes = styled.div`
    display: flex;
    align-items: flex-start;
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
    border-color: #9DC189;
    color: black;
    box-shadow: 0 0 40px 40px #9DC189 inset, 0 0 0 0 #9DC189;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;

&:hover {
  box-shadow: 0 0 10px 0 #9DC189 inset, 0 0 10px 4px #9DC189;
  color: white;
}
`
export const Content = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 100px;
`
export const ImgFoguete = styled.img`
    position: fixed;
    top: 248px;
    z-index: 100;
    left: 0pt;
    height: 100%;
`
export const Content2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
`