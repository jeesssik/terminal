import React, { Component } from "react";
import NewLine from "./newLine";
import Ls from "./ls";
import Cat from "./cat";
export class Page extends Component {
	state = {
		numberOfLine: 0,
		displayEverything: [{ value: "", id: 0, displayInput: true, type: "line" }]
	};
	information = {
		name: "dummy_name",
		commands: [
			{
				id: 10,
				type: "dir"
			},
			{
				id: 11,
				type: "cat"
			},
			{
				id: 12,
				type: "clear"
			},
			{
				id: 13,
				type: "cmd"
			},
			{
				id: 20,
				type: "help"
			}
		],
		subDir: [
			{
				id: 14,
				type: "Ejercicios"
			},
			{
				id: 15,
				type: "Teoria"
			},
			{
				id: 16,
				type: "Projects"
			},
			{
				id: 17,
				type: "Socials"
			}
		],
		help: [
			{
				id: 19,
				type:`Te doy una guía de comandos básicos para que puedas navegar por la terminal:

*cmd: te muestra los comandos disponibles
*clear: limpia la pantalla
*dir: te muestra los archivos disponibles
*cat: te muestra el contenido de los archivos
*help: te muestra esta ayuda`
			}
		]
	};
	render() {
		return (
			<div className="container">
				<div className="terminal">
					<p className="prompt">
						Hola! Bienvenid@ a la consola de Info
						<br/>Para comandos básicos escribí cmd
					</p>

					{this.state.displayEverything.map(l => {
						if (l.type === "line") {
							return (
								<NewLine
									key={l.id}
									handelWhatever={this.handelWhatever}
									line={l}
									displayInput={l.displayInput}
								></NewLine>
							);
						} else if (l.type === "dir") {
							return (
								<Ls key={l.id} line={l} subDir={this.information.subDir}></Ls>
							);
						} else if (l.type === "cmd") {
							return (
								<Ls key={l.id} line={l} subDir={this.information.commands}></Ls>
							);
						} else if (l.type === "cat") {
							return <Cat key={l.id} line={l}></Cat>;
						}else if (l.type === "help") {
							return (
								<Ls key={l.id} line={l} subDir={this.information.help}></Ls>
							);
						}
					})}
				</div>
			</div>
		);
	}

	handelWhatever = (string_value, Tid) => {
		let res = string_value.split(" ");

		if (res[0] === "clear") {
			this.setState({
				numberOfLine: 0,
				displayEverything: [
					{ value: "", id: 0, displayInput: true, type: "line" }
				]
			});
		} else {
			this.setState(
				{
					displayEverything: [
						...this.state.displayEverything.filter(l => l.id !== Tid),
						//...{ value: string_value, id: Tid, displayInput: false , type: "line"}
						{
							...this.state.displayEverything.find(l => l.id === Tid),
							value: string_value,
							type: res[0]
						}
					]
				},
				() => this.handleClick()
			);
		}
	};

	// Adding a new line after a click
	handleClick = event => {
		const num = this.state.displayEverything.length + 1;
		this.setState({
			numberOfLine: this.state.numberOfLine + 1,
			displayEverything: [
				...this.state.displayEverything,
				{ value: "", id: num, displayInput: true, type: "line" }
			]
		});
	};
}

export default Page;
