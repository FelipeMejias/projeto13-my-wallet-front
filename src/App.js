import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import PaginaCarteira from './PaginaCarteira'
import PaginaTransacao  from './PaginaTransacao'
import PaginaCadastro from './PaginaCadastro'
import PaginaLogin from './PaginaLogin'
import { useState } from 'react';import axios from 'axios'

function App() {
  const [entrada,setEntrada]=useState(null)
  const [config,setConfig]=useState(null)
  const [resposta,setResposta]=useState()
  const [nome,setNome]=useState('')
  function carregar(){
        
    const promessa=axios.get("http://localhost:5000/transacoes",config)
    promessa.then((res)=>{
        setResposta(res.data)
    })
    promessa.catch((e)=>console.log(e.response.data))
}
  return (
    <BrowserRouter>
    <Fundo>
    <Routes>
        <Route path='/' element={<PaginaLogin setConfig={setConfig} setNome={setNome}/>} />
        <Route path='/cadastro' element={<PaginaCadastro />} />
        <Route path='/carteira' element={<PaginaCarteira nome={nome} carregar={carregar} resposta={resposta} setEntrada={setEntrada}/>} />
        <Route path='/transacao' element={<PaginaTransacao config={config} carregar={carregar} entrada={entrada}/>} />
    </Routes>
    </Fundo>
</BrowserRouter>
  )
}

export default App;
const Fundo=styled.div`
width:100vw;height:100vh;background-color:#8C11BE;position:fixed;z-index:-1;
display:flex;flex-direction:column;justify-content:space-around;align-items:center;
`
