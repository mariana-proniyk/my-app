import { Social } from "../Social/Social";
import { Tags } from "../Tags/Tags";
import styles from "./BlogSubContent.module.scss";

export const BlogSubContent = () => {
	return (
		<div className={styles.root}>
			<Tags className={styles.tags} item={["Kitchen", "Bedroom"]}></Tags>
			<Social className={styles.social}></Social>
		</div>
	);
};
