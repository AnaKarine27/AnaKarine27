import styled from "styled-components"

export const Texto = styled.span`
    color: #ffffff;
    background: black;
    font-size: 150px;
    font-family: Arial;
    text-transform: uppercase;

:before {
    content: "Labex";
    position: absolute;
    mix-blend-mode: difference;
    filter: blur(3px);
}
`
export const Labex = styled.div`
    display: inline-flex;
    filter: brightness(350%);
    overflow: hidden;
`
export const Gradiante = styled.span`
    background: linear-gradient(110.49237860445828deg, rgba(86, 216, 228,1) 5.535481770833334%,rgba(159, 1, 234,1) 96.74641927083333%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
`
export const Desvio = styled.span`
    background: radial-gradient(circle, white, black 35%) center / 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    mix-blend-mode: color-dodge;
    animation: dodge-area 3s linear infinite;

@keyframes dodge-area {
    to {
        transform: translate(50%, 50%);
    }
}
`
export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    align-items: center;
    flex-direction: row-reverse;
    margin: 0;
`
export const ImgAstro = styled.img`
    width: 48.6vw;
    height: 99.49vh;
`
export const DivLogo = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    margin-left: 40px;
`
export const DivBotoes = styled.div`
    display: flex;
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
    border-color: #682082;
    color: #E8E8E8;
    box-shadow: 0 0 40px 40px #682082 inset, 0 0 0 0 #682082;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;

&:hover {
  box-shadow: 0 0 10px 0 #682082 inset, 0 0 10px 4px #682082;
  color: #E8E8E8;
}
`
export const Alinhar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`