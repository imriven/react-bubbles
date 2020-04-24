import Styled from "styled-components"
import Background from "../media/color3.png"
import { titleKeyFrame } from "../media/keyframes"


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
font-size: 1.4em;
`
export const LinkContainerDiv = Styled.div`
margin-bottom: 5%;
`

export const TitleDiv = Styled.div`
animation: ${titleKeyFrame} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1.5s both;
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
height: 100vmin;
width: auto;
background-image: url(${Background});

`

export const ContainerDiv = Styled.div`
display:flex;
flex-wrap:wrap;
flex-direction: column;
text-align: center;
background-color: rgba(255, 255, 255, 0.73);
border-radius: 25px;
margin: 20% 0;
padding: 0 5%;
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
border-bottom: 2px solid royalBlue;
width: 70%;
margin: 10% 15%;
outline:none;
flex-wrap: nowrap;
`
export const AwesomeLabel = Styled.label `
margin: 3% 3%;
`

export const AwesomeButton = Styled.button `
box-shadow: 5px 5px 8px blue;
padding:2%;
width:20%;
margin: 0 auto;
border-radius: 5px;
font-size: .7em;
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