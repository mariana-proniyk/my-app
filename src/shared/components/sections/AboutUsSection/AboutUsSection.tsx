import clsx from "clsx";
import { Button } from "../../ui";
import { PhoneItem } from "../../ui/PhoneItem/PhoneItem";
import styles from "./AboutUsSection.module.scss";

export const AboutUsSection = () => (
	<section className={clsx(styles.root, ["content-center"])}>
		<div className={styles.body}>
			<h2>We Create The Art Of Stylish Living Stylishly</h2>
			<p>
				It is a long established fact that a reader will be distracted by the of
				readable content of a page when lookings at its layouts the points of
				using that it has a more-or-less normal.
			</p>
			<PhoneItem></PhoneItem>
			<Button className={styles.button} type={"is-default"}>
				Get Free Estimate
			</Button>
		</div>
		<img src="images/photo.jpg" alt="" />
	</section>
);
