import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { BASE_URL } from '../../Constants/Url'
import Header from '../../Components/Header/Header'
import { DivContainer, Titulo, Input, Formulario,DivInputs, Img, Form, DivBotoes, Botoes } from './Styled'
import LoginImg from '../../Assets/imgLogin.png'


function LoginPage() {
    const history = useNavigate();
    const { form, onChange, limparCampos } = useForm({ email: "", password: "" })

    const irParaHomePage = (() => {
        history("/");
    })

    const irParaAdminPage = (() => {
        history("/admin/trips/list")
    })

    const onSubmitLogin = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }

        axios.post(`${BASE_URL}/login`, body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                irParaAdminPage()
                limparCampos()
            })

            .catch((error) => {
                alert(`Usuário não encontrado!` )
            })
    }

    return (
        <div>
            <Header />
            <DivContainer>

                <Form>

                    <Titulo> Login </Titulo>

                    <form onSubmit={onSubmitLogin}>
                        <Formulario>
                            <DivInputs>
                                <Input
                                    placeholder={"E-mail"}
                                    type={"email"}
                                    name={"email"}
                                    value={form.email}
                                    onChange={onChange}
                                    required
                                />
                                <Input
                                    placeholder={"Senha"}
                                    type={"password"}
                                    name={"password"}
                                    value={form.password}
                                    onChange={onChange}
                                    required
                                    pattern={"^.{6,}"}
                                    title={"Sua senha dever conter no mínimo 6 caracteres!"}
                                />
                            </DivInputs>

                            <DivBotoes>
                                <Botoes variant="contained" onClick={irParaHomePage}>VOLTAR</Botoes>
                                <Botoes variant="contained" type={"submit"}>ENTRAR</Botoes>
                            </DivBotoes>

                        </Formulario>
                    </form>

                </Form>

                <div>
                    <Img src={LoginImg} alt="Imagem Astronauta" />
                </div>

            </DivContainer>
        </div>
    );
}

export default LoginPage;