import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./Arrow.module.scss";

type ArrowProps = {
	className?: string;
};
export const Arrow: React.FC<ArrowProps> = ({ className }) => {
	return (
		<div className={clsx(styles.arrow, className)}>
			<Icon name={"arrow"}></Icon>
		</div>
	);
};
