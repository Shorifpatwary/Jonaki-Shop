import { useState, useEffect } from "react";
import "./Carousel.css";
const products = [
	{
		image:
			"https://imgs.search.brave.com/F2VIylGfFyL_s4aS1SYk3jJbntAtfY04seldBg97HY4/rs:fit:1200:1120:1/g:ce/aHR0cHM6Ly9teWRl/Y29yYXRpdmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA4L2tpdGNoZW4t/YXBwbGlhbmNlcy5q/cGc",
		title: "Kitchen",
	},
	{
		image:
			"https://imgs.search.brave.com/u8U3kd9dlO1XKct-ob8J3ryBgqCBTXG-2fNmgtx5MfM/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly93d3cu/c3dlZXRhbmRzYXZv/cnlieXNoaW5lZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTAvRmF2b3Jp/dGUtU21hbGwtS2l0/Y2hlbi1BcHBsaWFu/Y2VzLTIuanBn",
		title: "Kitchen",
	},

	{
		image:
			"https://imgs.search.brave.com/TIcAcAji3WsqdF9LF4qmhjjbhPlwrh-G0rG3AVmwPrk/rs:fit:1200:421:1/g:ce/aHR0cDovL3JvY2tl/dGVtYnJvaWRlcnku/Y28udWsvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMDQvQ09S/UE9SQVRFLUNMT1RI/SU5HLUJBTk5FUi1S/ZWNvdmVyZWQucG5n",
		title: "new arrivals",
	},
];

function Carousel() {
	const [current, setCurrent] = useState(0);
	const [autoplay, setAutoplay] = useState(true);

	let timeOut = null;

	const slideLeft = () => {
		setCurrent(current === 0 ? products.length - 1 : current - 1);
	};

	const slideRight = () => {
		setCurrent(current === products.length - 1 ? 0 : current + 1);
	};

	useEffect(() => {
		timeOut =
			autoplay &&
			setTimeout(() => {
				slideRight();
			}, 5000);
	});

	return (
		<div
			className="carousel"
			onMouseEnter={() => {
				setAutoplay(false);
				clearTimeout(timeOut);
			}}
			onMouseLeave={() => {
				setAutoplay(true);
			}}
		>
			<div className="carousel_wrapper">
				{products.map((image, index) => {
					return (
						<div
							key={index}
							className={
								index === current
									? "carousel_card carousel_card-active"
									: "carousel_card"
							}
						>
							<img className="card_image" src={image.image} alt={image.title} />
							<div className="card_overlay">
								<h1 className="card_title">{image.title}</h1>
							</div>
						</div>
					);
				})}

				<button onClick={slideLeft} className="carousel_arrow_left">
					&lsaquo;
				</button>
				<button onClick={slideRight} className="carousel_arrow_right">
					&rsaquo;
				</button>

				<div className="carousel_pagination">
					{products.map((_, index) => {
						return (
							<div
								className={
									index === current
										? "pagination_dot pagination_dot-active"
										: "pagination_dot"
								}
								onClick={() => setCurrent(index)}
							></div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Carousel;
