import React from 'react'
import axios from 'axios';
import useForm from '../../Hooks/useForm';
import { BASE_URL } from '../../Constants/Url';
import { useNavigate } from 'react-router-dom';
import useProtected from '../../Hooks/useProtected';
import planetas from '../../Constants/planetas'
import Header from '../../Components/Header/Header'
import FormImg from '../../Assets/cadastro.png'
import { DivFormulario, DivContainer, DivBotoes, Centralizar, Botoes, 
Input, Select, Img, Titulo, Formulario } from './Styled'


function CreateTripPage() {
    const { form, onChange, limparCampos } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    const history = useNavigate()
    useProtected()

    const irParaAdminHome = (() => {
        history("/admin/trips/list");
    })

    const onSubmitCriarTrip = ((event) => {
        event.preventDefault()
        const token = localStorage.getItem(`token`)
        const header = { headers: { auth: token } }
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        axios.post(`${BASE_URL}/trips`, body, header)
            .then((response) => {
                alert("Viagem adicionada com sucesso!")
                limparCampos()
            })
            .catch((error) => {
                alert('Ocorreu um erro!', error.response)
            })
    })

    const dataAtual = new Date()
    const data = dataAtual.getFullYear() + "-" +
        ("0" + (dataAtual.getMonth() + 1)).substr(-2) + "-"
        + ("0" + dataAtual.getDate()).substr(-2)

    return (
        <div>
            <Header />

            <DivContainer>

                <div>
                    <Img src={FormImg} alt="Imagem Astronauta" />
                </div>

                <Centralizar>
                    <Titulo>Criar Viagem</Titulo>

                    <form onSubmit={onSubmitCriarTrip}>

                        <Formulario>
                        <DivFormulario>
                            <Input
                                placeholder={"Nome da Viagem"}
                                name={"name"}
                                value={form.name}
                                onChange={onChange}
                                pattern={"^.{5,}$"}
                                title={"O nome da viagem deve ter no mínimo 5 caracteres!"}
                                required
                            />

                            <Select
                                placeholder={"Planeta"}
                                name={"planet"}
                                value={form.planet}
                                defaultValue={""}
                                onChange={onChange}
                                required
                            >
                                <option value={""} disabled>Escolha um Planeta</option>
                                {planetas.map((planeta) => {
                                    return <option value={planeta} key={planeta}>{planeta}</option>
                                })}
                            </Select>

                            <Input
                                placeholder={"Data"}
                                type={"date"}
                                name={"date"}
                                value={form.date}
                                onChange={onChange}
                                required
                                min={data}
                            />

                            <Input
                                placeholder={"Descrição"}
                                name={"description"}
                                value={form.description}
                                onChange={onChange}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                            />

                            <Input
                                placeholder={"Duração em dias"}
                                type={"number"}
                                name={"durationInDays"}
                                value={form.durationInDays}
                                onChange={onChange}
                                required
                                min={20}
                            />
                            </DivFormulario>

                            <DivBotoes>
                                <Botoes variant="contained" onClick={irParaAdminHome}>VOLTAR</Botoes>
                                <Botoes variant="contained" type={"submit"}>CRIAR</Botoes>
                            </DivBotoes>
                        
                        </Formulario>

                    </form>
                </Centralizar>

            </DivContainer>

        </div>
    );
}

export default CreateTripPage;