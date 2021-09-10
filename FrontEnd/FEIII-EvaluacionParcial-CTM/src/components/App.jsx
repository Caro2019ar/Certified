import React, { Component } from "react";
import data from "./data.json";
import Historia from "./Historia.jsx";
import Recordatorio from "./Recordatorio.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ultimaHistoria: null,
			listaHistorias: [],
			seleccionAnterior: null,
			listaElegidas: [],
		};
	}
	componentDidMount() {
		this.setState({
			ultimaHistoria: [data[0].historia, data[0].id, data[0].opciones],
			listaHistorias: data,
			seleccionAnterior: "",
		});
	}
	handleSelectHistory = (idParam) => {
		const encontrarHistoria = data.find((historia) => historia.id === idParam);
		if (encontrarHistoria)
			this.setState({
				ultimaHistoria: [
					encontrarHistoria.historia,
					encontrarHistoria.id,
					encontrarHistoria.opciones,
				],
				seleccionAnterior: encontrarHistoria.id,
				listaElegidas: [
					...this.state.listaElegidas,
					encontrarHistoria.id.slice(1).toUpperCase(),
				],
			});
	};

	render() {
		return (
			<div className="layout">
				{this.state.ultimaHistoria && (
					<Historia
						historiaActual={this.state.ultimaHistoria}
						listaHistorias={this.state.listaHistorias}
						onSelect={this.handleSelectHistory}
					/>
				)}
				{this.state.ultimaHistoria && (
					<Recordatorio
						listaElegidas={this.state.listaElegidas}
						seleccionAnterior={this.state.seleccionAnterior}
					/>
				)}
			</div>
		);
	}
}

export default App;
