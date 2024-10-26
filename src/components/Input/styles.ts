import styled from 'styled-components';

export const InputBox = styled.div`
    width: 100%;
    background:#333;

    display:flex;
    align-items: center;
    margin-bottom: 8px;
    border-radius: 4px;
    
    padding: 10px 10px 7.5px;
`
    
export const IconContainer = styled.div`
    color: #fff;
    margin-right: 10px;
`

export const InputText = styled.input`
    position: relative;
    width: 100%;
    background:#333;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    font-size: 1em;    
`

export const ErrorText  = styled.p`
    font-size: 12px;
    margin-bottom: 8px;
    color: #FF2136;
` 