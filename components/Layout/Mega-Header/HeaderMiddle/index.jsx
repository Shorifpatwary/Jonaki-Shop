import React, { useContext } from "react";
import { MobileMenu } from "@/layoutComponent/Mega-Header";
import { CartContext } from "@/tools/Context/cartProvider";
import Div from "@/Tags/Div";

import Link from "next/link";
import { userIcon, cartIcon, mobileMenu } from "@/public/images";
import Logo from "../../../UI/Logo";
import SearchBox from "@/UiComponent/SearchBox";
const HeaderMiddle = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useContext(MobileMenu);
	const { cartData } = useContext(CartContext);

	return (
		<Div className="header___middle flex__center-sb w__10 gap__3 wrap__bp4">
			{/* logo */}
			<Div className="header__logo col__1">
				<Logo />
			</Div>
			{/* search bar  */}
			<Div className="search__container col__5 col__bp4-9">
				<SearchBox />
			</Div>
			{/* user cart and profile  */}
			<Div className="user__actions flex__end gap__2 col__1 ">
				<Link href="/profile" className="userIcon">
					<img src={userIcon.src} alt="React Logo" />
				</Link>
				<Link href="/cart" className="cartIcon">
					<img src={cartIcon.src} alt="React Logo" />
					<span className="cart__products-count">
						{cartData?.total_items < 10
							? "0" + cartData?.total_items
							: cartData?.total_items}
					</span>
				</Link>
			</Div>
			{/* mobile menu icon  */}
			<Div className={`mobile__hamburger hide  flex__column-center`}>
				<img
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					src={mobileMenu.src}
					alt="mobile menu icon "
					className={` ${isMobileMenuOpen ? "rotate__180" : ""}`}
				/>
			</Div>
		</Div>
	);
};
export default HeaderMiddle;
