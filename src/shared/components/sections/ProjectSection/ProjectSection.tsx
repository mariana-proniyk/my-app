import clsx from "clsx";
import { ProjectCard, Title } from "../../ui";
import styles from "./ProjectSection.module.scss";

export const ProjectSection = () => (
	<section className={clsx(styles.root, ["content-center"])}>
		<Title
			title={"Follow Our Projects"}
			subTitle={
				"It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points."
			}
		></Title>
		<div className={styles.cards}>
			<ProjectCard
				className={styles.card}
				title={"Modern Kitchan"}
				subTitle={"Decor / Artchitecture"}
			></ProjectCard>
			<ProjectCard
				className={styles.card}
				title={"Modern Kitchan"}
				subTitle={"Decor / Artchitecture"}
			></ProjectCard>
			<ProjectCard
				className={styles.card}
				title={"Modern Kitchan"}
				subTitle={"Decor / Artchitecture"}
			></ProjectCard>
			<ProjectCard
				className={styles.card}
				title={"Modern Kitchan"}
				subTitle={"Decor / Artchitecture"}
			></ProjectCard>
		</div>
	</section>
);
