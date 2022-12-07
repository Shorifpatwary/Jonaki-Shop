import React from "react";
import Li from "@/Tags/Li";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLinks = ({ pages = [], ulClassName = "", liClassName = "" }) => {
	const router = useRouter();
	return (
		<ul className={`${ulClassName} flex__center-sb`}>
			{pages.map((page) => (
				<Link href={page.url}>
					<Li
						className={`${liClassName} ${
							router.pathname == page.url ? "active" : ""
						}`}
					>
						{page.text}
					</Li>
				</Link>
			))}
		</ul>
	);
};
export default NavLinks;
