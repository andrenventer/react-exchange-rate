
var Rate = React.createClass({
    getInitialState: function() {
        setInterval(this.getForex,5000);
        return {data:"...",YahooForex:"http://query.yahooapis.com/"};
    },
    getForex: function() {
        var urlYahooForex = 'https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("####ZAR")&env=store://datatables.org/alltableswithkeys&format=json';
        urlYahooForex = urlYahooForex.replace(/####/,this.props.Currency);
        this.setState({YahooForex:urlYahooForex});
        $.ajax({
            url: urlYahooForex,
            dataType: "json",
            success: function (response) {
                this.setState({data:response.query.results.rate.Rate});
            }.bind(this)
        })
    },
    render: function() {
        return(
            <a href="#">{this.props.Currency} <span className="badge">{this.state.data}</span></a>
        );
    }
});