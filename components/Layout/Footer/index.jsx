import { memo } from "react";
import data from "@/public/data/data.json";
import Section from "@/UiComponent/Section";
import H4 from "@/Tags/Heading/H4";
import PillPrimary from "@/UiComponent/Pill/Primary";
import P2 from "@/Tags/P/P2";
import FooterLinkBlock from "@/layoutComponent/Footer/LinkBlock";

let Id = 23;
const Footer = () => {
	const { footer } = data;
	const tag_title = footer.product_tags.text;
	const tags = footer.product_tags.tags;
	return (
		<Section TagName="footer" className="footer__wrapper ">
			<div className="footer__top footer__links row gap__2 ">
				{footer.link.map((block) => (
					<FooterLinkBlock
						key={block.title + block.links + Id++}
						title={block.title}
						links={block.links}
					/>
				))}
			</div>
			{/* Footer tag  */}
			<div className="footer__tag flex__column-start w__10 gap__2">
				<div className="title w__10">
					<H4> {tag_title} </H4>
				</div>
				<div className="flex__start w__10 gap__2  wrap">
					{tags.map((tag) => {
						return <PillPrimary>{tag}</PillPrimary>;
					})}
				</div>
			</div>
			{/* Footer bottom / copyright footer  */}

			<div className="footer__copyright w__10">
				<P2>{footer.text}</P2>
			</div>
		</Section>
	);
};
export default memo(Footer);
