
var Rate = React.createClass({
    componentWillMount: function() {
        this.getForex();
    },
    getInitialState: function() {
        return {data:"...",YahooForex:"..."};
    },
    refresh: function() {
        this.getForex();
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
            <a onClick={this.refresh}>{this.props.Currency} <span className="badge">{this.state.data}</span></a>
        );
    }
});
