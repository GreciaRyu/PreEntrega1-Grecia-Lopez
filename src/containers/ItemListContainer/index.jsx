import {useState} from "react"
import Item from "../../components/item"

const ItemListContainer =() => {
    const [listaDeCompras,setListaDeCompras] = useState([])
    const [input, setInput]= useState("")

    const addItem= ()=> { 
        if(input !==""){
            setListaDeCompras([...listaDeCompras, input])
            setInput("")
        }
    }
    const deleteItem= (nombre) => {
        let nuevalistaDeCompras= listaDeCompras.filter(producto => producto !== nombre)
        setListaDeCompras(nuevalistaDeCompras)
    }

    return(
        <div>
            <input value={input} onChange={(event) => setInput(event.target.value)}></input>
            <button onClick={addItem}>Guardar</button>
            {
                listaDeCompras.length > 0? (
                    <>
                    {listaDeCompras.map(producto => <Item nombre={producto} deleteItem={deleteItem}/>)}
                    </>
                ) : ( 
                    <p>Lista vacia</p>
                )
            }
        </div>
    )
}

export default ItemListContainer