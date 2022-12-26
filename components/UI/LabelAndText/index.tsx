import Style from "./style.module.scss";
import Link from "next/link";
type Props = {
	label: string;
	text: string | React.ReactNode;
};

const LabelAndText = ({ label, text }: Props) => {
	return (
		<div className={`${Style.label__and_text} w__10 flex__start gap__2`}>
			<span className={`${Style.label}`}>{label}:</span>
			<div className={`${Style.text}`}>{text}</div>
		</div>
	);
};

export default LabelAndText;
