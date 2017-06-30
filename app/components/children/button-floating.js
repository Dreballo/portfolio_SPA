var React = require('react');

var FloatBtn = React.createClass({
    render: function (){
        return(
            <div className="fixed-action-btn">
                <a className="btn-floating pulse btn-large red">
                    <i className="large mdi mdi-dots-vertical"> </i>
                </a>
                <ul>
                    <li><a className="btn-floating red" href="/"><i className="material-icons" title="Home">home</i></a></li>
                    <li><a className="btn-floating yellow darken-1"><i className="material-icons" title="Email">email</i></a></li>
                    <li><a className="btn-floating green"><i className="material-icons" title="Resume">file_download</i></a></li>
                    <li><a className="btn-floating grey" href="http://github.com/dreballo"><i className="mdi mdi-github-face" title="Github">file_download</i></a></li>
                    <li><a className="btn-floating blue" href="http://linkedin.com/in/andreseballo" target="#"><i className="mdi mdi-linkedin" title="linkedin"> </i></a></li>
                </ul>
            </div>
        );
    }
});

module.exports = FloatBtn;

