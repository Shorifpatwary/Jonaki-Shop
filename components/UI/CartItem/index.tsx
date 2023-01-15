import React, { useState } from "react";
import Style from "./style.module.scss";
import Image from "next/image";
import P2 from "@/UiComponent/Tags/P/P2";
import Button from "@/UiComponent/Tags/Button";

type cartItemPropTypes = {
	item: {
		id: string;
		image: {
			id: string;
			url: string;
			description?: string | null;
			filename: string;
		};
		is_valid: boolean;
		line_total: {
			raw: number;
			formatted_with_symbol: string;
			formatted_with_code: string;
		};
		name: string;
		permalink: string;
		price: {
			raw: number;
			formatted_with_symbol: string;
			formatted_with_code: string;
		};
		product_id: string;
		product_meta: Array<unknown>;
		product_name: string;
		quantity: number;
		selected_options: Array<unknown>;
		sku: string;
	};
	itemUpdateHandler: (line_item_id: string, quantity: number) => void;
	itemRemoveHandler: (line_item_id: string) => void;
};

const CartItem = ({
	item,
	itemUpdateHandler,
	itemRemoveHandler,
}: cartItemPropTypes) => {
	const [quantity, setQuantity] = useState(item.quantity || 1);
	// decrement handler
	const decrementProductAmount = () => {
		if (quantity <= 1) {
			return;
		} else {
			setQuantity((prev) => prev - 1);
		}
	};
	// handleUpdate for cart item
	const handleUpdate = (line_item_id: string) => {
		if (item.quantity === quantity) {
			return;
		} else {
			itemUpdateHandler(line_item_id, quantity);
		}
	};

	const handleItemRemove = (line_item_id: string) => {
		if (confirm("Are You sure your want to delete this?")) {
			itemRemoveHandler(line_item_id);
		}
	};

	return (
		<div className={`${Style.cart__item_wrapper} row`}>
			{/* cart image */}
			<div className={`${Style.image__wrapper} col__1`}>
				<Image
					src={item.image.url}
					width={150}
					height={200}
					alt={`${item.product_name}`}
				/>
			</div>
			{/* cart product info */}
			<div className={`${Style.product__info} flex__column-start col__2`}>
				<div className={`${Style.name}`}>
					<P2>{item.name}</P2>
					<div className={`${Style.product__info} flex__center-sb gap__1`}>
						<P2 className={`${Style.price__per_product}`}>
							Price:{item.price.formatted_with_code}
						</P2>
						<P2 className={`${Style.product__cart_total}`}>
							Total:{item.line_total.formatted_with_code}
						</P2>
					</div>
				</div>
			</div>
			{/* cart action  */}
			<div
				className={`${Style.cart__action} col__1 flex__column-center gap__1`}
			>
				<Button
					variant="outline"
					className={`${Style.cart__action}`}
					onClick={() => handleItemRemove(item.id)}
				>
					Remove Item
				</Button>
				<div className="product__order-amount flex__center gap__1">
					<Button
						variant="outline"
						className="product__decrement-button"
						onClick={decrementProductAmount}
					>
						-
					</Button>
					<span className="amount">{quantity}</span>
					<Button
						variant="outline"
						onClick={() => setQuantity((prev) => prev + 1)}
						className="product__increment-button"
					>
						+
					</Button>
				</div>
				{/* add to cart button */}
				<Button
					disabled={item.quantity === quantity}
					onClick={() => handleUpdate(item.id)}
				>
					Update
				</Button>
				{/* product quantity  */}
				<div className={`${Style.current__price}`}>
					Total:{quantity * item.price.raw}
				</div>
			</div>
		</div>
	);
};
export default React.memo(CartItem);
