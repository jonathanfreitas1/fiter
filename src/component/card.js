import { Card } from 'antd';


const { Meta } = Card;

export default function Cartao(props) {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
            props.foto ? 
                <img alt="example" src={props.foto} /> 
                    : 
                <img alt="example" src="https://www.tribunadeituverava.com.br/wp-content/uploads/2018/02/sem-foto.jpg" />
            }
        >                             
            <Meta title={props.nome} description={props.cargo} />
            <Meta description={"Contato: " + props.telefone} />
        </Card>
      );
}