import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constants/Url'
import { useNavigate } from 'react-router-dom'
import useProtected from '../../Hooks/useProtected'
import Header from '../../Components/Header/Header'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import useRequestData from '../../Hooks/useRequestData'
import Foguete from '../../Assets/foguete2.png' 
import { CardViagem, Content, Content2, DivBotoes, Botoes, ImgFoguete } from './Styled'

function AdminHomePage() {
    const [listTrips] = useRequestData(`/trips`, {})
    const history = useNavigate()
    useProtected()

    const irParaHomePage = (() => {
        history("/");
    })

    const irParaCreatTrip = (() => {
        history("/admin/trips/create");
    })

    const irParaLogin = (() => {
        history("/login");
        localStorage.setItem("token", "")
    })

    const clickTripDetail = ((id) => [
        history(`/admin/trips/${id}`)
    ])


    const listaDeViagens = listTrips.trips && listTrips.trips.map((trip) => {
        return (
            <CardViagem key={trip.id}>
                <div onClick={() => clickTripDetail(trip.id)}>
                    {trip.name}
                </div>

                <div>
                    <IconButton aria-label="delete" onClick={() => deletarTrip(trip.id, trip.name)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </CardViagem>
        )
    })

    const deletarTrip = (id, name) => {
        const token = localStorage.getItem(`token`)
        const header = { headers: { auth: token } }
        const deletar = window.confirm("Tem certeza que deseja deletar a viagem?")
        if (deletar) {
            axios.delete(`${BASE_URL}/trips/${id}`, header)
                .then((response) => {
                    alert(`Viagem deletada com sucesso!`)
                })
                .catch((error) => {
                    alert(`Ocorreu um erro!`)
                })
        }
    }

    return (
        <div>
            <Header />

            <Content>

            <ImgFoguete src={Foguete} alt="Imagem foguete" />

                <DivBotoes>
                    <Botoes variant="contained" onClick={irParaHomePage}>VOLTAR </Botoes>
                    <Botoes variant="contained" onClick={irParaCreatTrip}>CRIAR VIAGEM</Botoes>
                    <Botoes variant="contained" onClick={irParaLogin}>LOGOUT</Botoes>
                </DivBotoes>

                <Content2>
                {listaDeViagens && listaDeViagens.length > 0 ? listaDeViagens : <p>Caregando...</p>}
                </Content2>

            </Content>
        </div>
    );
}

export default AdminHomePage;