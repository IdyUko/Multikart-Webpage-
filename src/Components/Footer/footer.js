import React from "react";
import styled from "styled-components"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import {FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram} from "react-icons/fa"
import {MdLocationOn, MdPhone, MdOutlineEmail, MdFax, MdOutlineWifi} from "react-icons/md"

const Footer = () => {
    return(

        <Div>
            <Divwrap>
                <FooterTop>
                    <Left>
                        <H3>KNOW IT ALL FIRST!</H3>
                       <H4> Never Miss Anything From Multikart By Signing Up To Our Newsletter.</H4>
                    </Left>
                    <Right>
                        <Input  placeholder= "Enter your email"/>
                        <Button>SUBSCRIBE</Button>
                    </Right>
                </FooterTop>

                <FooterBottom1>
                    <Lefthold>
                        <Left1>
                            <img src= "/18.png "  alt=" logo"/>
                            <H5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </H5>
                            <Socialicons>
                                <FaFacebookF  style={{width: 18, height: 18}}/> 
                                <FaGooglePlusG  style={{width: 25, height: 25}}/> 
                                <FaTwitter  style={{width: 20, height: 20}}/> 
                                <FaInstagram style={{width: 20, height: 20}} />
                                <MdOutlineWifi  style={{width: 25, height: 25}} />
                            </Socialicons>
                        </Left1>
                        <Right1>
                            <P>MY ACCOUNT</P>
                            <Span>Womens</Span>
                            <Span>Clothing</Span>
                            <Span>Accessories</Span>
                            <Span>Featured</Span>
                        </Right1>
                    </Lefthold>

                    <Righthold>
                        <Left2>
                            <P>WHY WE CHOOSE</P>
                            <Span>Shipping & Return</Span>
                            <Span>Secure Shopping</Span>
                            <Span>Gallery</Span>
                            <Span>Affiliates</Span>
                            <Span>Contacts</Span>
                        </Left2>
                        <Right2>
                            <P>STORE INFORMATION</P>
                            <Span1><MdLocationOn/>Multikart Demo Store, <br/>Demo Store India 345-659</Span1>
                            <Span2><MdPhone/>Call Us: 123-456-7898</Span2>
                            <Span3><MdOutlineEmail/>Email Us:<U>Support@Fiot.Com</U></Span3>
                            <Span4><MdFax/>Fax: 123456</Span4>
                        </Right2>
                    </Righthold>
                </FooterBottom1>

                <FooterBottom2>
                        <Lefthold1><AiOutlineCopyrightCircle/> 2021-22 themeforest powered by pixelstrap</Lefthold1>
                        <Righthold1>
                                <img src="/visa.png" alt="" />
                                <img src="/mastercard.png" alt="" />
                                <img src="/paypal.png" alt="" />
                                <img src="/american-express.png" alt="" />
                                <img src="/discover.png" alt="" />
                        </Righthold1>
                </FooterBottom2> 

            </Divwrap>
        </Div>
    )
}

export default Footer;


const Div = styled.div`
width: 100%;
height: 75vh;
background-color: rgb(249,249,249);
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`;
const Divwrap = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: chartreuse; */
`;
const FooterTop = styled.div`
width: 100%;
height: 30%;
/* background-color: pink; */
display: flex;
justify-content: center;
border-bottom: 1px solid gainsboro;
`;
const Left = styled.div`
width: 50%;
/* background-color: plum; */
display: flex;
flex-direction: column;
justify-content: center;
border-right: 1px solid gainsboro ;
margin-top: 30px;
margin-bottom: 30px;
`;
const H3 = styled.div`
color: black;
font-size: 15px;
font-weight: bold;
`;
const H4 = styled.div`
color: gray;
font-size: 12px;
margin-top: 5px;
`;
const Right = styled.div`
width: 50%;
/* background-color: hotpink; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const Input = styled.input`
width: 50%;
height: 35px;
margin-left: 150px;
padding-left: 10px;
border: 0;
outline: none;
`;
const Button = styled.button`
width: 120px;
height: 40px;
background-color: #3e5067;
border: 1px solid #3e5067;
color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

/* padding: 13px 29px;
    color: #fff!important;
    letter-spacing: .05em;
    border: 2px solid var(--theme-deafult);
    background-image: linear-gradient(30deg,var(--theme-deafult) 50%,transparent 50%);
    background-size: 540px;
    background-repeat: no-repeat;
    background-position: 0;
    transition: background .3s ease-in-out; */
`;
const FooterBottom1 = styled.div`
width: 100%;
height: 80%;
/* background-color: purple; */
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`;
const Lefthold = styled.div`
/* background-color: plum; */
width: 50%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left1 = styled.div`
/* background-color: yellow; */
width: 60%;
height: 100%;
`;
const H5 = styled.div`
margin-top: 15px;
color: gray;
font-size: 12px;
line-height: 30px;
`;
const Socialicons= styled.div`
width: 60%;
height: auto;
/* background-color: yellow; */
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
`;
const Right1 = styled.div`
width: 30%;
height: 100%;
/* background-color: powderblue; */
margin-left: 70px;
`;
const Righthold = styled.div`
/* background-color: pink; */
width: 50%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left2 = styled.div`
/* background-color: yellowgreen; */
width: 30%;
height: 100%;
margin-left: 100px;
`;
const Right2 = styled.div`
width: 45%;
height: 100%;
/* background-color: powderblue; */
`;
const P = styled.div`
font-weight: bold;
margin-bottom: 25px;
`;
const Span = styled.div`
text-decoration: underline;
color: gray;
font-size: 14px;
line-height: 30px;
`;
const Span1 = styled.div`
width: 67%;
color: gray;
font-size: 14px;
line-height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Span2 = styled.div`
width: 57%;
color: gray;
font-size: 14px;
line-height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Span3 = styled.div`
width: 75%;
color: gray;
font-size: 14px;
line-height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Span4 = styled.div`
width: 35%;
color: gray;
font-size: 14px;
line-height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const U= styled.div`
text-decoration: underline;
`;
const FooterBottom2 = styled.div`
width: 100%;
height: 20%;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Lefthold1 = styled.div`
width: 50%;
height: 100%;
font-size: 14px;
color: gray;
/* background-color: palegreen; */
display: flex;
align-items: center;
`;
const Righthold1 = styled.div`
width: 15%;
height: 100%;
/* background-color: khaki; */
display: flex;
justify-content: space-between;
align-items: center;
`;