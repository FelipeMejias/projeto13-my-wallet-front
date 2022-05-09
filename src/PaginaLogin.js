import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
export default function PaginaLogin({setConfig,setNome}){
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    function logar(){
        const promessa=axios.post("http://localhost:5000/login",{email,senha})
        promessa.then((res)=>{
            setConfig({
                headers: {'auth': `Bearer ${res.data.token}`}
            })
            setNome(res.data.nome)
            navigate('/carteira')
        
        })
        promessa.catch()
    }
    return(
        <Tela>
            <h1>MyWallet</h1>
            <div>
                <input placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder='Senha' value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                <button onClick={logar}>Entrar</button>
            </div>
            <Link to='/cadastro' >
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
        </Tela>
    )
}
const Tela=styled.div`
display:flex;flex-direction:column;align-items:center;
div{display:flex;flex-direction:column;margin-top:20px;margin-bottom:20px}

h2{color:white;font-size:18px;font-weight:400}
h1{color:white;font-size:40px}

input{width:90vw;border-radius:10px;border:0;height:6vh;font-size:20px;
    margin-bottom:15px}

    button{background-color:#A328D6;border-radius:10px;border:0;height:6vh;
        color:white;font-size:18px;font-weight:700}
`
