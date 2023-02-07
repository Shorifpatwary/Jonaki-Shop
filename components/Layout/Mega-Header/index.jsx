import { createContext, useState, memo } from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import data from "@/public/data/data.json";

export const HeaderData = createContext(data);
export const MobileMenu = createContext();
const MegaHeader = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<HeaderData.Provider value={data.header}>
			<MobileMenu.Provider value={[isMobileMenuOpen, setIsMobileMenuOpen]}>
				<header className="mega__header flex__column-center ">
					<HeaderTop />
					<HeaderMiddle />
					<HeaderBottom />
				</header>
			</MobileMenu.Provider>
		</HeaderData.Provider>
	);
};

export default memo(MegaHeader);
