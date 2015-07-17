
var ForexRates = React.createClass({
    render: function() {
        return(
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-default"><Rate Currency="AUD" /></button>
                <button type="button" className="btn btn-default"><Rate Currency="CAD" /></button>
                <button type="button" className="btn btn-default"><Rate Currency="EUR" /></button>
                <button type="button" className="btn btn-default"><Rate Currency="GBP" /></button>
                <button type="button" className="btn btn-default"><Rate Currency="NZD" /></button>
                <button type="button" className="btn btn-default"><Rate Currency="USD" /></button>
            </div>
        );
    }
});

React.render(<ForexRates />,document.getElementById('forex-rates-ticker'));
