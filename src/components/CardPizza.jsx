import React from 'react'
import { formatPrice } from './formatPrice'

const CardPizza = (props) => {
    return (
        <div>
            <div className="card mt-3" >
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <hr/>
                    <p class="card-text text-center"  ><strong>Ingredientes:</strong></p>
                    <p className="card-text text-center text-muted" style={{ fontSize: '0.8em' }}>
                <span style={{ fontSize: '1.2em' }}>🍕</span>
                {props.ingredients.join(", ")}
            </p>
                    <hr/>
                    <h5 className="card-text text-center"><strong>Precio: {formatPrice(props.price)}</strong></h5>
                    <hr/>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-light">
                            <i className="bi bi-eye"></i> Ver Más
                        </button>
                        <button className="btn btn-dark">
                            <i className="bi bi-cart-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPizza