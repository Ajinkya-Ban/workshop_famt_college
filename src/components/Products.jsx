import React from "react";

function Products(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            {props.btnText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Products;
