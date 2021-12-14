import React from "react";

class RedditPost extends React.Component {
	state = { spans: 10, showModal: false };

	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
		this.setState({ showModal: false });
	}

	componentDidMount = () => {
		this.imageRef.current.addEventListener("load", this.setSpans);
	};

	removeAmp = (string) => {
		string = string.replace(/amp;s/gi, "s");
		return string;
	};

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 12);
		if (spans > 10 && spans < 16) {
			this.setState({ spans: 16 });
		} else {
			const adjFactor = Math.ceil(0.0322 * height - 6) - 1;
			this.setState({ spans: spans - adjFactor });
		}
	};

	truncate = (str) => {
		return str.length > 80 ? str.substring(0, 50) + ".." : str;
	};

	onClick = () => {
		this.setState({ showModal: true });

		if (this.state.showModal) {
			console.log("Hello");
		}
	};

	render() {
		const { name, description, img, pool, edition, artwork } = this.props;
		return (
			<div
				className="ui card"
				style={{ gridRowEnd: `span ${this.state.spans}` }}
				onClick={() => {
					this.onClick();
				}}
			>
				{console.log(pool)}
				<div className="image">
					<img
						ref={this.imageRef}
						src={img}
						alt=""
						class="reddit-list"
					/>
				</div>
				<div class="content">
					<a
						class="header"
						style={{ fontSize: "16px", textAlign: "center" }}
					>
						{name}
					</a>
					<div class="description" style={{ textAlign: "center" }}>
						Artwork: {artwork}
					</div>
					<div class="meta" style={{ textAlign: "center" }}>
						<small style={{ color: "#000000AD" }}>
							{" "}
							Edition size: {edition}
						</small>
					</div>
					<div class="meta" style={{ textAlign: "center" }}>
						<span>
							<a href={pool} target="_blank">
								{" "}
								<i className="linkify icon"> </i>{" "}
							</a>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default RedditPost;
