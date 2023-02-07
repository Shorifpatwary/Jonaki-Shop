import { memo } from "react";
import CategoryList from "@/UiComponent/Lists/CategoryList";
import H4 from "@/components/UI/Tags/Heading/H4";
import Button from "@/UiComponent/Tags/Button";

/**
 *
 * @param  Category Block Title
 * @param  Categories items
 * @returns Category block for home page
 */
const CategoriesBlock = ({
	title = "Category Block Title  ",
	categories = [],
}) => {
	return (
		<div className="categories__block flex__column-start col__bp3-4 gap__3">
			<H4>{title}</H4>
			<CategoryList items={categories} />
			<Button variant="secondary" icon="append">
				More categories
			</Button>
		</div>
	);
};

export default memo(CategoriesBlock);
