import clsx from "clsx";
import styles from "./ClientSection.module.scss";

export const ClientSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<img
				src="images/client1.png "
				// srcset="images/retina/client1.png 2x"
				alt=""
			/>
			<img src="images/client2.png" alt="" />
			<img src="images/client3.png" alt="" />
			<img src="images/client4.png" alt="" />
			<img src="images/client5.png" alt="" />
		</section>
	);
};
