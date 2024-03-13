import React from "react";
import Ordered from "./order/order";
import "./orders.css";

const orderedList = (props) => {
  console.log(props);
  return (
    <div >
      <div style={{marginLeft:"500px"}}>
        <h1>
          Total-Price: <strong>{props.totalPrice}</strong>69
        </h1>
      </div><br/><br/>
      <div className="Ordered">
        {props.menu.map((item) => {
          return (
            <Ordered
              name={item.name}
              price={item.price}
              description={item.description}
              key={item._id}
              delete={() => props.delete(item._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default orderedList;
