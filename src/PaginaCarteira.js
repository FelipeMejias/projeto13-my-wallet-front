import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
export default function PaginaCarteira({setEntrada,carregar,resposta,nome}){
    const navigate=useNavigate()
    function calcularSaldo(){
        if(!resposta){return 0}
        let c=0
        for(let k=0;k<resposta.length;k++){
            c+=parseInt(resposta[k].valor)
        }return c
    }
    const saldo=calcularSaldo()
    useEffect(()=>carregar(),[])
    return(
        <Tela>
            <Topo>
                <h1>Olá, {nome}</h1>
                <button onClick={()=>{navigate('/');window.location.reload(true)}}><ion-icon  name="log-out-outline"></ion-icon></button>
            </Topo>
            <Janela>
                <div className='organizaCarteira lista'>
                <ul>{resposta?.map((obj)=><p><small>{obj.dia}</small></p>)}</ul>
                <ul>{resposta?.map((obj)=><p>{obj.descricao}</p>)}</ul>
                <ul className='valor'>{resposta?.map((obj)=><P cor={obj.valor>0?'green':'red'}>{obj.valor}</P>)}</ul>
                </div>
                <div className='organizaCarteira saldo'>
                    <p><strong>SALDO:</strong></p>
                    <P cor={saldo>0?'green':'red'}>{saldo}</P>
                </div>
            </Janela>
            <Botoes>
                <button onClick={()=>{setEntrada(true);navigate('/transacao')}}>Nova Entrada</button>
                <button onClick={()=>{setEntrada(false);navigate('/transacao')}}>Nova Saida</button>
            </Botoes>
        </Tela>
    )
}
const Tela=styled.div`
display:flex;flex-direction:column;align-items:center;
div{display:flex;justify-content:space-between;width:90vw}
button{background-color:#8C11BE;border:0;}
button ion-icon{font-size:40px;color:white}
h1{color:white;}
`
const Topo=styled.div`
display:flex;align-items:center;height:12vh;

`
const Botoes=styled.div`
display:flex;align-items:center;justify-content:space-between;height:20vh;
button{width:43vw;height:14vh;color:white;font-size:20px;font-weight:700;
    background-color:#A328D6;border:0;border-radius:10px;}
`
const Janela=styled.div`
background-color:white;width:90vw;height:68vh;border-radius:10px;
padding-right:20px;padding-top:10px;padding-left:10px;padding-bottom:10px;
box-sizing:border-box;display:flex;flex-direction:column;
p{font-size:20px}
small{color:gray}
ul{display:flex;flex-direction:column}
.valor{align-items:flex-end}
.lista{height:85%;overflow:hidden;overflow-y:scroll}
.organizaCarteira{display:flex;width:97%;justify-content:space-between}
.saldo{margin-left:20px}
`
const P=styled.p`
font-size:18px;color:${props=>props.cor}
`