import React from 'react';
import styled from 'styled-components'
import UserListPage from  './components/UserListPage'
import CreateUserFormPage from './components/CreateUserFormPage'


const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
` 

class App extends React.Component {
  state = {
    currentPage: 'createUserFormPage'
  }

chagePage = () => {
  this.state.currentPage === 'createUserFormPage' 
  ? this.setState({currentPage: 'UserListPage'})
  : this.setState({currentPage: CreateUserFormPage})
}

render() {
  const currentPage = () => {
    if (this.state.currentPage === 'CreateUserFormPage') {
      return <CreateUserFormPage />
    } else if (this.state.currentPage === 'UserListPage') {
      return <UserListPage />
    }
  };

    return (
        <AppContainer>
          {currentPage()}
          <button onClick={this.changePage}>Trocar de Página</button>
         </AppContainer>
      )
    }
}

export default App