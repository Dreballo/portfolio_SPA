// Include React
var React = require("react");

var Contact = React.createClass({
    render: function(){
        return(

            <div className="col s12 m6 grey darken-2">
                <a name="contact"> </a>

                <form action="mailto:andre.m.seballo@gmail.com" method="post" className="col s12 m6 white-text" encType="text/plain">
                    <br/>
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="white-text" htmlFor="first_name">First Name</label>
                            <input id="first_name" type="text" className="validate"/>

                        </div>
                        <div className="input-field col s6">
                            <label className="white-text" htmlFor="last_name">Last Name</label>
                            <input id="last_name" type="text" className="validate"/>

                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label className="white-text" htmlFor="contact_number">Telephone</label>
                            <input id="contact_number" type="text" className="validate"/>

                        </div>
                        <div className="input-field col s6">
                            <label className="white-text" htmlFor="Email">Email</label>
                            <input id="Email" type="text" className="validate"/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" > </textarea>
                            <label className="white-text" htmlFor="textarea1">Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center">
                            <button className="btn-large waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
});

module.exports = Contact;