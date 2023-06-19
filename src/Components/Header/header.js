import React, {useState} from "react";
import styled from "styled-components";
import {BsTelephoneFill, BsFillPersonFill} from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaBars, FaTimes} from "react-icons/fa"


const Header= () => {

        const [toggle, setToggle] = useState(false)

        const handleToggle = () =>{
        setToggle(!toggle)
        }


        return(
                <Container>
                        <Section1>
                                <Wrapper>
                                        <Leftnavs>
                                                <H3>Welcome to our store Multikart</H3>
                                                <Leftnavdiv>
                                                        <BsTelephoneFill   style= {{width: 20, height: 20}}/>
                                                        <H3>Call Us: 123 - 456 - 7890</H3>
                                                </Leftnavdiv>
                                        </Leftnavs>
                                        <Rightnav>
                                                <Rightnavdiv1>
                                                        <AiFillHeart  style= {{width: 20, height: 20}}/>
                                                        <H3><U>Wishlist</U></H3>
                                                </Rightnavdiv1>
                                                <Rightnavdiv2>
                                                        <BsFillPersonFill  style= {{width: 20, height: 20}}/>
                                                        <H3>My Account</H3>
                                                </Rightnavdiv2>
                                        </Rightnav>                                        
                                </Wrapper>
                        </Section1>
                        
                        <Section2>
                                <Wrapper>
                                        <Logonav>
                                                <GiHamburgerMenu  style= {{width: 25, height: 25, color: "black"}}/>
                                                <img src = "/18.png "  alt=" logo"/>
                                        </Logonav>
                                        <Navhold>
                                                <Midnavs>
                                                        <Select><option>HOME</option></Select>
                                                        <Select><option>SHOP</option></Select>
                                                        <Select><option>PRODUCTS</option></Select>
                                                        <Select><option>FEATURES</option></Select>
                                                        <Select><option>PAGES</option></Select>
                                                        <Select><option>BLOGS</option></Select>
                                                </Midnavs>
                                                <Rightnavs>
                                                        <Rightdiv><img src="/search.png"/></Rightdiv>
                                                        <Rightdiv><img src="/setting.png"/></Rightdiv>
                                                        <Rightdiv><img src="/cart.png"/></Rightdiv>         
                                                </Rightnavs>

                                                <BurgerHold onClick={handleToggle}>
                                                        { toggle ? <FaTimes/> : <FaBars/>}
                                                </BurgerHold>
                                        </Navhold>
                                </Wrapper>
                        </Section2>

                </Container>
        )
}

export default Header;


const Container= styled.div`
width: 100%;
height: 150px;
`;
const Section1= styled.div`
width: 100%;
height: 50px;
background-color: #3e5067;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper= styled.div`
width: 90%;
height: 100%;
/* background-color: aliceblue; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const Leftnavs= styled.div`
width: 35%;
height: 100%;
/* background-color: aquamarine; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const Rightnav= styled.div`
width: 20%;
height: 100%;
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const H3= styled.div`
font-size: 15px;
`;
const U= styled.div`
text-decoration: underline;
`;
const Leftnavdiv= styled.div`
width: 43%;
height: 100%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
const Rightnavdiv1= styled.div`
width: 33%;
height: 100%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
const Rightnavdiv2= styled.div`
width: 45%;
height: 100%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
const Section2= styled.div`
width: 100%;
height: 100px;
/* background-color: teal; */
color: grey;
display: flex;
justify-content: center;
align-items: center;
`;
const Logonav= styled.div`
width: 19%;
height: 100%;
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
const Navhold= styled.div`
width: 60%;
height: 100%;
/* background-color: yellow; */
display: flex;
justify-content: space-between; 
align-items: center;
`;
const Midnavs= styled.div`
width: 80%;
height: 100%;
/* background-color: yellow; */
display: flex;
justify-content: space-between; 
align-items: center; 
`;
const Select = styled.select`
font-size: 15px;
color: darkslategray;
outline: none;
border: none;
cursor: pointer;
`;
const Rightnavs= styled.div`
width: 15%;
height: 100%;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
const Rightdiv= styled.div`
width: 30%;
height: 100%;
/* background-color: yellow; */
display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;
`;
const BurgerHold = styled.div`
   background-color: beige;
   display: none;
   z-index: 1;

   /* @media screen and (max-width: 768px){
      display: flex;
   } */
`;