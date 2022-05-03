import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import useRequestData from '../../Hooks/useRequestData';
import Foguete from '../../Assets/foguete.png' 
import {ImgFoguete, CardViagens, Content, DivBotoes, Botoes } from './Styled'

function ListTripsPage() {
    const history = useNavigate()
    const [listTrips] = useRequestData('/trips', {})

    const irParaHomePage = (() => {
        history("/");
    })

    const irParaApplicationForm = (() => {
        history("/trips/application");
    })

    const listaDeViagens = listTrips.trips && listTrips.trips.map((trip) => {
        return (
            <CardViagens key={trip.id}>
                <p><b>Nome: </b>{trip.name}</p>
                <p><b>Descrição: </b>{trip.description}</p>
                <p><b>Planeta: </b>{trip.planet}</p>
                <p><b>Duração: </b>{trip.durationInDays}</p>
                <p><b>Data: </b>{trip.date}</p>
            </CardViagens>
        )
    })

    return (
        <div>
            <Header />
            <Content>

            <ImgFoguete src={Foguete} alt="Imagem foguete" />
                
                <DivBotoes>
                    <Botoes variant="contained" onClick={irParaHomePage}>VOLTAR</Botoes>
                    <Botoes variant="contained" onClick={irParaApplicationForm}>INSCREVA-SE</Botoes>
                </DivBotoes>

                <div>
                    {listaDeViagens && listaDeViagens.length > 0 ? listaDeViagens : <p>Caregando...</p>}
                </div>

            </Content>
        </div>
    );
}

export default ListTripsPage;