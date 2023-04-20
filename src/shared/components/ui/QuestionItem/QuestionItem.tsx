import clsx from "clsx";
import { useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./QuestionItem.module.scss";

type QuestionItemProps = {
	title: string;
};
export const QuestionItem: React.FC<QuestionItemProps> = ({ title }) => {
	const [isActive, setIsActive] = useState(false);

	const clickOnText = () => {
		setIsActive(!isActive);
	};

	return (
		<div
			className={clsx(styles.item, {
				[styles["is-active"]]: isActive,
			})}
		>
			<div className={styles.body}>
				<h6>{title}</h6>
				<div className={styles.icon} onClick={clickOnText}>
					<Icon className={styles.plus} name={"plus"}></Icon>
					<Icon className={styles.minus} name={"minus"}></Icon>
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet, adipiscing from Aliquam eu sem turpmaximus.
			</p>
		</div>
	);
};
