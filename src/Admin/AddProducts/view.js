import React from "react";
import { styled } from "styled-components";
import AddProductForm from "./AddForm";

const Wrapper = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
`;

const ProductTypes = styled.div`
display: flex;
gap: 10px;
align-items: center;
padding: 4px;
width: 100%;
height: 40px;
box-shadow: #8080804a 0px 1px 0px 0px;
`;

const Types = styled.div`
    font-family : 'Roboto';
    display: flex;
    border-right: 1px solid rgb(0, 120, 212);
    height: 100%;
    align-items: center;
    padding: 4px 10px;
`;

class AddItems extends React.Component{
    state = {
        Types : [ 'Sarees' , 'Shirts' , 'Legins' , 'Chudidar' ],
        sareeTypes : {
           Sarees : [ 'Designer' , 'Silk' ,  'Pattu' , 'Raw'  ]
        },
        selectedType : ''
    }
    render(){
        return(
            <Wrapper>
                <ProductTypes>
                </ProductTypes>
                <AddProductForm/>
            </Wrapper>
        )
    }
}

export default AddItems;