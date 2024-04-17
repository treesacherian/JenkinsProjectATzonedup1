import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateCart from "./CreateCart";
import CartLogo from "../../pictures/shoppingCart.webp";
import userLogo from "../../pictures/user.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import BuyerStructure from '../BuyerStructure'

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function CartStructure(props) {
    const navigate = useNavigate();
    // const params = useParams();
    // const itemList = []
    // const [items, setItems] = useState([]);
    let disabledStatus = true;
    if (!props.itemCount) disabledStatus = false;

    function deleteCart() {
        axios.delete("http://localhost:8080/cart/delete/" + props.id);
        window.location.reload()
    }

    function displayBuyer() {
        axios.get("http://localhost:8080/cart/get/" + props.id);
        <BuyerStructure id={props.id}
            name={props.buyer}
        />
    }


    return (
        <div>





            <div className="d-inline-flex " style={{ maxWidth: "80%", margin: "40px" }}>



                <div className="card" >
                    <div className="card-body"  ></div>


                    <h3 style={{ marginLeft: "10px" }}>Cart: {props.id}<></>

                        <img alt="a small black shopping cart"style={{ width: "7%" }} src={CartLogo}></img>
                        <p className="numberCircle" style={{ display: "inline" }}>{props.itemCount}</p>
                        <></>   &nbsp; <img alt="a small basic logo, shape is outline of a persons profile " style={{ width: "5%" }} src={userLogo}></img>


                        {/* {props.buyer} */}
                        <Popup trigger=
                            {<button style={{ border: "none", color: "blue", background:"none" }}><u>{props.buyer}</u> </button>}
                            // {<a href="">{props.buyer} </a>}
                            position="right center">
                            <BuyerStructure id={props.id}
                                buyer={props.buyer}
                                tel={props.tel}
                                address={props.address}
                                userId={props.userId}
                            />
                        </Popup>

                    </h3>


                    <div className="card-text" style={{ padding: "10px" }}>

                        <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", color: "#fdc1da", backgroundColor: "#11663f" }} onClick={() => navigate("/item/" + props.id)} ><strong>Add Items</strong></button>
                        <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", paddingBottom: "5px", color: "#fdc1da", backgroundColor: "#11663f" }} onClick={() => navigate("/cart/get/" + props.id)} ><strong>Select</strong></button>
{/* // =======
//                         <button id="btn-addItem" className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", color: "#fdc1da" }} onClick={() => navigate("/item/" + props.id)} ><strong>Add Items</strong></button>
//                         <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", paddingBottom: "5px", color: "#fdc1da" }} onClick={() => navigate("/cart/get/" + props.id)} ><strong>Select</strong></button>
// >>>>>>> newDevBranch */}
                        {/* <button onClick={() => navigate("/cart/get/" + props.id)} >Update Items</button> */}
                        <button disabled={disabledStatus} className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", color: "#fdc1da", backgroundColor: "#11663f" }} onClick={() => { deleteCart() }}><strong>Delete Cart</strong></button>

                    </div>


                </div>

            </div>

            

        </div >
    );
}

export default CartStructure;