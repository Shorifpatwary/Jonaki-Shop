import { useRouter } from "next/router";
import Link from "next/link";
import Li from "@/UiComponent/Tags/Li";
const BreadCrumbs = () => {
	const router = useRouter();
	const linkPath = router.asPath.split("/");
	linkPath.shift();

	return (
		<ul className="d__flex gap__1">
			<Link href={"/"}>Home Page </Link>
			{linkPath.map((path, i) => (
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

export default BreadCrumbs;
