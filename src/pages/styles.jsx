

import styled, { keyframes } from "styled-components";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const GranBox = styled.div`

    width: 940px;
    margin: 10px auto;
    padding: 50px 130px;
    border: 2px solid rgba(19, 0, 0 ) ;
    background-color: rgba(19, 0, 0 ) ;
    @media screen {
      width: auto;
      height: auto;
      padding: auto;

    }

`
export const TopTitle = styled.div`

  text-align: center;
  font-family: Impact;
  font-style: normal;
  font-size: 40px;
  color: whitesmoke;


`

export const BoxTimezone = styled.div`
 
    display: inline-block;
    text-align: center;
    width: 30%;
    vertical-align: top;
    margin: 0 1.5%;
    padding: 50px 20px;
    box-sizing: border-box;
    border: 2px solid rgba(19, 0, 0 );
    border-radius: 10px;
    color: transparent;
    margin-top: 30px;
    transition: ease-in-out 0.8s; 
    &:hover
    {
    background-color: whitesmoke;
    border-color: rgba(19, 0, 0 );
    color:rgba(19, 0, 0 ) ;
    /* transform: rotate(725deg) scale(1.2); */
   
    }
    @media screen and (max-width:480px)
    {
      width: auto;
      height: auto;
      padding: auto;
      margin: 0 1.5%;
     padding: 2px 40px;
     box-sizing: border-box;
     border: 2px solid rgba(19, 0, 0 );
     border-radius: 10px;
     color: transparent;
     margin-top: 15px;
      
    }
    
`
// export const AHome = styled.a`

//   text-decoration: none;
//  	color: whitesmoke;
//     &:hover{
//     color: rgba(19,0,0);
// 		transition: all ease 0.7s;
// 		font-size: 25px;
// 	}
//   &:active{
//     color: #979797;
//     transition: all ease 0.7s;
//     font-size: 20px;
//   }
   
// `
// export const LogoImg = styled.img`

    
//     height: ${height};
//     pointer-events: none;



// `
// export const Spin = styled.div`

//     animation: ${rotate} 3s linear infinite;
//     display: inline-block;
//     margin: 10px 10px;
// `
// export const BtnStyled = styled.button`

//   margin:0px 1px 1px 0px;
//   padding: 0px; 
//   display: inline-block;
  
// `
// export const PersonalInfo = styled.div`
  
//   background-color: white;
//     color: rgba(19, 0, 0);
//     display: inline-block;
//     padding:  12px ;
//     font-family: Impact;
//     border-radius: 10px;
//     position: relative;
//     padding-left: 40px;
    

// `