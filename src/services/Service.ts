import axios , { Axios } from 'axios';

//permite armazenar o endereço da api
export const api = axios.create({
  baseURL:'https://bloggeneration.herokuapp.com'
})

export const login = async(url:any,dados :any, setDado :any) =>{
  const resposta = await api.post(url, dados)
  setDado(resposta.data)
}