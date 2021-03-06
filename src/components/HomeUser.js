import NavbarMain from "./NavbarMain";
import Header from "./Header";
import Feature from "./Feature";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import LoginNow from "./LoginNow";
import Topics from "./Topics";
import React from 'react'

const HomeUser = ({fetchQuestions}) => {
  return (
    <>
     <NavbarMain/>
     <Header/>
     <Feature/>
     <Topics/>
     <LoginNow fetchQuestions={fetchQuestions}/>
     <Subscribe/>
     <Footer/> 
     </>
  )
}

export default HomeUser