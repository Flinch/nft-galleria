import React from "react";
import RedditListings from "./RedditListings";
import RedditLogo from "./images/reddit.png";
import KnittieLogo from "./images/knittie.png";
import "./RedditListings.css";
import Loader from "../Loader";

class RedditPage extends React.Component {
	state = { reddit_data: [], term: "", selectedPost: [], loader: true };
	limit = 50;

	setLoader = (loader) => {
		if (loader) {
			return <Loader message="Loading Reddit Home" />;
		}

		setTimeout(() => {
			this.setState((loader: false));
		}, 5000);
	};

	render() {
		return (
			<div className="ui container">
				{this.setLoader()}
				<RedditListings className="listings-container" />
			</div>
		);
	}
}

export default RedditPage;
