import React from "react";
import Div from "@/Tags/Div";

import Link from "next/link";
import { userIcon, cartIcon } from "@/public/images";
// import userIcon from "@/public/icons/user.svg";
import Logo from "@/UiComponent/Logo";
import SearchBox from "@/UiComponent/SearchBox";
const HeaderMiddle = () => {
	return (
		<Div className="header___middle flex__center-sb w__10 ">
			{/* logo */}
			<Div className="header__logo">
				<Logo />
			</Div>
			{/* search bar  */}
			<Div className="search__container">
				<SearchBox />
			</Div>
			{/* user cart and profile  */}
			<Div className="user__actions flex__center gap__3">
				<Link href="/" className="userIcon">
					<img src={userIcon.src} alt="React Logo" />
				</Link>
				<Link href="/" className="cartIcon">
					<Div className="cart__products-count">23</Div>
					<img src={cartIcon.src} alt="React Logo" />
				</Link>
			</Div>
		</Div>
	);
};
export default HeaderMiddle;
