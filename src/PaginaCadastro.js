import styled from 'styled-components'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function PaginaCadastro(){
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const [nome,setNome]=useState('')
    const [confirmacao,setConfirmacao]=useState('')
    function cadastrar(){
        const promessa=axios.post("http://localhost:5000/cadastro",{nome,email,senha,confirmacao})
        promessa.then((res)=>{
            console.log(res.data);
            if(res.status==200){
                
            navigate('/');}
    })
        promessa.catch((e)=>console.log(e.response.data))
    }
    return(
        <Tela>
            <h1>MyWallet</h1>
            <div>
                <input placeholder='Nome' value={nome} onChange={(e)=>setNome(e.target.value)}/>
                <input placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder='Senha' value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                <input placeholder='Confirme a senha' value={confirmacao} onChange={(e)=>setConfirmacao(e.target.value)}/>
                
                <button onClick={cadastrar}>Cadastrar</button>
            </div>
            <Link to='/' >
                <h2>Já tem uma conta? Entre agora!</h2>
            </Link>
        </Tela>
    )
}
const Tela=styled.div`
display:flex;flex-direction:column;align-items:center;
div{display:flex;flex-direction:column;margin-top:20px;margin-bottom:20px}
button{background-color:#A328D6;border-radius:10px;border:0;height:6vh;color:white;
    font-size:18px;font-weight:700}
h2{color:white;font-size:18px;font-weight:400}
h1{color:white;font-size:40px}
input{width:90vw;border-radius:10px;border:0;height:6vh;font-size:20px;
    margin-bottom:15px}

`