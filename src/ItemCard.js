import React from 'react'

function ItemCard(props) {
    console.log(props);
  return (
  
   
    <div className="col-md-4 mt-4 mt-sm-0 card-container">
      <div className="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
        <div className="card-body p-4 py-0 h-xs-440p">
          <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">{props.itemId}</h5>

          <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">{props.name}</h5>
          <p className="price">${props.price}</p>
        </div>
        <p className="btn w-100 px-4 mx-auto">
          <input type="submit" className="btn btn-dark btn-lg w-100" name="add-button" value="Buy Now" />
        </p>
      </div>
      
    </div>

   
    
 

  )
}

export default ItemCard