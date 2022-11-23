import React from "react";
import Link from "next/link";

import Div from "@/components/UI/Tags/Div";
import style from "@/layoutComponent/Footer/LinkBlock/style.module.scss";
import H4 from "@/Tags/Heading/H4";
import A from "@/Tags/A";
const FooterLinkBlock = ({ className = "hello", title = "", links = [] }) => {
	return (
		<Div
			className={`${style.footerLinkBlock}  ${className} flex__column-start gap__2`}
		>
			<Div className="title">
				<H4>{title}</H4>
			</Div>
			{/* links */}
			<Div className="links flex__column-start gap__2">
				{links.map((link) => {
					return (
						<Link key={link.url + link.text} href={`${link.url}`}>
							{link.text}
						</Link>
					);
				})}
			</Div>
		</Div>
	);
};

export default FooterLinkBlock;
