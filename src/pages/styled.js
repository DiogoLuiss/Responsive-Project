import styled from "styled-components";
import { keyframes } from "styled-components";


export const DivMain = styled.div`
position: relative;

margin: 100px auto;
max-height:600px ;
width: 90%;
max-width: 1120px;
overflow: hidden;

background-color: white;
border-radius: 20px;
@media(max-width: 570px) {
     overflow: auto;
  }
`
export const DivNav = styled.div`

width: 100%;
height: 80px;
margin-bottom: 50px;
display: flex;
color: white;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(0,39,255,1) 100%);
`

export const ImgLogo = styled.img`

width: 60px;
height: 60px;
margin: auto auto auto 40px;

`
export const UlNav = styled.ul`
position: relative;

margin: auto 50px auto auto;

@media(max-width: 665px) {
  display: flex;
    flex-direction: column;
    color:red ;
    transition:2s;
    margin: auto 0px auto auto;
    
  }
`
export const ImgMenu = styled.button`

@media(min-width: 665px) {
      display: none;
  }
 
color: white;
font-size: 60px;
margin: 10px 50px auto auto;
background-color: transparent;
border: none;

&:hover{
  font-size: 65px;
}
`

export const LiNav = styled.li`
position: relative;
display: inline-block;
margin-left: 10px;
font-size: 20px;
font-weight: 600;

@media(max-width: 665px) {
color: black;

  ${LiNav => LiNav.IsBack ? "transition-duration: 1s;  margin-right: 7px; Color: black;font-weight: 800;  "  : " font-size: 0px;"}
  }

`
export const DivContent = styled.div`

width: 100%;

display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    @media(max-width: 570px) {
      gap: 50px;
      display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
}
@media(max-width: 355px){
  gap:50px;  }
      
  
`
export const DivLeleft = styled.div`
width: 75%;
position: relative;
display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    gap: none;

 
    @media(max-width: 570px) {

      display: flex;
    flex-direction: row;  
      width: 100%;
    margin-top: 10px;
  
  } @media(max-width: 355px) {

width: 80%;

}
 

`



export  const DivImgBack = styled.div `
background-color:red;
width: 30%;
height: 100%;
position: absolute;
border-radius: 25px 0px 0px 25px;
min-width: 170px;
@media(max-width: 570px) {


border-radius: 0px 25px 25px 0px;
}
@media(max-width: 490px) {

margin-top: 100px;

}
` 


export const ImgC = styled.img`


width: 55%;
height: 55%;
position: relative;
min-width: 250px;
animation: ControllerAnimation 2s infinite ease-in-out  alternate;

@keyframes ControllerAnimation{
 0%{}
 100% {
   transform: translate(-10%,-5%) rotate(-10deg);
 }


}
@media(max-width: 355px) {min-width: 200px;  }
@media(max-width: 490px) {

margin-top: 100px;
}
`



export const ImgAdd = styled.img`
width: 50px;
height: 50px; 

position: relative;
@media(max-width: 490px) {

margin-top: 100px;
}
`

export const Divitens = styled.div`

width: 40%;
max-width: 279px;
display: flex;
    align-content: flex-start;
    flex-direction: column;
margin-left: 40px;

@media(max-width: 570px) {
    display: block;
  }
  @media(max-width: 570px) {
    width: 100%;
    margin-top: 10px;
  }

  @media(max-width: 490px) {

margin-top: 30px;
}
  @media(max-width: 355px) {

width: 80%;

}
`
export const H1 = styled.h1`

font-size: 40px;
`
export const H2 = styled.h2`
margin-top: 20px;
font-size: 25px;
color: grey;`

export const P1 = styled.p`
margin-top: 20px;
font-weight: 500;
${P1 => P1.IsBack ? "color: black; font-weight: 800; " : "color: grey;"}
`
export const Button = styled.button`
background:blue;
color: white;
font-size: 15px;
width: 150px;
height: 30px;
font-weight: 600;
border: none;
box-shadow: 0px 0px 6px 2px black;
margin-top: 30px;
border-radius: 5px;
transition: 1s;

&:hover{
  width: 125px;
  opacity: 0.85 ;
  cursor: pointer;
  border-radius: 10px;
}
&:active{
  opacity: 0.7;

}

`
export  const DivRede = styled.div`
margin-top: 50px;
margin-bottom: 50px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
`
export const ImgRede = styled.img`
width: 21px;
height: 27px; 
`