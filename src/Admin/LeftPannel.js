import React, { Component } from 'react';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';


const NavContainer = styled.div`
width: 50px;
display: flex;
flex-direction: column;
padding: 8px;
border-right: 1px solid grey;
gap: 16px;
background : #c6d0d2;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  border-radius : 4px;
  >img{
    padding: 4px;
    width: 24px;
    height: 24px;
  }

  ${(props) =>  props.active &&  'background-color: #c5d6da'};
`;

class LeftPannel extends Component {
  state = {};
  render() {
    return (
      <NavContainer>
        { this.props.MenuItems && this.props.MenuItems.map((i) => {
            return(
                <MenuItem active = { i.label === this.props.selectedItem.label  } onClick={()=> { this.props.handleSetSelectedItem(i)}}>
                    <Tooltip title={i.label} placement='right'>
                        <img src={i.icon} alt={i.label}/>
                    </Tooltip>
                </MenuItem>
            )
        }) 
         }
      </NavContainer>
    );
  }
}

export default LeftPannel;
