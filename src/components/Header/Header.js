import React from "react";
import "./Header.css"

const Header = props => (
    <div className="bg-info border rounded">
        <nav className="navbar navbar-light row justify-cotent-md-center border border-bottom" id="override">
            <span className="navbar-band h3 col col-lg-4 text-center border-right text-white">Clicky Game</span>
            <span className="navbar-band h3 col col-lg-4 text-center border-right text-white">Click an Image to begin!</span>
            <span className="navbar-band h3 col col-lg-4 text-center text-white">Score:{props.state.scores}|Top Score:{props.state.highscores}</span>
        </nav>
        <div className="jumbotron jumbotron-fluid middleSection rounded">
            <div className="container">
                <div className="rows text-white text-center">
                    <h1>This is the clicky game!</h1>
                </div>
            </div>
        </div>
    </div>
);

export default Header;