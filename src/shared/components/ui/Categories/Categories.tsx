import styles from "./Categories.module.scss";

export const Categories = () => {
	return (
		<div className={styles.root}>
			<h4>Categories</h4>
			<ul>
				<li>
					<a href="#">Decoration</a>
				</li>
				<li>
					<a href="#">Door Windows</a>
				</li>
				<li>
					<a href="#">Home Land</a>
				</li>
				<li>
					<a href="#">Roof Installation</a>
				</li>
			</ul>
		</div>
	);
};
