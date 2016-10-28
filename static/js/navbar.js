'use strict';

var Search = React.createClass({
	displayName: "Search",

	render: function render() {
		return React.createElement("input", { placeholder: "Search", id: "search-input", type: "text" });
	}
});

var LeftNav = React.createClass({
	displayName: "LeftNav",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "left-nav" },
			React.createElement(
				"div",
				{ className: "round-icon add-tweet" },
				React.createElement("i", { className: "fa fa-pencil" })
			),
			React.createElement("div", { className: "line" }),
			React.createElement(
				"div",
				{ className: "round-icon notification" },
				React.createElement("i", { className: "fa fa-bell-o" })
			),
			React.createElement(
				"div",
				{ className: "round-icon messages" },
				React.createElement("i", { className: "fa fa-envelope-o" })
			),
			React.createElement(
				"div",
				{ className: "round-icon tag" },
				React.createElement("i", { className: "fa fa-hashtag" })
			)
		);
	}
});

var Logo = React.createClass({
	displayName: "Logo",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "logo" },
			React.createElement("i", { className: "fa fa-twitter" })
		);
	}
});

var RightNav = React.createClass({
	displayName: "RightNav",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "right-nav" },
			React.createElement(Search, null),
			React.createElement("img", { className: "profile-image", src: "https://dealermesh.com/images/profile/michael-asmar.jpg" })
		);
	}
});

//navbar componet
var Navbar = React.createClass({
	displayName: "Navbar",

	/*getInitialState: function () {
 	return {};
 },*/
	render: function render() {
		return React.createElement(
			"div",
			{ className: "navbar" },
			React.createElement(LeftNav, null),
			React.createElement(Logo, null),
			React.createElement(RightNav, null)
		);
	}
});