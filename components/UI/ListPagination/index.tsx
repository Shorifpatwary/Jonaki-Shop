import React from "react";
import Style from "./style.module.scss";
import ButtonPrimary from "@/UiComponent/Tags/Button/Primary";
import Button from "@/UiComponent/Tags/Button";

type ListPaginationProps = {
	className?: string;
	totalItem: number;
	totalPage: number;
	itemPerPage: number;
	currentPage: number;
	setCurrentPage(page: number): void;
};

const ListPagination = ({
	className = "",
	totalItem = 12,
	totalPage = 1,
	itemPerPage = 20,
	currentPage = 1,
	setCurrentPage,
}: ListPaginationProps) => {
	return (
		<div className={`${className} ${Style.list__pagination} flex__end gap__1`}>
			{currentPage > 1 ? (
				<ButtonPrimary
					size="sm"
					onClick={() => setCurrentPage(currentPage - 1)}
				>
					Previous
				</ButtonPrimary>
			) : null}
			{Array.from(Array(totalPage), (_, i: number) => i + 1).map(
				(pageNumber, i) => (
					<Button
						key={pageNumber + i}
						variant="outline"
						size="sm"
						className={currentPage === pageNumber ? "active" : ""}
						onClick={() => setCurrentPage(pageNumber)}
					>
						{pageNumber}
					</Button>
				)
			)}
			{currentPage < totalPage ? (
				<ButtonPrimary
					size="sm"
					onClick={() => setCurrentPage(currentPage + 1)}
				>
					Next
				</ButtonPrimary>
			) : null}
		</div>
	);
};

export default ListPagination;
