import React from "react";
import { Card } from "./card";
import "../css/store.css"

type Props = { onBuyEvent: Function }
type State = {  }

export class Store extends React.Component<Props, State> {
    gap: number = 5;
    cards: any[];
    cards_refs: any[];
    card_base_width: number = 300
    card_wh_ratio: number = 3;
    card_width: number;
    card_height: number;
    onBuyEvent: Function;
    constructor(props) {
        super(props);
        this.onBuyEvent = props.onBuyEvent;
        
        let card_amount = Math.floor(window.innerWidth*0.9 / this.card_base_width);
        this.card_width = Math.floor((window.innerWidth*0.9-((this.gap*window.innerWidth*0.01)*(card_amount-1))) / card_amount);
        this.card_height = this.card_wh_ratio * this.card_width;
        this.cards = [];
        this.cards_refs = [];
        for (let i=0; i<60; ++i) {
            this.cards_refs.push(React.createRef())
            this.cards.push(
                <Card 
                    ref={this.cards_refs[i]}
                    width={this.card_width}
                    height={this.card_height}
                    onBuyEvent={this.handleBuyEvent}
                    key={`card_${i}`}
                />
            );
        }
        window.onresize = this.handleResize;
    }

    handleBuyEvent = () => {
        this.onBuyEvent();
    }

    handleResize = () => {
        let card_amount = Math.floor(window.innerWidth*0.9 / this.card_base_width);
        this.card_width = Math.floor((window.innerWidth*0.9-((this.gap*window.innerWidth*0.01)*(card_amount-1))) / card_amount);
        this.card_height = this.card_wh_ratio * this.card_width;
        for (let card of this.cards_refs) {
            card.current.updateSize(this.card_width, this.card_height);
        }
    }

    render(): React.ReactNode {
        return(<div 
                className="Store"
                style={{
                    gap: `${this.gap}vw`,
                }}
            >
            {this.cards.map((e, i) => {
                return (e)
            })}
        </div>)
    }
}