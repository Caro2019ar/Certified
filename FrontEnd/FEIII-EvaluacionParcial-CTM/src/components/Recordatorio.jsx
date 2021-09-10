import React from "react";

class Recordatorio extends React.Component {
	render() {
		const { listaElegidas, seleccionAnterior } = this.props;

		return (
			<div className="recordatorio">
				<h3>Selección anterior: {seleccionAnterior[1]?.toUpperCase()}</h3>
				<h4>Historial de opciones elegidas:</h4>

				<ul>
					{listaElegidas.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default Recordatorio;
