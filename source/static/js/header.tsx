import React from "react";
import '../css/header.css'

export class Header extends React.Component {
    render (): React.ReactNode {return(<>
        <div className="Header">
            <div className="sponsor">
                <div className="sponsorLogo"></div>
                <h3>Резидент "МОСМЕДПАРК"</h3>
            </div>
            <div className="menu">
                <div className="menuIcon"></div>
                <div className="logo"></div>
                <a href="#"><div className="profile"></div></a>
            </div>
        </div>
    </>)}
}