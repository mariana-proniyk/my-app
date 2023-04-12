import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./ZoomIcon.module.scss";

type ZoomIconProps = {
	className?: string;
};
export const ZoomIcon: React.FC<ZoomIconProps> = ({ className }) => (
	<div className={clsx(styles.zoom, className)}>
		<Icon name={"search"}></Icon>
	</div>
);
