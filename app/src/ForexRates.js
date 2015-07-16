
var ForexRates = React.createClass({
    render: function() {
        return(
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-info"><Rate Currency="AUD" /></button>
                <button type="button" className="btn btn-info"><Rate Currency="CAD" /></button>
                <button type="button" className="btn btn-info"><Rate Currency="EUR" /></button>
                <button type="button" className="btn btn-info"><Rate Currency="GBP" /></button>
                <button type="button" className="btn btn-info"><Rate Currency="NZD" /></button>
                <button type="button" className="btn btn-info"><Rate Currency="USD" /></button>
            </div>
        );
    }
});

React.render(<ForexRates />,document.getElementById('forex-rates-ticker'));