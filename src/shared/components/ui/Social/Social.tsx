import { Icon } from "../Icon/Icon";
import styles from "./Social.module.scss";

export const Social = () => (
	<div className={styles.root}>
		<a href="">
			<Icon name={"facebook"}></Icon>
		</a>
		<a href="">
			<Icon name={"twitter"}></Icon>
		</a>
		<a href="">
			<Icon name={"in"}></Icon>
		</a>
		<a href="">
			<Icon name={"instagram"}></Icon>
		</a>
	</div>
);
