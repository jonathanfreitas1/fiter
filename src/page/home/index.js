import axios from 'axios'
import { useEffect, useState } from 'react';

function Home() {

  const [dados, setDados] = useState();

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json')
    .then(res => {
      const persons = res.data;
      setDados(persons)
    })
  },[])
  console.log(dados)
  return (
    <div className="App">
      <div>
          {dados.map(usuario => <h1 key={usuario.nome}>{usuario.nome}</h1>)}
      </div>
    </div>
  );
}

export default Home;