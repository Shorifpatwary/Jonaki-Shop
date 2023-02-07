import { memo } from "react";
import Link from "next/link";
import Li from "../../Tags/Li";

const CategoryList = ({ items = [], className = "", ...props }) => {
	return (
		<ul {...props} className={`flex__column-start gap__1 ${className}`}>
			{items?.map((item) => (
				// href={`/products?category_slug=${item.slug}`
				<Link key={item.id} href={`/products `}>
					<Li>{item.name}</Li>
				</Link>
			))}
		</ul>
	);
};
export default memo(CategoryList);
