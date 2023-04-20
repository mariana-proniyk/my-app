import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./QuestionAnswer.module.scss";
import { useState } from "react";

type QuestionAnswerProps = {
	title: string;
	className?: string;
};
export const QuestionAnswer: React.FC<QuestionAnswerProps> = ({
	className,
	title,
}) => {
	const [isActive, setIsActive] = useState(false);

	const clickOnIcon = () => {
		setIsActive(!isActive);
	};
	return (
		<div
			className={clsx(
				styles.root,
				{
					[styles["is-active"]]: isActive,
				},
				className
			)}
		>
			<div className={styles.title}>
				<h4>{title}</h4>
				<Icon name={"arrow"} onClick={clickOnIcon}></Icon>
			</div>
			<p>
				Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
				turpmaximus.posuere in.Contrary popular belief. There are many
				variations of passages of Lorem Ipsum available, but the majority
				randomised.
			</p>
		</div>
	);
};
