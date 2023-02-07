import {memo} from "react";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";
import Li from "@/UiComponent/Tags/Li";
const BreadCrumbs = () => {
	const router: NextRouter = useRouter();

	// breadcrumb path without query string .
	const linkPath: string[] = router.asPath.split("?")[0].split("/");
	linkPath.shift();

	return (
		<ul className="d__flex gap__1">
			<Link href={"/"}>Home Page </Link>
			{linkPath.map((path: string, i) => (
				<>
					<Link
						href={`/${linkPath.slice(0, i + 1).join("/")}`}
						style={{
							color:
								linkPath.slice(0, i + 1).join("/") !== router.asPath
									? "black"
									: "",
						}}
					>
						<Li>
							<span>/</span> {path}
						</Li>
					</Link>
				</>
			))}
		</ul>
	);
};

export default memo(BreadCrumbs);
