import { useState} from "react";

function Exemplo()
{
    const[items, setItem] = useState([
        {id:0, title: 'Estudo Programação', isDone:false},
        {id:1, title: 'Desenvolver jogo', isDone:true},
        {id:2, title: 'Desenvolver jogo', isDone:true},
    ])
    const [filter, setFilter] = useState(null);
    // filtra entre disponibilidade
    const itemFiltrados = items.filter((item) => {
        if (filter === null) {
            return true;
        }
        return item.isDone === filter;
    })
    // excluir item da list
    const exclurItem = (numberId) =>{
        setItem((item)=> item.filter((i) => i.id != numberId))
    }
    // Alter entre positivo e negativo
    const alterComponent = (numberId) => 
    {
        setItem((alterNumber) =>
            alterNumber.map((number) => number.id === numberId ? {...number, isDone: !number.isDone} : number)
        );
    }

    return(
        <main>
            {itemFiltrados.map((i)=>(
                <div style={{display:"flex", alignItems:"center"}} key={i.id}>
                    <p>Nome: {i.title}</p>
                    <p style={{margin:10}}><strong>{i.isDone ? "Positivo": "Negativo"}</strong></p>
                <button onClick={()=> alterComponent(i.id)}>Done</button>
                <button onClick={()=> exclurItem(i.id)}>remover</button>
                </div>
            ))}
            <div>
                <button onClick={() => setFilter(null)}>mostra todos</button>
                <button onClick={() => setFilter(false)}>mostra negativos</button>
                <button onClick={() => setFilter(true)}>mostra postivos</button>
            </div>
        </main>
    )
}
export default Exemplo;