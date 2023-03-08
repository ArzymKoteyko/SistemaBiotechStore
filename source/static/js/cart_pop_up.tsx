import React from "react";
import "../css/cart_pop_up.css"

export class CartPopUp extends React.Component {
    render(): React.ReactNode {
        return(<div className="CartPopUp">
            <div className="exit"></div>
            <div className="cart">
                <form>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                </form>
            </div>
        </div>)
    }
}