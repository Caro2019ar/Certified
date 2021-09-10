import React from "react";

class Historia extends React.Component {
	ultimaHistoria = () => {
		if (Number(this.props.historiaActual[1]?.split("", 1)) > 4) {
			return alert("FIN ");
		}
	};
	render() {
		const { historiaActual } = this.props;
		return (
			<div>
				<div>
					<h1 className="historia">{historiaActual[0]}</h1>
					<div className="opciones">
						<div className="opcion">
							<button
								className="botones"
								onClick={() => {
									let idNum = Number(historiaActual[1]?.split("", 1));
									idNum++;
									this.props.onSelect(`${idNum}a`);
									this.ultimaHistoria();
								}}
							>
								A
							</button>
							<h2>{historiaActual[2]?.a}</h2>
						</div>
						<div className="opcion">
							<button
								className="botones"
								onClick={() => {
									let idNum = Number(historiaActual[1]?.split("", 1));
									idNum++;
									this.props.onSelect(`${idNum}b`);
									this.ultimaHistoria();
								}}
							>
								B
							</button>
							<h2>{historiaActual[2]?.b}</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Historia;
