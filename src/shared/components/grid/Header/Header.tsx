import clsx from "clsx";
import { Icon } from "../../ui/Icon/Icon";
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={clsx("content-center", styles.root)}>
			<a href="/">
				<img src="images/logo.svg" alt="" />
			</a>
			<div className={styles.menu}>
				<nav>
					<ul>
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">Pages</a>
						</li>
						<li>
							<a href="">Services</a>
						</li>
						<li>
							<a href="">Project</a>
						</li>
						<li>
							<a href="">Blog</a>
						</li>
						<li>
							<a href="">Contact</a>
						</li>
					</ul>
				</nav>
				<div className={styles.search}>
					<Icon name={"search"}></Icon>
				</div>
			</div>
		</header>
	);
};
