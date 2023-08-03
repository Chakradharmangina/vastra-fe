import axios from "axios";

let url = "http://localhost:8000";

export async function getallCollection(){
  return await axios.post(`${url}/category/getAllCollections`);
}

export async function addProduct(formData){
 return await axios.post(`${url}/products/add`, formData)
}
