// Include React
var React = require("react");

var Navbar = React.createClass({
    render: function(){
        return(
        <div className="navbar-fixed">
            <nav className="black" role="navigation">
                <div className="container">
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">About</a></li>
                            <li><a href="collapsible.html">Projects</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" id="button-collapse">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
});

module.exports = Navbar;