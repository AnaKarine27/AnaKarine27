import { useState } from 'react'
import { BASE_URL } from '../../Constants/Url'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import useRequestData from '../../Hooks/useRequestData'
import useProtected from '../../Hooks/useProtected'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { CardInfo, Content2, Titulo, Content, Botao } from './Styled'

function TripDetailsPage() {
    const parametro = useParams()
    const [detailsTrips, setDetailsTrips] = useRequestData(`/trip/${parametro.id}`, [])
    const [aprovar, setAprovar] = useState(true)
    const history = useNavigate()
    useProtected()

    const irParaAdminHome = (() => {
        history("/admin/trips/list");
    })

    const onChangReprovar = () => {
        setAprovar(false)
    }

    const aproveCandidato = (id) => {
        const token = localStorage.getItem("token")
        const header = { headers: { auth: token } }
        const body = {
            approve: aprovar
        }

        axios.put(`${BASE_URL}/trips/${parametro.id}/candidates/${id}/decide`, body, header)
            .then((response) => {
                alert("Candidato aprovado com sucesso!")
                setDetailsTrips()
            })
            .catch((error) => {
                console.log(`Ocorreu um erro!`)
            })
    }

    const listaCandidatos = detailsTrips.trip && detailsTrips.trip.candidates.map((cand) => {
        return (
            <div
                key={cand.id} candidate={cand} tripId={parametro.id} setDetailsTrips={setDetailsTrips} >
                <p><b>Nome: </b> {cand.name}</p>
                <p><b>Profissão:</b> {cand.profession}</p>
                <p><b>Idade: </b> {cand.age}</p>
                <p><b>País: </b> {cand.country}</p>
                <p><b>Texto de Candidatura: </b> {cand.applicationText}</p>

                <div>
                    <Botao onClick={() => aproveCandidato(cand.id)}>Aprovar</Botao>
                    <Botao onClick={() => onChangReprovar(cand.id)}>Reprovar</Botao>
                </div>

            </div>
        )
    })

    const candidatosAprovados = detailsTrips && detailsTrips.trip && detailsTrips.trip.approved.map((cand) => {
        return <li key={cand.id}>{cand.name}</li>
    })

    return (
        <div>
            <Header />

            <Content2>
            <Content>

                <div>
                    <CardInfo>
                        {detailsTrips && detailsTrips.trip && <Titulo>{detailsTrips.trip.name}</Titulo>}

                        {detailsTrips && detailsTrips.trip && <p><b>Nome: </b>{detailsTrips.trip.name}</p>}
                        {detailsTrips && detailsTrips.trip && <p><b>Descrição: </b>{detailsTrips.trip.description}</p>}
                        {detailsTrips && detailsTrips.trip && <p><b>Planeta: </b>{detailsTrips.trip.planet}</p>}
                        {detailsTrips && detailsTrips.trip && <p><b>Duração: </b>{detailsTrips.trip.durationInDays}</p>}
                        {detailsTrips && detailsTrips.trip && <p><b>Data: </b>{detailsTrips.trip.date}</p>}
                    </CardInfo>

                    
                </div>

                <CardInfo>
                    <Titulo>Candidatos Pendentes</Titulo>
                    {listaCandidatos && listaCandidatos.length > 0 ? listaCandidatos : <p>Não há candidatos pendentes!</p>}
                </CardInfo>

                <CardInfo>
                    <Titulo>Candidatos Aprovados</Titulo>
                    {candidatosAprovados && candidatosAprovados.length > 0 ? candidatosAprovados : <p>Não há candidatos aprovados!</p>}
                </CardInfo>

            </Content>

            <Botao variant="contained" onClick={irParaAdminHome}>VOLTAR</Botao>
            </Content2>

        </div>
    );
}

export default TripDetailsPage;