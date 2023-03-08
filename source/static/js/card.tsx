import React from "react";
import "../css/card.css";

type Props = { width:number, height:number, onBuyEvent: Function }
type State = { width: number, height:number }
export class Card extends React.Component<Props, State> {
    price: number = 1599;
    name: String = "Генетическое исследование VIRAL";
    dspt: String = "Ответ иммунитета при вирусной инфекции.";
    onBuyEvent: Function;
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
        }
        this.onBuyEvent = props.onBuyEvent;
    }
    updateSize = (new_width:number, new_height: number): void => {
        this.setState({
            width: new_width,
            height: new_height,
        })
    }
    handleBuyMouseClick = () => {
        this.onBuyEvent();
    }
    render(): React.ReactNode {
        return(<div 
            className="Card"
            style={{
                width: this.state.width,
                height: this.state.height,
            }}
        >
            <div 
                className="productImage"
                style={{
                    width: this.state.width,
                    height: this.state.width,
                }}
            ></div>
            <h3>{`${this.price} р.`}</h3>
            <h2>{this.name}</h2>
            <h4>{this.dspt}</h4>
            
            <div 
                className="more"
                style={{
                    width: this.state.width,
                }}
            >
                <h5>Подробнее</h5>
            </div>
            <div 
                className="buy"
                onClick={this.handleBuyMouseClick}
                style={{
                    width: this.state.width,
                }}
            >
                <h5>Купить</h5> 
            </div>
            
        </div>)
    }
}