import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../../Constants/Url';
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import useRequestData from '../../Hooks/useRequestData'
import Header from '../../Components/Header/Header';
import paises from '../../Constants/paises'
import FormImg from '../../Assets/imgLogin.png'
import { DivFormulario, Formulario, DivContainer, Img, Input, Titulo, DivBotoes, Botoes, Select } from './Styled'


function ApplicationFormPage() {
    const history = useNavigate()
    const [listTrips] = useRequestData('/trips', [])
    const { form, onChange, limparCampos } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const { idTrip, setIdTrip } = useState("")

    const irParaTripList = (() => {
        history("/trips/list");
    })

    const onChangeTripId = ((event) => {
        setIdTrip(event.target.value)
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        axios.post(`${BASE_URL}/trips/${idTrip}/apply`, body)

            .then((response) => {
                alert("Inscrição enviada com sucesso!")
                limparCampos()
            })

            .catch((error) => {
                alert(`Ocorreu um erro!
${error.response.data}!`)
            })
    }

    const listaDeViagens = listTrips.trips && listTrips.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}> {trip.name} </option>
    })

    return (
        <div>

            <div>
                <Header />
            </div>

            <DivContainer>

                <div>
                    <Img src={FormImg} alt="Imagem Astronauta" />
                </div>

                <div>
                    <Titulo>Inscreva-se para uma viagem</Titulo>


                    <form onSubmit={onSubmitForm}>
                        <Formulario>
                            <DivFormulario>
                                <Select defaultValue="" onChange={onChangeTripId}>
                                    <option value="" disabled>Escolha uma Viagem</option>
                                    {listaDeViagens}
                                </Select>

                                <Input
                                    placeholder={"Nome"}
                                    name={"name"}
                                    value={form.name}
                                    onChange={onChange}
                                    pattern={"^.{3,}$"}
                                    title={"O nome deve ter no mínimo 3 caracteres!"}
                                    required
                                />

                                <Input
                                    placeholder={"Idade"}
                                    type={"number"}
                                    name={"age"}
                                    value={form.age}
                                    onChange={onChange}
                                    required
                                    min={18}
                                />

                                <Input
                                    placeholder={"Texto de Candidatura"}
                                    name={"applicationText"}
                                    value={form.applicationText}
                                    onChange={onChange}
                                    required
                                    pattern={"^.{20,}$"}
                                    title={"O texto de candidatura deve ter no mínimo 20 caracteres!"}
                                />

                                <Input
                                    placeholder="Profissão "
                                    variant="outlined"
                                    name={"profession"}
                                    value={form.profession}
                                    onChange={onChange}
                                    required
                                    pattern={"^.{4,}"}
                                    title={"A profissão deve ter no mínimo 4 caracteres!"}
                                />

                                <Select
                                    placeholder={"País"}
                                    name={"country"}
                                    value={form.country}
                                    onChange={onChange}
                                >
                                    <option value={""} disabled>Escolha um País</option>
                                    {paises.map((country) => {
                                        return (<option value={country} key={country}>{country}</option>)
                                    })}
                                </Select>

                            </DivFormulario>

                            <DivBotoes>
                                <Botoes variant="contained" onClick={irParaTripList}>VOLTAR</Botoes>
                                <Botoes variant="contained" type={"submit"}>ENVIAR</Botoes>
                            </DivBotoes>
                        </Formulario>

                    </form>

                </div>
            </DivContainer>
        </div>
    );
}

export default ApplicationFormPage;