import React, { useContext } from "react";

import { HeaderData } from "..";
import Link from "next/link";
const HeaderTop = () => {
	const headerData = useContext(HeaderData);

	const header_info = headerData.header_top.header_info;
	const header_links = headerData.header_top.header_links;
	return (
		<div className="header-top info__header flex__center-sb w__10 gap__2">
			{/* top header info  */}
			<div className="header__info flex__start gap__3 col__4">
				{header_info.map((item, index) => {
					return (
						<Link key={item.text + index} href={item.url}>
							{item.text}{" "}
						</Link>
					);
				})}
			</div>
			{/* top header links */}
			<div className="header__links flex__end gap__3 col__4">
				{header_links.map((item, index) => {
					return (
						<Link key={item.text + index} href={item.url}>
							{item.text}{" "}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default HeaderTop;
