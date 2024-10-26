
import styled from 'styled-components';

export const StyledSection = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;

  &::before   
 {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(#000, #0f0, #000);
    animation: animate 5s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`

export const Title = styled.h2`
  font-size: 2em;
  color: #0f0;
  text-transform: uppercase;
  text-align: center;
`

export const SpanStyled = styled.span`
    position: relative;
    display: block;
    width: calc(6.25vw - 2px);
    height: calc(6.25vw - 2px);
    background: #181818;
    z-index: 2;
    transition: 1.5s;   


    &:hover {
      background: #0f0;
      transition: 0s;
    }

    @media (max-width: 900px) {
      width: calc(10vw - 2px);
      height: calc(10vw - 2px);
    }

  @media (max-width: 600px) {
     width: calc(20vw - 2px);
     height: calc(20vw - 2px);
  }
`

export const Signin = styled.div`
   position: absolute;
    max-width: 450px;
    width: 100%;
    background: #222;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.9);
`

export const Content = styled.div`
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 40px;
`

export const Form = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 8px;
`

export const EsqueciText  = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #fff;
    cursor: pointer;
` 

export const CriarText =  styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #0f0;
    cursor: pointer;
`