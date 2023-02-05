import React from "react";
import Link from "next/link";

import style from "@/layoutComponent/Footer/LinkBlock/style.module.scss";
import H4 from "@/Tags/Heading/H4";
const FooterLinkBlock = ({ className = "hello", title = "", links = [] }) => {
	return (
		<div
			className={`${style.footerLinkBlock}  ${className} flex__column-start gap__2`}
		>
			<div className="title">
				<H4>{title}</H4>
			</div>
			{/* links */}
			<div className="links flex__column-start gap__2">
				{links.map((link) => {
					return (
						<Link key={link.url + link.text} href={`${link.url}`}>
							{link.text}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default FooterLinkBlock;
