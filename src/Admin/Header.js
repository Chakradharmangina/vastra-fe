import React from "react";
import { styled } from "styled-components";

const HeadeWrapperr = styled.div`
height: 56px;
width: 100%;
position: sticky;
top: 0;
border-bottom: 1px solid #dec7c7;
`;


export default class Header extends React.Component{

    render(){

        return(
        <HeadeWrapperr>header</HeadeWrapperr>
        )
    }


}