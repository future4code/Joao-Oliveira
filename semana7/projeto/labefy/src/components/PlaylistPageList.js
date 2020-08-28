import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../constantns/constants'

const DeleteButton = styled.span` 
    color: red;
`

class PlaylistPageList extends React.Component {
    state = {
        playlist: []
    }

componentDidMount = () => {
    this.getPlaylists()

    axios.get(baseUrl, axiosConfig).then((response) => {
        this,setState({ playlist: response.data})
    }).catch((error) => {
        console.log(error.message)
    })

    deletePlaylist = (name) => {
        axios.delete(`${baseUrl}/${name}`, axiosConfig).then((response) => {
            this.getPlaylists()
        }).catch((error) => {
            console.log(error.message)
        })
       } 
    }

    render() {
        return(
            <div>
                {this.state.playlist.map((list) => {
                    return(
                        <p key={list.id}>
                            {list.name}
                         <DeleteButton onClick={() => this.deletePlaylist(list.id)}>
                         {" "}
                         X
                         </DeleteButton>
                         </p>
                  )
             })}
            </div>
        )
    } 
}

export default PlaylistPageList