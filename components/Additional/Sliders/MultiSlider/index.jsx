import React, { Component } from "react";
import Style from "./style.module.scss";

const createList = (num) => Array.from(Array(num).keys());

const min = 0;
const max = (totalNumberOfCards, numberOfDisplayedCards) =>
	-((totalNumberOfCards / numberOfDisplayedCards) * 648) + 648;
const totalNumberOfCards = 12;

class Sliders extends Component {
	state = {
		offset: 0,
		min,
		max: max(createList(totalNumberOfCards).length, 3),
	};

	moveCarousel = (offset) => {
		console.log(this.carousel, "from carousel ");
		this.carousel.style.transform = `translateX(${offset}px)`;
	};

	handleCarouselMotion = (distance) => {
		console.log(this.state, "this.state ");
		this.setState(
			(prevState) => ({ offset: prevState.offset + distance }),
			() => {
				this.moveCarousel(this.state.offset);
			}
		);
	};

	handleClick = (direction) => {
		switch (direction) {
			case "left":
				if (Number(this.state.offset) === this.state.min) return;
				return this.handleCarouselMotion(648);
			case "right":
				if (Number(this.state.offset) === this.state.max) return;
				return this.handleCarouselMotion(-648);
			default:
				return;
		}
	};

	render() {
		return (
			<div className={`${Style.wrapper}`}>
				<ul
					className={`${Style.carousel}`}
					ref={(value) => (this.carousel = value)}
				>
					{createList(totalNumberOfCards).map((_, i) => (
						<li key={i} className={`${Style.card}`}>
							{i + 1}
						</li>
					))}
				</ul>
				<div className={`${Style.button__wrapper}`}>
					<button
						className={`${Style.button}`}
						onClick={() => this.handleClick("left")}
					>
						Left Button
					</button>
					<button
						className={`${Style.button}`}
						onClick={() => this.handleClick("right")}
					>
						Right Button
					</button>
				</div>
			</div>
		);
	}
}

export default Sliders;
