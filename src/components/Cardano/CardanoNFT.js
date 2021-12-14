import React from "react";
import NFTListings from "./NFTListings";
import "./NFTListings.css";

class RedditPage extends React.Component {
	state = { reddit_data: [], term: "", selectedPost: [], loader: true };
	limit = 50;

	render() {
		return (
			<div className="ui container">
				<div
					style={{
						textAlign: "center",
						fontFamily:
							"Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
					}}
				>
					<h1 style={{ fontWeight: "200" }}>Le Cardano Galleria</h1>
					<p style={{ fontSize: "16px" }}>
						{" "}
						A collection of some of my favorite projects on the
						cardano blockchain. All pieces are owned, some are
						invaluable. <br /> However feel free to shoot me a
						message to inquire about the acquisition of any. <br />
						<a href="https://flinch.github.io" target="_blank">
							{" "}
							<i className="linkify icon"> </i>{" "}
						</a>
					</p>
					<hr />
				</div>
				<NFTListings className="listings-container" />
			</div>
		);
	}
}

export default RedditPage;
