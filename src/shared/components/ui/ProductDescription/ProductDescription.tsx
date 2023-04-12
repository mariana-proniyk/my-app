import clsx from "clsx";
import styles from "./ProductDescription.module.scss";

type ProductDescriptionProps = {
	title: string;
	text: string;
	anotherText: string;
	className?: string;
};
export const ProductDescription: React.FC<ProductDescriptionProps> = ({
	title,
	text,
	anotherText,
	className,
}) => {
	return (
		<div className={clsx(styles.description, className)}>
			<h2>{title}</h2>
			<p>{text}</p>
			<p>{anotherText}</p>
		</div>
	);
};
