
var ForexRates = React.createClass({displayName: "ForexRates",
    render: function() {
        return(
            React.createElement("div", {className: "btn-group", role: "group"}, 
                React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement(Rate, {Currency: "AUD"})), 
                React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement(Rate, {Currency: "CAD"})), 
                React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement(Rate, {Currency: "EUR"})), 
                React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement(Rate, {Currency: "GBP"})), 
                React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement(Rate, {Currency: "NZD"})), 
                React.createElement("button", {type: "button", className: "btn btn-info"}, React.createElement(Rate, {Currency: "USD"}))
            )
        );
    }
});

React.render(React.createElement(ForexRates, null),document.getElementById('forex-rates-ticker'));