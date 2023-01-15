import React, { useRef } from "react";
import useToggle from "../../../tools/customHooks/useToggle";

import logo from "../../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

const nav__links = [
	{
		display: "Home",
		path: "/home",
	},
	{
		display: "Foods",
		path: "/foods",
	},
	{
		display: "Cart",
		path: "/cart",
	},
	{
		display: "Contact",
		path: "/contact",
	},
];

const Header = () => {
	const headerRef = useRef(null);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useToggle(false);

	return (
		<header className="header flex__center" ref={headerRef}>
			<div className="nav__wrapper">
				<div className="flex__center-s-b ">
					<div className="logo flex__start col__2 ">
						<div>
							<Link to="/">
								<img src={logo} alt="logo" />
							</Link>
						</div>
					</div>

					{/* ======= menu ======= */}
					<div
						className={` navigation flex__center col__7  mr__auto ${
							isMobileMenuOpen ? "show__menu" : null
						}`}
						onClick={() => setIsMobileMenuOpen()}
					>
						<div className={`menu flex__center-s-e grow flex__column-bp-3 `}>
							{nav__links.map((item, index) => (
								<NavLink
									to={item.path}
									key={index + item.path}
									className={(navClass) =>
										navClass.isActive ? "active__menu" : ""
									}
								>
									{item.display}
								</NavLink>
							))}
						</div>
					</div>

					{/* ======== nav right icons ========= */}
					<div className="nav__right flex__center-s-e col__2 col__bp-3-8 gap__1">
						{/* onClick={toggleCart} */}
						<span className="cart__icon flex__center ">
							<i className="ri-shopping-basket-line"></i>
							<span className="cart__badge flex__center">2</span>
						</span>

						<span className="user ">
							<Link to="/login">
								<i className="ri-user-line"></i>
							</Link>
						</span>

						<span
							className="mobile__menu "
							onClick={() => setIsMobileMenuOpen()}
						>
							<i className="ri-menu-line"></i>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
