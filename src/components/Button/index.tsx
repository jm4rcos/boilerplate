import React from "react";
import styled from 'styled-components';
import { colors } from '../../themes';

export const Button = () => {
    return <StyledButton>Button</StyledButton>
    
}

const StyledButton = styled.button`
        padding: 10px 16px;
        border-radius: .45em;
        border: none;
        outline: none;
        cursor: pointer;
        /* font-weight: bold; */
        background: ${colors.primary};
        color: ${colors.light};
        
        /* &:hover {
            background-color: ;
        } */
    `;