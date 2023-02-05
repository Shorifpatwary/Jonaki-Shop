import React, { useContext } from "react";
import { MobileMenu } from "@/layoutComponent/Mega-Header";

import { HeaderData } from "..";
import NavLinks from "@/UiComponent/Navlinks";
const HeaderBottom = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useContext(MobileMenu);
	const headerData = useContext(HeaderData);
	const pages = headerData.pages;
	return (
		<>
			<nav
				className={`navbar header__bottom flex__center-sb gap__3 w__10 ${
					isMobileMenuOpen ? "hide__for-mobile" : ""
				}`}
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
			>
				{/* all category */}
				{/* <div className="category flex__center gap__2 col__2 ">
				<div className="categoriesIcon">
					<img src={categoryBurgerIcon.src} alt="categories icon " />
				</div>

				<div className="categoriesText">
					<span>All Categories</span>{" "}
					<img src={bottomArrow.src} alt="bottom arrow icon" />
				</div>
				<Categories /> 
			</div> */}
				<div className="page__links col__8">
					<NavLinks
						pages={pages}
						ulClassName="header__links"
						liClassName="header__link_item"
					/>
				</div>
			</nav>
		</>
	);
};

export default HeaderBottom;
