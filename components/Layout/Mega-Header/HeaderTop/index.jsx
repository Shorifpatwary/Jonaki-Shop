import React, { useContext } from "react";
import Div from "@/Tags/Div";
import { HeaderData } from "..";
import Link from "next/link";
const HeaderTop = () => {
	const headerData = useContext(HeaderData);

	const header_info = headerData.header_top.header_info;
	const header_links = headerData.header_top.header_links;
	return (
		<Div className="header-top info__header flex__center-sb w__10 gap__2">
			{/* top header info  */}
			<Div className="header__info flex__start gap__3 col__4">
				{header_info.map((item, index) => {
					return (
						<Link key={item.text + index} href={item.url}>
							{item.text}{" "}
						</Link>
					);
				})}
			</Div>
			{/* top header links */}
			<Div className="header__links flex__end gap__3 col__4">
				{header_links.map((item, index) => {
					return (
						<Link key={item.text + index} href={item.url}>
							{item.text}{" "}
						</Link>
					);
				})}
			</Div>
		</Div>
	);
};

export default HeaderTop;
