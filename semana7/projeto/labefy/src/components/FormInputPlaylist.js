import React from 'react'
import styled from 'styled-components'
import axios from  'axios'
import { baseUrl, axiosConfig } from "../constantns/constants"
 
const Input = styled.input.attrs({
  placeholder: "Adicione uma playlist..",
})`
  &&& {
    width: 300px;
    height: 30px;
    
  }
`


class FormInputPlaylist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          playlistValue: ' '
      };
  
      this.playlistChange = this.playlistChange.bind(this);
      this.playlistSubmit = this.playlistSubmit.bind(this);
    }
  
    playlistChange(event) {
      this.setState({value: event.target.value});
    }
  
    playlistSubmit(event) {
      alert('A Playlist ' + this.state.value + ' foi adicionada com Sucesso!');
      event.preventDefault();
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistValue
        }
    
     axios
    .post(baseUrl, body, axiosConfig)
    .then((response) => {
      console.log(response);
      this.setState({ playlistValue: ""});
    })
    .catch((error) => {
      console.log(error.message);
    });
};

render() { 
      return (
        <form className="formulario" onSubmit={this.playlistSubmit}>
          <label>
           <h2>Adicione Uma Playlist </h2>
            <Input 
            type="text" 
            value={this.state.value} 
            onChange={this.playlistChange} 
            />
          </label>
          <br />
          <br />
          <input 
          className='button' 
          type="submit" 
          value="Adicionar Playlist" 
          onClick={this.createPlaylist}        
          />
        </form>
      );
      }



}




  export default FormInputPlaylist