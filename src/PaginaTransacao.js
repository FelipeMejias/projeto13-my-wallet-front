import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
export default function PaginaTransacao({entrada,config}){
    const navigate=useNavigate()
    const [valor,setValor]=useState('')
    const [descricao,setDescricao]=useState('')
    function salvar(){
        const valorSinal=entrada?valor:-valor
        console.log(config)
        const promessa=axios.post("http://localhost:5000/transacoes",{valor:valorSinal,descricao},config)
        promessa.then(()=>navigate('/carteira'))
        promessa.catch((e)=>console.log(e))
    }
    return(
        <Tela>
            <Topo>
                <h1>{entrada?'Nova entrada':'Nova saída'}</h1>
            </Topo>
            
            <div>
                <input placeholder='Valor' value={valor} onChange={(e)=>setValor(e.target.value)}/>
                <input placeholder='Descrição' value={descricao} onChange={(e)=>setDescricao(e.target.value)}/>
                <button onClick={salvar}>{entrada?'Salvar entrada':'Salvar saída'}</button>
            </div>
        </Tela>
    )
}
const Tela=styled.div`
display:flex;flex-direction:column;align-items:center;height:92vh;
div{display:flex;justify-content:space-between;flex-direction:column;}
input{width:90vw;border-radius:10px;border:0;height:6vh;
    margin-bottom:15px}

    button{background-color:#A328D6;border-radius:10px;border:0;height:6vh;
        color:white;font-size:18px;font-weight:700}
h1{color:white;}
input{width:90vw;font-size:25px;}
`
const Topo=styled.div`
width:100%;
`
