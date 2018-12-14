import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        <div className={"wrapper"}>
            <SayFullName name={"Александр"} surname={"Завершнев"} link={"https://vk.com/id7494002"} />
            <SayFullName name={"Alexandr"} surname={"Zavershnev"} link={"https://vk.com/id7494002"} />
            <SayFullName name={"Алек"} surname={"Завершнев"} link={"https://vk.com/id7494002"} />
            <CreateImage link={"img/broken-display-2222010_1920.png"} />
        </div>
    );
  }
}

function SayFullName(props){
    return(
        <div>
            <h1>Мое имя {props.name}, моя фамилия - {props.surname}</h1>
            <a href={props.link}>Ссылка на мой профиль</a>
        </div>
    )
}

function CreateImage(properties) {
    return (
        <div>
            <img src={properties.link} alt=""/>
        </div>
    )
}

export default App;



{/*<div className="App">*/}
    {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
        {/*>*/}
            {/*Learn React*/}
        {/*</a>*/}
    {/*</header>*/}
{/*</div>*/}