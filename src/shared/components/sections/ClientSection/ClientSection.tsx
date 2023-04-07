import clsx from "clsx";
import styles from "./ClientSection.module.scss";

export const ClientSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<img
				src="images/client1.png 1x"
				srcSet="images/retina/client1.png 2x"
				alt=""
			/>
			<img
				src="images/client2.png 1x"
				srcSet="images/retina/client2.png 2x"
				alt=""
			/>
			<img
				src="images/client3.png 1x"
				srcSet="images/retina/client3.png 2x"
				alt=""
			/>
			<img
				src="images/client4.png 1x"
				srcSet="images/retina/client4.png 2x"
				alt=""
			/>
			<img
				src="images/client5.png 1x"
				srcSet="images/retina/client5.png 2x"
				alt=""
			/>
		</section>
	);
};
