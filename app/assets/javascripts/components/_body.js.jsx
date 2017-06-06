var Body = React.createClass({
	getInitialState(){
		return { items: [] }
	},

	componentDidMount(){
		console.log('Component Mounted');
		$.getJSON('/api/v1/items.json', (response) => {this.setState({ items: response }) });
	},

	handleSubmit(item) {
		console.log(item);
	},

	render() {
		return (
			<div>
				<NewItem handleSubmit={this.handleSubmit}/>
				<AllItems items={this.state.items}/>
			</div>
		)
	}
})