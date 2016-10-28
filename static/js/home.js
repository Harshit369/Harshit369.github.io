'use strict';

var tweets = [];

//main page component
var MainContent = React.createClass({
	displayName: 'MainContent',

	/*getInitialState: function () {
 	return {};
 },*/
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'main-content' },
			React.createElement(Navbar, null),
			React.createElement(TweetRegion, null)
		);
	}
});

ReactDOM.render(React.createElement(MainContent, null), document.getElementById('page-content'));