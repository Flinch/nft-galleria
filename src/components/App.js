import React from "react";
import CardanoNFT from "./Cardano/CardanoNFT";

class App extends React.Component {
	state = {
		selectedSite: "",
	};

	onSelectedSite = (site) => {
		this.setState({ selectedSite: site });
	};

	displayContent = (content) => {
		if (content == "" || content == "cardanoNFT") {
			return <CardanoNFT />;
		}
	};

	handleClose = () => this.setState({ setOpen: false });

	render() {
		return <div>{this.displayContent(this.state.selectedSite)}</div>;
	}
}

export default App;
