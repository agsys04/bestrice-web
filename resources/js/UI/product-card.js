import React from 'react'

function ProductCard(props) {
  return (
      <div className="card h-100">
          <img src={props.image} className="card-img-top" alt={props.title} height={200} />
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
          </div>
      </div>
  );
}

export default ProductCard