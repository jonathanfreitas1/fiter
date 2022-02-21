import axios from 'axios'
import { useEffect, useState } from 'react';
import Cartao from '../../component/card';
import 'antd/dist/antd.css';

function Home() {

  const [dados, setDados] = useState();
  const exemplo = [
    {nome: 'teste', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste2', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste3', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste4', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste5', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste6', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste7', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste8', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste9', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste10', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste11', cargo: 'teste', telefone: 'teste', foto: '' },
    {nome: 'teste12', cargo: 'teste', telefone: 'teste', foto: '' },
  ]

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json')
    .then(res => {
      const persons = res.data;
      setDados(persons)
    })
  },[])
  console.log(dados)
  return (
    <div>
      {dados.map(usuario => 
        <Cartao nome={usuario.nome} cargo={usuario.cargo} telefone={usuario.telefone} foto={usuario.foto}/>)
      }
      
    </div>
  );
}

export default Home;