import Styled from "styled-components"



export const BackgroundContainer = Styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
background: linear-gradient(19deg, rgba(63,94,251,0.6895133053221288) 0%, rgba(252,70,107,0.6222864145658263) 100%);
margin: 5% 0;
width: 60%;
text-align: center;
border-radius:25px;
`
export const ExcellentHeader = Styled.h1 `
display: flex;
justify-content:center;
text-align:center;
padding: 2%;
margin: 5% 0;
color: white;
font-size: 1.8em;
`
export const LinkContainerDiv = Styled.div`
margin-bottom: 5%;
`

export const AddColorWrap = Styled.div`
    height: 100%;
    width: 300px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border: 1px lightgray solid;
    border-top-style: none;
    border-right-style: 1px lightgray solid;
    border-bottom-style: 1px lightgray solid;
    border-left-style: none;
    background-color: white;
`
  
export const EditColorWrap = Styled.div`
    height: 100%;
    width: 300px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-top-style: none;
    border-right-style: 1px lightgray solid;
    border-bottom-style: 1px lightgray solid;
    border-left-style: none;
    background-color: white;
`

export const ImageBackground = Styled.div `
display: flex;
justify-content:center;
background-size:cover;
height:100vmin;
width: auto;

`

export const ContainerDiv = Styled.div`
display:flex;
flex-wrap:wrap;
flex-direction: column;
text-align: center;
`
//Form
export const AwesomeInput = Styled.input `
display:flex;
justify-content:center;
text-align: center;
color: black;
font-size: 1rem;
background: transparent;
border: none;
border-bottom: 2px solid white;
width: 70%;
margin: 10% 15%;
outline:none;
flex-wrap: nowrap;
`
export const AwesomeLabel = Styled.label `
margin: 35% 3%;
`

export const AwesomeButton = Styled.button `
box-shadow: 5px 5px 8px blue;
padding:2%;
border-radius: 5px;
font-size: .7em;
margin: 5% 1%;
outline:none;
width: 80%;
background: linear-gradient(to right, blue, cornFlowerBlue);
color:lightBlue;
`
//FriendList

export const CardContainerDiv = Styled.div`
display:flex;
text-align: center;
width: 80%;
margin: 0 auto;
flex-direction:row;
flex-wrap: wrap;
`

//Friend Card

export const CardDiv = Styled.div`
width: 30%;
text-align: center;
margin: 2% auto;
padding:4.5%;
font-size: .8rem;
color: white;
border-radius: 15px;
border-bottom: 2px solid purple;
box-shadow: 5px 5px 5px purple;
`