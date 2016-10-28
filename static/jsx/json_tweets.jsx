'use strict';

var tweets_data = [{
	author:'kerem Suer',
	handle: 'kerem',
	profile_pic: 'http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg',
	time:'2m',
	reposts: 20,
	content:'Why not just declare 3 divs? I can\'t really wrap my head around what you are attempting. You need a root element, and then just map a list and create more divs.',
	media: null
},{
	author:'AxelHerrmann',
	handle: 'axel_hermann',
	profile_pic: 'http://techmgmt.pittsburghcares.org/wp-content/uploads/2013/05/profile-small.jpg',
	time:'1h',
	reposts: 49,
	content:'Thanks @Alex your answer is really helpful for a person like me who is just getting started with react. I was not aware (or perhaps I missed it) to use this map function for rendering multiple items.',
	media: null
},{
	author:'kerem Suer',
	handle: 'kerem',
	profile_pic: 'http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg',
	time:'2d',
	reposts: 131,
	content:'You are still thinking about your code in an imperative manner. React is based on a declarative programming paradigm.',
	media: null
},{
	author:'Ryan Renolds',
	handle: 'r_nolds',
	profile_pic: 'https://africaarts-eu.s3.amazonaws.com/uploads/profile/upload/559b8f1973757005d0130000/small_profile-559b8f1973757005d0130000.png',
	time:'45m',
	reposts: 71131,
	content:'There is also a Tweet button on the page that can be used to share a tweet with the quote text. So the tweet is supposed to be auto-populated with the quote text. That happens the first time, when the document is loaded.',
	media:null
},{
	author:'AxelHerrmann',
	handle: 'axel_hermann',
	profile_pic: 'http://techmgmt.pittsburghcares.org/wp-content/uploads/2013/05/profile-small.jpg',
	time:'9h',
	reposts: 64,
	content:null,
	media: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Tag_des_offenen_Denkmals_2007_U-Bahn_Berlin_Baureihe_AI_Bahnhof_Warschauer_Strasse.jpg'
},{
	author:'Adam classie',
	handle: 'ad_classie',
	profile_pic: 'https://s3.amazonaws.com/manifestly-assets/philip_small_profile.jpg',
	time:'12h',
	reposts: 164,
	content:'Thanks @Alex your answer is really helpful for a person like me who is just getting started with react. I was not aware (or perhaps I missed it) to use this map function for rendering multiple items.',
	media:null
},{
	author:'kerem Suer',
	handle: 'kerem',
	profile_pic: 'http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg',
	time:'2d',
	reposts: 131,
	content:'Can someone help with what is wrong with this code? It is probably because the tweet button needs to be updated as well after the quote update',
	media:null
},{
	author:'Ryan Renolds',
	handle: 'r_nolds',
	profile_pic: 'https://africaarts-eu.s3.amazonaws.com/uploads/profile/upload/559b8f1973757005d0130000/small_profile-559b8f1973757005d0130000.png',
	time:'7m',
	reposts: 11131,
	content:'Can someone help with what is wrong with this code? It is probably because the tweet button needs to be updated as well after the quote update',
	media:null
},{
	author:'Adam classie',
	handle: 'ad_classie',
	profile_pic: 'https://s3.amazonaws.com/manifestly-assets/philip_small_profile.jpg',
	time:'3d',
	reposts: 764,
	content:'There is also a Tweet button on the page that can be used to share a tweet with the quote text. So the tweet is supposed to be auto-populated with the quote text. That happens the first time, when the document is loaded.',
	media:null
}];



