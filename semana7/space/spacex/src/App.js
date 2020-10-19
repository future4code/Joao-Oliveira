import React from 'react';
import styled from 'styled-components'
import './App.css';

class OpenList extends React.Component {
  constructor(props) {
    super(props)
    this.handleListClick = this.handleListClick.bind(this)
    this.handleReturnListClick = this.handleReturnListClick.bind(this)
    this.state = {isListIn: false}
  }

  handleListClick() {
    this.setState({isListIn: true})
  }

  handleReturnListClick() {
    this.setState({isListIn: false})
  }

  render() {
    const isListIn = this.state.isListIn
    let button

    if (isListIn) {
      button = <ReturnButton onClick={this.handleReturnListClick} /> 
    } else {
      button = <ListButton onClick={this.handleListClick} />
    }

  return (
    <div>
    <Greeting  isListIn={isListIn} />
    {button}
    <div>
  )    
}
}


function UserGreeting(props) {
  return <h1>Welcome Back<h1>
}

function GuestGreeting(props) {
  return <h1>Please Sign Up<h1>
}


function Greeting(props) {
  const isListIn = props.isListIn
  if (isListIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    <button>
    )
}

function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>
    Logout
    <button>
  )
}

ReactDOM.render(
  <OpenList />
  document.getElementById('root')
  )

export default App;
