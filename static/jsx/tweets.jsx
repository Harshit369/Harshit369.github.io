"use strict";

var stats = [
	{
		class:'tweet-count',
		count_type:'tweets',
		count: 200
	},{
		class:'media-count',
		count_type:'Photos/videos',
		count: 200
	},{
		class:'following',
		count_type:'following',
		count: 200
	},{
		class:'followers',
		count_type:'followers',
		count: '1M'
	}
];

var Stat = React.createClass({
	render:function(){
		return(
			<div onClick={this.props.onclick} className={ (this.props.selected) ? "counter-item selected" :"counter-item"} >
				<div className="count-type" >{this.props.obj.count_type}</div>
				<div className="count" >{this.props.obj.count}</div>
			</div>
		);
	}
});

var TweetCounter = React.createClass({
	getInitialState: function(){
		return {
			selected: 0
		}
	},
	changeSelected: function(i){
		this.setState ({
			selected: i
		});
	},
	render: function(){
		var that = this;
		var counts = stats.map(function(object,i){
			return (
				<Stat key={i} obj={object} onclick={() => that.changeSelected(i)} selected={that.state.selected==i} />
			);
		});
		return (
			<div className="tweet-counter" >
				{counts}
			</div>
		);
	}
});

var Tweet = React.createClass({
	render: function(){
		var object = this.props.tweet;
		return (
			<div className="tweet" >
				<div className="left-pic-pane">
					<img src={object.profile_pic} />
				</div>
				<div className="right-content-pane">
					<div className="author-info" >
						<div className='author-name'>{object.author}</div>
						<div className='author-handle'>{object.handle}</div>
						<div className='author-time'>{object.time}</div>
					</div>
					{(object.content==null || object.content==='null') ? 
						<img className="tweet-media" src={object.media} />
						:	
						<div className="tweet-text" >{object.content}</div>
					}
					<div className="card-icons">
						<i className="reply"></i>
						<i className="star"></i>
						<div className="retweet">
							<i className="retweet-icon" ></i>
							{object.reposts}
						</div>
						<i className="more"></i>
						<i className="enlarge"></i>
					</div>
				</div>
			</div>
		);
	}
});

var getRandomTweets = function(count){
	var random_tweets = [];
	for(var i=0;i<count;i++){
		var num = Math.floor(Math.random() * 6);
		var single_json = tweets_data[num];
		random_tweets.push(single_json);
	}
	return random_tweets;
}

var Tweets = React.createClass({
	getInitialState: function(){
		return {
			posts: []
		};
	},
	componentWillMount: function(){
		var new_posts = getRandomTweets(5);
		console.log(new_posts);
		this.setState({
			posts: this.state.posts.splice().concat(new_posts)
		});
	},
	render: function(){
		var tweets = this.state.posts.map(function(tweet,i){
			return (
				<Tweet key={i} tweet={tweet} />
			);
		});
		return (
			<div className="tweets" >
				{tweets}
			</div>
		);
	},
	componentDidMount: function(){
		var that = this;
		/*window.addEventListener('scroll',function(){
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
				var new_posts = getRandomTweets(2);
		        that.setState ({
					posts: that.state.posts.splice().concat(new_posts)
				});
		    }
		});*/
	},
	componentWillUnmount: function(){
		window.removeEventListener('scroll');
	}
});

var TweetRegion = React.createClass({
	render: function(){
		return (
			<div className="tweet-region" >
				<TweetCounter />
				<Tweets />
			</div>
		);
	}
});