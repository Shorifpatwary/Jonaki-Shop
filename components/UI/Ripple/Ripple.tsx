import { useEffect } from "react";

function handleClick(event) {
	const target = event.currentTarget;
	const ripple = document.createElement("span");
	ripple.classList.add("ripple-effect");
	const size = Math.max(target.offsetWidth, target.offsetHeight);
	const rect = target.getBoundingClientRect();
	const x = event.clientX - rect.left - size / 2;
	const y = event.clientY - rect.top - size / 2;
	ripple.style.width = `${size}px`;
	ripple.style.height = `${size}px`;
	ripple.style.left = `${x}px`;
	ripple.style.top = `${y}px`;
	target.appendChild(ripple);
	setTimeout(() => target.removeChild(ripple), 500);
}

export default function Ripple() {
	useEffect(() => {
		document.querySelectorAll(".ripple").forEach((el) => {
			el.addEventListener("click", handleClick);
		});

		return () => {
			document.querySelectorAll(".ripple").forEach((el) => {
				el.removeEventListener("click", handleClick);
			});
		};
	}, []);

	return null;
}
