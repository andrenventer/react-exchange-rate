
var ForexNavbar = React.createClass({displayName: "ForexNavbar",
    render: function() {
        return(
        React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top"}, 
            React.createElement("div", {className: "container"}, 
                React.createElement("div", null, 
                    React.createElement("div", {className: "navbar-header"}, 
                        React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar"}, 
                            React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"})
                        ), 
                        React.createElement("a", {className: "navbar-brand", href: "#"}, "Forex Rates")
                    ), 
                    React.createElement("div", {id: "navbar", className: "navbar-collapse collapse"}, 
                        React.createElement("ul", {className: "nav navbar-nav"}, 
                            React.createElement("li", null, React.createElement(Rate, {Currency: "AUD"})), 
                            React.createElement("li", null, React.createElement(Rate, {Currency: "CAD"})), 
                            React.createElement("li", null, React.createElement(Rate, {Currency: "EUR"})), 
                            React.createElement("li", null, React.createElement(Rate, {Currency: "GBP"})), 
                            React.createElement("li", null, React.createElement(Rate, {Currency: "NZD"})), 
                            React.createElement("li", null, React.createElement(Rate, {Currency: "USD"}))
                        )
                    )
                )
            )
        )
        );
    }
});

React.render(React.createElement(ForexNavbar, null),document.getElementById('forex-rates-header'));
