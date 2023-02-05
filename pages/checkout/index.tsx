import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/tools/Context/cartProvider";

import Section from "@/UiComponent/Section";
import Button from "@/UiComponent/Tags/Button";

const Checkout = () => {
	const { cartData } = useContext(CartContext);
	return (
		<Section name="profile__page">
			<h2> Checkout page is coming very soon </h2>
			<div className="flex__center">
				<h3>Please check out from here </h3>
				<Button variant="outline">
					<Link href={cartData?.hosted_checkout_url || "/"}> Checkout</Link>
				</Button>
			</div>
		</Section>
	);
};
export default Checkout;
