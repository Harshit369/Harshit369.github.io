'use strict'

var Search = React.createClass({
	render: function(){
		return (
			<input placeholder="Search" id="search-input" type="text" ></input>
		);
	}
});

var LeftNav = React.createClass({
	render: function(){
		return (
			<div className="left-nav" >
				<div className="round-icon add-tweet" ><i className="fa fa-pencil"></i></div>
				<div className="line"></div>
				<div className="round-icon dummy notification"><i className="fa fa-bell-o" ></i></div>
				<div className="round-icon dummy messages" ><i className="fa fa-envelope-o" ></i></div>
				<div className="round-icon dummy tag" ><i className="fa fa-hashtag" ></i></div>
			</div>
		);
	}
});

var Logo = React.createClass({
	render: function(){
		return (
			<div className="logo">
				<i className="fa fa-twitter"></i>
			</div>
		);
	}
});

var RightNav = React.createClass({
	render: function(){
		return (
			<div className="right-nav">
				<Search />
				<img className="profile-image" src="static/img/nav-profile.jpg" />
			</div>
		);
	}
});

//navbar componet
var Navbar = React.createClass({
	/*getInitialState: function () {
		return {};
	},*/
	render: function(){
		return (
			<div className="navbar" >
				<LeftNav />
				<Logo />
				<RightNav />
			</div>
		);
	}
});
