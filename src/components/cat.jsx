import React, { Component } from "react";
import githubLogo from "../assets/drive.png";
// import gif from "./eye-icon-animate.gif";



export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"En esta terminal te vamos a guiar en cuanto a contenidos básicos de programación, para que puedas entender mejor el mundo de la tecnología.",
		education:
			[
				{
					contenido: 'condicionales',
					liveDemo: ' asd.com',
					link: ' asd.com'
				},
				{	
					contenido: 'bucles',
					liveDemo: ' asd.com',
					link: ' asd.com'
				},
				{
					contenido: 'funciones',
					liveDemo: ' asd.com',
					link: ' asd.com'
				},
				{
					contenido: 'vectores',
					liveDemo: ' asd.com',
					link: ' asd.com'
				},
				

			],
		
		projects: [
			{
				projectName: "ejemplos de funciones",
				liveDemo: "https://github.com/shloksomani",
				link: "https://github.com/shloksomani"
			},
			{
				projectName: "ejemplos de bucles",
				liveDemo: "https://github.com/shloksomani",
				link: "https://github.com/shloksomani"
			}
		],
		social: [
			{
				platform: "Github",
				link: "https://github.com/shloksomani"
			},

			{
				platform: "Github",
				link: "https://github.com/shloksomani"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "ejercicios" || lower === "ejercicio") {
				return (
					<React.Fragment>
						{this.information.education.map(everyProject => {
							return (
								<p className="result">
									{everyProject.projectName}
									<a href={everyProject.liveDemo} target="_blank">
										{everyProject.contenido}
									</a>
									<a href={everyProject.link} target="_blank">
										<img src={githubLogo} alt="Link to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			}else if (lower === "ejemplos" || lower === "ejemplo") {
				return (
					<React.Fragment>
						{this.information.projects.map(everyProject => {
							return (
								<p className="result">
									<a href={everyProject.liveDemo} target="_blank">
									{everyProject.projectName}
									</a>
									<a href={everyProject.link} target="_blank">
										<img src={githubLogo} alt="Link to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			}
			
			else {
				return <p className="result">Opps wrong input</p>;
			}
		} else {
			return <p className="result">Opps wrong input</p>;
		}
	};
}

export default Cat;
