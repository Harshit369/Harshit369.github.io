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
				{ className: "round-icon dummy notification" },
				React.createElement("i", { className: "fa fa-bell-o" })
			),
			React.createElement(
				"div",
				{ className: "round-icon dummy messages" },
				React.createElement("i", { className: "fa fa-envelope-o" })
			),
			React.createElement(
				"div",
				{ className: "round-icon dummy tag" },
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
			React.createElement("img", { className: "profile-image", src: "static/img/nav-profile.jpg" })
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