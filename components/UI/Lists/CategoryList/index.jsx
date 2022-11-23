import Link from "next/link";
import Li from "../../Tags/Li";

const CategoryList = ({ items = [], className = "", ...props }) => {
	return (
		<ul {...props} className={`flex__column-start gap__1 ${className}`}>
			{items?.map((item) => (
				<Link key={item.id} href={`/category/${item.slug}`}>
					<Li>{item.name}</Li>
				</Link>
			))}
		</ul>
	);
};
export default CategoryList;
