import { Icon } from "../Icon/Icon";
import styles from "./PhoneItem.module.scss";

export const PhoneItem = () => {
	return (
		<div className={styles.item}>
			<div className={styles.phone}>
				<Icon name={"phone"}></Icon>
			</div>
			<div className={styles.body}>
				<span> 012345678</span>
				Call Us Anytime
			</div>
		</div>
	);
};
