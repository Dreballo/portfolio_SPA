// Include React
var React = require("react");

var Projects = React.createClass({
    render: function(){
        return(

            <div className="col s12">
                <div className="row">
                    <div className="container">
                        <div className="col s4">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="../assets/images/yolo.png"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">YOLO<i className="material-icons right">more_vert</i></span>
                                    <p><a href="http://yolo-orlando.herokuapp.com/" target="#">Check out the live demo</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">YOLO<i className="material-icons right">close</i></span>
                                    <p><strong>Role:</strong> Backend Development (team)</p>
                                    <p><strong>Description:</strong> Utilizing the Open Weather & IPinfo.io APIs. This powerful app finds your location, checks your local weather, and returns a suggested event based on that local weather data.</p>
                                    <p><a target="#" href="https://github.com/adeerjustoutside/YOLO">Check out the repo</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="http://via.placeholder.com/350x150"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">YOLO<i className="material-icons right">more_vert</i></span>
                                    <p><a href="http://github.com/dreballo" target="#">Check out the repo</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">YOLO<i className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="http://via.placeholder.com/350x150"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">YOLO<i className="material-icons right">more_vert</i></span>
                                    <p><a href="http://github.com/dreballo" target="#">Check out the repo</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">YOLO<i className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Projects;