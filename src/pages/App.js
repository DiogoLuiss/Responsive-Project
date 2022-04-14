import {React, useState,useEffect} from "react";
import logo from "../assets/logo.png"
import controller from "../assets/controller.png"
import Add from "../assets/ImgAdd.png"
import Menu from "../assets/menu.png"

import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"

import {FaBars} from "react-icons/fa";
import {

  DivMain,
  DivNav,
  ImgLogo,
  ImgMenu,
  UlNav,
  LiNav,
  DivContent,
  DivLeleft,
  ImgC,
  ImgAdd,
  DivImgBack,
  Divitens,
  H1,
  H2,
  P1,
  Button,
  DivRede,
  ImgRede,

} from "./styled"


function App() {



  const [Active,setActive] = useState(false)


  function Change() {
    setActive(!Active)
    console.log(Active);
  }
  useEffect(() => {

  }, [Active])
  
  return (

    <DivMain>

      <DivNav> <ImgLogo src={logo} alt="playstation-logo" />

    
        <UlNav>
        <ImgMenu onClick={Change} ><FaBars/></ImgMenu>
          <LiNav IsBack={Active}>Consoles</LiNav>
          <LiNav IsBack={Active}>Acessorios</LiNav>
          <LiNav IsBack={Active}>Controles</LiNav>
          <LiNav IsBack={Active}>Outros</LiNav>

        </UlNav>


      </DivNav >

      <DivContent>


        <Divitens>


          <H1>PS5 Dualsense</H1>
          <H2>Wireless Controller for PlayStation</H2>
          <P1>Controle Original</P1>
          <P1 >225.00$</P1>
          <Button>Comprar Agora</Button>

        </Divitens>


        <DivLeleft>

          <DivImgBack></DivImgBack>
          <ImgAdd src={Add}></ImgAdd>
          <ImgC src={controller}></ImgC>



        </DivLeleft>




      </DivContent>

      <DivRede>
      <ImgRede src={facebook}></ImgRede>
      <ImgRede src={instagram}></ImgRede>
      <ImgRede src={twitter}></ImgRede>

      </DivRede>

 

    </DivMain>






  );
}

export default App;
