import React, { Component } from 'react';
import { MenuItem, Select } from '@mui/material';
import { styled } from "styled-components";
import {  addProduct, getallCollection } from "../../services/Service"

const MySelect = styled(Select)`
  height: 34px;
  width : 200px !important;
  background-color: white;
  .MuiSelect-select p{
    color: var(--light-theme-neutral-charcoal-black-60, #4A5264);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    letter-spacing: 0.014px;
  }
`;

const AddProduct = styled.form`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 12px;
`;


class AddProductForm extends Component {
    state = {
      name: '',
      originalPrice: '',
      discountPrice: '',
      description: '',
      collectionType: {},
      type: 'Saree',
      selectedType : '',
      collectionTypes : [], 
      numOfItems : '',
      imgFile : '',
    }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('originalPrice', this.state.originalPrice);
    formData.append('discountPrice', this.state.discountPrice);
    formData.append('description', this.state.description);
    formData.append('collectionType', this.state.collectionType.label);
    formData.append('type', this.state.type);
    formData.append('collectionId', this.state.collectionType.id);
    formData.append('image', this.state.imgFile);
    formData.append('totalitems', this.state.numOfItems);
    addProduct(formData).then((res)=>{
      console.log("SADs" , res)
      window.alert(res.data.message)
    }).catch((err)=>{
      console.log(err)
    })
  };

  isFormValid = () => {
    const { name, originalPrice, discountPrice, description, collectionType, type } = this.state;
    return name && originalPrice && discountPrice && description && collectionType && type;
  };

  componentDidMount(){
    getallCollection().then((res)=>{
      this.setState({ collectionTypes : res.data?.data })
    }).catch((err)=>{})
  }

  componentDidUpdate(prevProps , prevState){

  }

  handleSelectedCollection = (e) => {
    this.setState({ collectionType : e.target.value })
  }

  render() {
    const { name, originalPrice, discountPrice, description, collectionType, type , numOfItems } = this.state;
    return (
      <AddProduct onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="originalPrice">Original Price:</label>
          <input
            type="number"
            id="originalPrice"
            name="originalPrice"
            value={originalPrice}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="discountPrice">Discount Price:</label>
          <input
            type="number"
            id="discountPrice"
            name="discountPrice"
            value={discountPrice}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label >Collection Type:</label>
          <MySelect
          size="small"
          fullWidth
          id="connectionType"
          name="connectionType"
          className='collectionType'
          value={ this.state.collectionType?.label }
          onChange={ this.handleSelectedCollection }
          >
          { this.state.collectionTypes.map((item) => (
          <MenuItem className="dataSources" value = {{ label : item.collectionType , id : item.id }} >{item.collectionType}</MenuItem>
          ))}
        </MySelect>
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={(e) => this.setState({ imgFile : e.target.files[0] }) }/>
        </div>
        <div>
          <label htmlFor="numOfItems">Total Items:</label>
          <input type="text" value = { numOfItems } id="numOfItems" name="numOfItems" onChange={(e) =>{ this.setState({ numOfItems : e.target.value }) }} />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <input type="text" disabled value = "Saree" id="type" name="type" />
        </div>
        <button type="submit" >
          Submit
        </button>
      </AddProduct>
    );
  }
}

export default AddProductForm;
