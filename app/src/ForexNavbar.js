
var ForexNavbar = React.createClass({
    render: function() {
        return(
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Forex Rates</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Rate Currency="AUD" /></li>
                            <li><Rate Currency="CAD" /></li>
                            <li><Rate Currency="EUR" /></li>
                            <li><Rate Currency="GBP" /></li>
                            <li><Rate Currency="NZD" /></li>
                            <li><Rate Currency="USD" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        );
    }
});

React.render(<ForexNavbar />,document.getElementById('forex-rates-header'));
