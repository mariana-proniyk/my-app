import clsx from "clsx";
import { PointItem, WhatWeDoItem } from "../../ui";
import styles from "./ServicePoints.module.scss";

export const ServicePoints = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<div className={styles.points}>
				<PointItem title={"Use of Interior"}></PointItem>
				<div className={styles.line}></div>
				<PointItem title={"Make An Art"}></PointItem>
			</div>
			<WhatWeDoItem
				className={styles.item}
				title={"We love design.That's how we got here."}
				text={
					"It is a long established fact that a reader will be distracted by the of readable content ."
				}
				button={"Our Portfolio"}
			></WhatWeDoItem>
		</section>
	);
};
