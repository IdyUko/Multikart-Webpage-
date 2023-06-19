import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import styled from "styled-components";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/footer"


const App= () => {
        return(

                <Div>
                        <Header/>
                        <Home/>
                        <Footer/>
                </Div>
                
        )
}

export default App;


const Div = styled.div``;