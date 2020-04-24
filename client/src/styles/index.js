import Styled from "styled-components"
import Background from "../media/color3.png"
import { titleKeyFrame } from "../media/keyframes"


export const BackgroundContainer = Styled.div`
display: flex;
flex-direction:row;
background: linear-gradient(19deg, rgba(63,94,251,0.4896073903002309) 0%, rgba(252,70,107,0.3556581986143187) 100%);
margin: 5% 0;
width: 80%;
text-align: center;
border-radius:25px;
`
export const ExcellentHeader = Styled.h1 `
font-size: 1.4em;
`

export const TitleDiv = Styled.div`
animation: ${titleKeyFrame} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1.5s both;
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
