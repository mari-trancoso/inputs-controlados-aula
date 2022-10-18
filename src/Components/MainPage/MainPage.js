import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const onChangeName = (event) => {
    console.log("mudei o input nome")
    console.log(event.target.value)
    setNome(event.target.value)//guarda o valor atualizado que está no input
  }

  const onChangeIdade = (event) => {
    console.log("Mudei o input idade")
    console.log(event.target.value)
    setIdade(event.target.value)
  }

  const onChangeEmail = (event) => {
    console.log("mudei o input email")
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const submit = (event) => {
    console.log(nome)
    console.log(idade)
    console.log(email)

    setEmail("")
    setNome("")
    setIdade("")

  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={onChangeName} placeholder="seu nome aqui" value={nome} />
        </label>
        <label>
          Idade:
          <Input type="number" onChange={onChangeIdade} placeholder="seu idade aqui" value={idade}/>
        </label>
        <label>
          E-mail:
          <Input onChange={onChangeEmail} placeholder="seu email aqui" value={email} />
        </label>
      <button onClick={submit}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage