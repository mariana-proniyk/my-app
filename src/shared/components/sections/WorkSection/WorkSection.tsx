import clsx from "clsx";
import { WorkItem } from "../../ui";
import styles from "./WorkSection.module.scss";

export const WorkSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<WorkItem
				title={"Project Plan"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></WorkItem>
			<WorkItem
				title={"Interior Work"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></WorkItem>
			<WorkItem
				title={"Realization"}
				text={
					"There are many variations of the passages of lorem Ipsum from available, majority."
				}
			></WorkItem>
		</section>
	);
};
