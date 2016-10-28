'use strict';
var tweets = [];

//main page component
var MainContent = React.createClass({
	/*getInitialState: function () {
		return {};
	},*/
	render: function(){
		return (
			<div className="main-content" >
				<Navbar />
				<TweetRegion />
			</div>
		);
	}
});

ReactDOM.render(<MainContent />,document.getElementById('page-content'));