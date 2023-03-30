import styled from 'styled-components';

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(9, 9, 9, 0.51);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.5px);
-webkit-backdrop-filter: blur(5.5px);
`

export const ModalWindow = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: fit-content;
height: fit-content;
padding: 20px;
border-radius: 5px;
background: rgb(0,0,0);
  background: -moz-linear-gradient(320deg, rgba(0,0,0,1) 0%, rgba(0,18,246,1) 100%);
  background: -webkit-linear-gradient(320deg, rgba(0,0,0,1) 0%, rgba(0,18,246,1) 100%);
  background: linear-gradient(320deg, rgba(0,0,0,1) 0%, rgba(0,18,246,1) 100%);
`;
