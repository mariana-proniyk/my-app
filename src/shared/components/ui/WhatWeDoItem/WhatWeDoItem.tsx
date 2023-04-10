import clsx from "clsx";
import { Button } from "../Button/Button";
import styles from "./WhatWeDoItem.module.scss";

type WhatWeDoItemProps = {
	title: string;
	text: string;
	button: string;
	className?: string;
};
export const WhatWeDoItem: React.FC<WhatWeDoItemProps> = ({
	title,
	text,
	button,
	className,
}) => {
	return (
		<div className={clsx(styles.root, className)}>
			<div className={styles.body}>
				<h2>{title}</h2>
				<p>{text}</p>
				<Button className={styles.button} type={"is-default"}>
					{button}
				</Button>
			</div>
			<img src="images/work.jpg" alt="" />
		</div>
	);
};
