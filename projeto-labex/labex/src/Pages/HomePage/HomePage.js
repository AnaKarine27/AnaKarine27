import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Alinhar, ImgAstro, Botoes, DivBotoes, DivLogo, Texto, Labex, Gradiante, Desvio, DivContainer } from './Styled'
import Astronauta from '../../Assets/astronaut.png'

function HomePage() {
    const history = useNavigate()

    const irParaTripList = (() => {
        history("/trips/list");
    })

    const irParaLogin = (() => {
        const token = localStorage.getItem("token")
        if (token) {
            history(`/admin/trips/list`)
        } else {
            history("/login");
        }
    })

    return (
        <div>
            <DivContainer>

                <div>
                    <ImgAstro src={Astronauta} alt="Imagem astronauta" />
                </div>

                <DivLogo>
                    <div>
                        <Labex>
                            <Texto>LABEX</Texto>
                            <Gradiante></Gradiante>
                            <Desvio></Desvio>
                        </Labex>
                    </div>

                    <Alinhar>
                        <div>
                            <h3>VER O UNIVERSO AO VIVO É MAIS FANTÁSTICO DO QUE EM QUALQUER SONHO.
                                FAÇA PARTE DESSA EXPERIÊNCIA E VIAJE CONOSCO!</h3>
                        </div>

                        <DivBotoes>
                            <Botoes variant="contained" onClick={irParaTripList}>VER VIAGENS</Botoes>
                            <Botoes variant="contained" onClick={irParaLogin}>ÁREA DE ADMIN</Botoes>
                        </DivBotoes>
                    </Alinhar>

                </DivLogo>

            </DivContainer>
        </div>
    );
}

export default HomePage;