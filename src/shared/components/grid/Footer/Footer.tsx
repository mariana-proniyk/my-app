import clsx from "clsx";
import { Social } from "../../ui/Social/Social";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.root}>
			<div className={clsx(styles["top-content"], ["content-center"])}>
				<div className={styles.contact}>
					<a href="/">
						<img src="images/logo.svg" alt="logo" />
					</a>
					<p>
						It is a long established fact that a reader will be distracted
						lookings.
					</p>
					<Social></Social>
				</div>
				<div className={styles.menu}>
					<div className={styles.list}>
						<h5>Pages</h5>
						<ul>
							<li>
								<a href="">About Us</a>
							</li>
							<li>
								<a href="">Our Projects</a>
							</li>
							<li>
								<a href="">Our Team</a>
							</li>
							<li>
								<a href="">Contact Us</a>
							</li>
							<li>
								<a href="">Services</a>
							</li>
						</ul>
					</div>
					<div className={styles.list}>
						<h5>Services</h5>
						<ul>
							<li>
								<a href="">Kitchan</a>
							</li>
							<li>
								<a href="">Living Area</a>
							</li>
							<li>
								<a href="">Bathroom</a>
							</li>
							<li>
								<a href="">Dinning Hall</a>
							</li>
							<li>
								<a href="">Bedroom</a>
							</li>
						</ul>
					</div>
					<div className={styles.list}>
						<h5>Contact</h5>
						<ul>
							<li>
								<a href="">55 East Birchwood Ave. Brooklyn, New York 11201</a>
							</li>
							<li>
								<a href="mailto: contact@interno.com">contact@interno.com</a>
							</li>
							<li>
								<a href="tel: (123) 456 - 7890">(123) 456 - 7890</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles["bottom-content"]}>
				<div className={clsx(styles.text, ["content-center"])}>
					Copyright © Interno | Designed by Victorflow Templates - Powered by
					Webflow
				</div>
			</div>
		</footer>
	);
};
