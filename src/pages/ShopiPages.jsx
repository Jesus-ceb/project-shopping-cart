import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"


export const ShopiPages = () => {

    const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

    const calculateTotal = () => {
        return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    }

    const handletPurchase = () => {
        const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
        Swal.fire({
            icon: 'success',
            title: 'Compra Exitosa',
            html: `<p>Has comprado: </p> <pre>${productsPurchased}</pre> `
        })
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                    {shoppingList .map(product =>(
                        <tr key={product.id}>
                            <th scope="row">{product.title}</th>
                            <td>{product.price}</td>
                            <td>
                                <button
                                className="btn btn-outline-primary"
                                onClick={ () => decrementQuantity(product.id)}
                                >-</button>
                                <button
                                className="btn btn-primary" 
                                >{product.quantity}</button>
                                <button
                                className="btn btn-outline-primary"
                                onClick={ () => incrementQuantity(product.id)}
                                >+</button>
                                
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeProduct(product.id)}
                                >Eliminar</button>
                            </td>
                        </tr>

                    ))}

<tr></tr>
                    <th><b>TOTAL: </b></th>
                    <td></td>
                    <td></td>
                    <td>${calculateTotal()}</td>
                    
                </tbody>
                </table>

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" 
                    type="button"
                    onClick={handletPurchase}
                    >Comprar</button>
                </div>  
        </>
    
    )
}
