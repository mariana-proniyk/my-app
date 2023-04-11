import clsx from "clsx";
import { useState } from "react";
import { Pagination, ProjectCard, TabMenu, TabMenuData } from "../../ui";
import styles from "./ProjectBanner.module.scss";

const tabsList: TabMenuData[] = [
	{
		name: "Bathroom",
		key: "bathroom-tab",
	},
	{
		name: "Bed Room",
		key: "bed-room-tab",
	},
	{
		name: "Kitchan",
		key: "kitchan-tab",
	},
	{
		name: "Living Area",
		key: "living-area-tab",
	},
];

export const ProjectBanner = () => {
	const [activeTab, setActiveTab] = useState(tabsList[0].key);

	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<TabMenu
				className={styles["tab-menu"]}
				activeTab={activeTab}
				list={tabsList}
				onSelect={(key) => setActiveTab(key)}
			/>

			{activeTab === "bathroom-tab" && (
				<section className={styles.body}>
					<div className={styles.list}>
						<div className={styles.content}>
							<ProjectCard
								className={styles.big}
								title={"Minimal Bedroom"}
								subTitle={"Decor / Artchitecture"}
							></ProjectCard>
							<ProjectCard
								className={styles.small}
								title={"Classic Minimal Bedroom"}
								subTitle={"Decor / Artchitecture"}
							></ProjectCard>
							<ProjectCard
								className={styles.big}
								title={"Minimal Bedroom table"}
								subTitle={"Decor / Artchitecture"}
							></ProjectCard>
							<ProjectCard
								className={styles.small}
								title={"Modern Medroom"}
								subTitle={"Decor / Artchitecture"}
							></ProjectCard>
						</div>
						<div className={styles.content}>
							<ProjectCard
								className={styles.small}
								title={"Minimal Bedroom"}
								subTitle={"Decor / Artchitecture"}
							></ProjectCard>
							<ProjectCard
								className={styles.big}
								title={"Modern Bedroom"}
								subTitle={"Decor / Artchitecture"}
							></ProjectCard>
							<ProjectCard
								className={styles.small}
								title={"System Table"}
								subTitle={"Decor / Artchitecture"}
							></ProjectCard>
							<ProjectCard
								className={styles.small}
								title={"Modern Bedroom"}
								subTitle={"Decor / Artchitecture"}
							></ProjectCard>
						</div>
					</div>
					<Pagination number={[1, 2, 3]}></Pagination>
				</section>
			)}
			{activeTab === "bed-room-tab" && <div>bed-room-tab</div>}
		</section>
	);
};
