import React from "react";
import { styled } from "styled-components";
import LeftPannel from "./LeftPannel";
import Header from "./Header";
import MenUIcon from "../assets/LeftPannel/MenuIcon.svg";
import AddProduct from "../assets/LeftPannel/AddProduct.svg";
import Sales from "../assets/LeftPannel/Sales.svg";
import Upload from "../assets/LeftPannel/upload.svg";
import AddProductForm from "./AddProducts/AddForm";
import AddItems from "./AddProducts/view";

const Wrapper = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
`;

const BodyWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
gap: 16px;
height: 100%;
`;

const BodyContetnt =  styled.div`
display: flex;
width: 100%;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin: 12px 8px;
`;

class AdminPannel extends React.Component{
    state = {
        MenuItems : [
            { label : 'Add Items' , icon : AddProduct },
            { label : 'Sales' , icon : Sales },
            { label : 'Upload Data' , icon : Upload }],
        selectedItem : {}
    }

    componentDidMount(){
        this.setState({  selectedItem : this.state.MenuItems[0] })
      }

    handleSetSelectedItem = ( item ) => {
        this.setState({ selectedItem : item })
    }

    render(){

        return(
        <Wrapper>
            <Header/>
            <BodyWrapper>
                <LeftPannel
                MenuItems = { this.state.MenuItems }
                selectedItem = { this.state.selectedItem }
                handleSetSelectedItem = { this.handleSetSelectedItem }
                />
                <BodyContetnt>
                        <AddItems/>
                </BodyContetnt>
            </BodyWrapper>
        </Wrapper>
        )
    }
}


export default AdminPannel;