import React from 'react'
import axios from 'axios'
import { baseUrl, axiosConfig } from './src/constants/axiosConstants'


class CreateUserFormPage extends React.Components {
  
    state = {
        nameValue: "",
        emailValue: ""
    }

    onChangeName = (event) => {
        this.setState({ nameValue: event.target.value});
    }


    onChangeEmail = (event) => {
        this.setState({ emailValue: event.target.value});
    }

    createUser = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        axios.post(baseUrl, body, axiosConfig).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error.message);
        })
        
    }

    render() {
        return(
            <div>
             <input
             value={this.state.nameValue}
             onChange={this.onChangeName}
             placeholder="Nome"
             />
            <input
            value={this.state.valueEmail}
            onChange={this.onChangeEmail}
            placeholder="E-mail"
            />
            <button onClick={this.createUser}>Criar Usuário</button>
            </div>
        )

    }
}

export default CreateUserFormPage;

