var Rate = React.createClass({displayName: "Rate",
    componentWillMount: function () {
        this.getForex();
    },
    getInitialState: function () {
        return {data: "...", YahooForex: "...", valueColor: "fresh"};
    },
    refresh: function () {
        this.getForex();
    },
    changeValueColorToStale: function () {
        this.setState({valueColor: "stale"});
    },
    changeValueColorToFresh: function () {
        this.setState({valueColor: "fresh"});
    },
    startCountDownToStale: function () {
        setTimeout(this.changeValueColorToStale, 15000);
    },
    getForex: function () {
        var urlYahooForex = 'https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("####ZAR")&env=store://datatables.org/alltableswithkeys&format=json';
        urlYahooForex = urlYahooForex.replace(/####/, this.props.Currency);
        this.setState({YahooForex: urlYahooForex});
        $.ajax({
            url: urlYahooForex,
            dataType: "json",
            success: function (response) {
                this.setState({data: response.query.results.rate.Rate});
                this.changeValueColorToFresh();
                this.startCountDownToStale();
            }.bind(this)
        })
    },
    render: function () {
        return (
            React.createElement("a", {onClick: this.refresh}, this.props.Currency, " ", React.createElement("span", {
                className: this.state.valueColor}, this.state.data))
        );
    }
});
