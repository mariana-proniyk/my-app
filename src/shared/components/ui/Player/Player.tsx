import { Icon } from "../Icon/Icon";
import styles from "./Player.module.scss";

export const Player = () => {
	return (
		<div className={styles.root}>
			<Icon name={"play"}></Icon>
		</div>
	);
};
