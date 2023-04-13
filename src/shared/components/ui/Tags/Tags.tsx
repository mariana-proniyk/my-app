import clsx from "clsx";
import styles from "./Tags.module.scss";

type TagsProps = {
	item: string[];
	className?: string;
};
export const Tags: React.FC<TagsProps> = ({ item, className }) => {
	return (
		<div className={clsx(styles.root, className)}>
			<h4>Tags</h4>
			<ul>
				{item.map((item) => (
					<li>
						<a href="#">{item}</a>
					</li>
				))}
			</ul>
		</div>
	);
};
