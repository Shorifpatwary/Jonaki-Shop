import React, { createContext } from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import data from "@/public/data/data.json";

export const HeaderData = createContext(data);
const MegaHeader = () => {
	return (
		<HeaderData.Provider value={data.header}>
			<header className="mega__header flex__column-center ">
				<HeaderTop />
				<HeaderMiddle />
				<HeaderBottom />
			</header>
		</HeaderData.Provider>
	);
};

export default MegaHeader;
