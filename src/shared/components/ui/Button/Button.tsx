import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./Button.module.scss";

type ButtonProps = {
	type: "is-brown" | "is-default";
	className?: string;
	children?: React.ReactNode;
	isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	type,
	className,
	children,
	isDisabled,
}) => {
	return (
		<button
			className={clsx(styles.root, className, styles[type], {
				[styles["is-disabled"]]: isDisabled,
			})}
		>
			{children}
			<Icon name={"arrow-right"}></Icon>
		</button>
	);
};
