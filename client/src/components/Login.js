import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import axios from "axios"
import { ContainerDiv, AwesomeLabel, AwesomeInput, TitleDiv, AwesomeButton, ExcellentHeader } from "../styles/index"
import RainbowText from "react-rainbow-text"

const Login = () => {
    const history = useHistory()
    const [formState, setFormState] = useState({
        username: "",
        password: "",
      });

    const handleLogin = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', formState)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          history.push('/BubblePage');
        })
        // setFormState({
        //     username: "",
        //     password: "",
            
        //   })

    }
    const handleChange = e => {
        e.persist()
        setFormState(previous => ({...previous, [e.target.name]: e.target.value}))
    }

    return (
        <ContainerDiv>
             <form onSubmit={handleLogin}>
        <TitleDiv><ExcellentHeader><RainbowText>Welcome to the Bubble App!</RainbowText></ExcellentHeader></TitleDiv>
          <AwesomeLabel htmlFor="username">
           User Name: 
            <AwesomeInput
              id="username"
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </AwesomeLabel>
          <br />
                    <AwesomeLabel htmlFor="password">
            Password: 
            <AwesomeInput
              id="password"
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              placeholder="Enter Password"

            />
          </AwesomeLabel>
        
          <AwesomeButton onClick={handleLogin}>Login</AwesomeButton>
          </form>
        </ContainerDiv>
    )

}

export default Login;

