import React from "react";
import "../css/app.css"
import { About } from "./about";
import { Add } from "./add";
import { CartPopUp } from "./cart_pop_up";
import { Header } from "./header";
import { Store } from "./store";

type Props = {}
type State = { isCartPopUp: boolean }

export class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isCartPopUp: false,
        };
    }
    
    handleBuyEvent = () => {
        console.log("buy");
        this.setState({
            isCartPopUp: true,
        });
    }
    
    render(): React.ReactNode {
        return(<>
            <div className="App">
                <Header/>
                <Add/>
                <About/>
                <Store onBuyEvent={this.handleBuyEvent}/>
                {(() => {
                    if (this.state.isCartPopUp) { return(
                        <CartPopUp/>
                    )}
                    else return(
                        <></>
                    )
                })()}
            </div>
        </>)
    }
}