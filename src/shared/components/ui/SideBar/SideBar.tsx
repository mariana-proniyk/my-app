import { Categories } from "../Categories/Categories";
import { LatestNews } from "../LatestNews/LatestNews";
import { Search } from "../Search/Search";
import { Tags } from "../Tags/Tags";
import styles from "./SideBar.module.scss";

export const SideBar = () => {
	return (
		<div className={styles.wrapper}>
			<aside className={styles["side-bar"]}>
				<Search className={styles.search} placeholder={"Search"}></Search>
				<LatestNews></LatestNews>
				<Categories></Categories>
				<Tags
					item={[
						"Kitchen",
						"Bedroom",
						"Building",
						"Architecture",
						"Kitchen Planning",
						"Bedroom",
					]}
				></Tags>
			</aside>
		</div>
	);
};
