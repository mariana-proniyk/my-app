import clsx from "clsx";
import { Link } from "react-router-dom";
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
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="">Pages</Link>
						</li>
						<li>
							<Link to="/services">Services</Link>
						</li>
						<li>
							<Link to="/project">Project</Link>
						</li>
						<li>
							<Link to="/blog">Blog</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
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
