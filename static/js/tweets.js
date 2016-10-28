"use strict";

var stats = [{
	class: 'tweet-count',
	count_type: 'tweets',
	count: 200
}, {
	class: 'media-count',
	count_type: 'Photos/videos',
	count: 200
}, {
	class: 'following',
	count_type: 'following',
	count: 200
}, {
	class: 'followers',
	count_type: 'followers',
	count: '1M'
}];

var Stat = React.createClass({
	displayName: 'Stat',

	render: function render() {
		return React.createElement(
			'div',
			{ onClick: this.props.onclick, className: this.props.selected ? "counter-item selected" : "counter-item" },
			React.createElement(
				'div',
				{ className: 'count-type' },
				this.props.obj.count_type
			),
			React.createElement(
				'div',
				{ className: 'count' },
				this.props.obj.count
			)
		);
	}
});

var TweetCounter = React.createClass({
	displayName: 'TweetCounter',

	getInitialState: function getInitialState() {
		return {
			selected: 0
		};
	},
	changeSelected: function changeSelected(i) {
		this.setState({
			selected: i
		});
	},
	render: function render() {
		var that = this;
		var counts = stats.map(function (object, i) {
			return React.createElement(Stat, { key: i, obj: object, onclick: function onclick() {
					return that.changeSelected(i);
				}, selected: that.state.selected == i });
		});
		return React.createElement(
			'div',
			{ className: 'tweet-counter' },
			counts
		);
	}
});

var Tweet = React.createClass({
	displayName: 'Tweet',

	render: function render() {
		var object = this.props.tweet;
		return React.createElement(
			'div',
			{ className: 'tweet' },
			React.createElement(
				'div',
				{ className: 'left-pic-pane' },
				React.createElement('img', { src: object.profile_pic })
			),
			React.createElement(
				'div',
				{ className: 'right-content-pane' },
				React.createElement(
					'div',
					{ className: 'author-info' },
					React.createElement(
						'div',
						{ className: 'author-name' },
						object.author
					),
					React.createElement(
						'div',
						{ className: 'author-handle' },
						'@',
						object.handle
					),
					React.createElement(
						'div',
						{ className: 'author-time' },
						object.time
					)
				),
				object.content == null || object.content === 'null' ? React.createElement('img', { className: 'tweet-media', src: object.media }) : React.createElement(
					'div',
					{ className: 'tweet-text' },
					object.content
				),
				React.createElement(
					'div',
					{ className: 'card-icons' },
					React.createElement('i', { className: 'param reply fa fa-share' }),
					React.createElement('i', { className: ' param star fa fa-star' }),
					React.createElement(
						'div',
						{ className: 'param retweet' },
						React.createElement('i', { className: 'retweet-icon fa fa-refresh' }),
						object.reposts
					),
					React.createElement('i', { className: 'param more fa fa-ellipsis-h' }),
					React.createElement('i', { className: 'param expand fa fa-expand' })
				)
			)
		);
	}
});

var getRandomTweets = function getRandomTweets(count) {
	var random_tweets = [];
	for (var i = 0; i < count; i++) {
		var num = Math.floor(Math.random() * 6);
		var single_json = tweets_data[num];
		random_tweets.push(single_json);
	}
	return random_tweets;
};

var Tweets = React.createClass({
	displayName: 'Tweets',

	getInitialState: function getInitialState() {
		return {
			posts: []
		};
	},
	componentWillMount: function componentWillMount() {
		var new_posts = getRandomTweets(5);
		console.log(new_posts);
		this.setState({
			posts: this.state.posts.splice().concat(new_posts)
		});
	},
	render: function render() {
		var tweets = this.state.posts.map(function (tweet, i) {
			return React.createElement(Tweet, { key: i, tweet: tweet });
		});
		return React.createElement(
			'div',
			{ className: 'tweets' },
			tweets
		);
	},
	componentDidMount: function componentDidMount() {
		var that = this;
		window.addEventListener('scroll', function () {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				var new_posts = getRandomTweets(2);
				that.setState({
					posts: that.state.posts.concat(new_posts)
				});
			}
		});
	},
	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('scroll');
	}
});

var TweetRegion = React.createClass({
	displayName: 'TweetRegion',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'tweet-region' },
			React.createElement(TweetCounter, null),
			React.createElement(Tweets, null)
		);
	}
});