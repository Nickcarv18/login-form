import styled from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled>`
    width: 100%;
    border: solid 1px #0f0;
    border-radius: 4px;
    padding: 10px;
    background: #0f0;
    color: #000;
    font-weight: 600;
    font-size: 1.35em;
    letter-spacing: 0.05em;
    cursor: pointer;

    ${({variant}) => variant !== "primary" && `
        opacity: 0.4
    `} 
`