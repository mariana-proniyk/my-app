import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./Social.module.scss";

type SocialProps = {
	className?: string;
};
export const Social: React.FC<SocialProps> = ({ className }) => (
	<div className={clsx(styles.root, className)}>
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
