import clsx from "clsx";
import { ProductDescription } from "../../ui";
import { ProductInfo } from "../../ui/ProductInfo/ProductInfo";
import { ZoomIcon } from "../../ui/ZoomIcon/ZoomIcon";
import styles from "./ProductDetail.module.scss";

export const ProductDetail = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<div className={styles.body}>
				<ProductInfo></ProductInfo>
				<ProductDescription
					className={styles.description}
					title={"Minimal Look Bedrooms"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. "
					}
					anotherText={
						"In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."
					}
				></ProductDescription>
			</div>
			<div className={styles.image}>
				<img src="images/banner.jpg" alt="" />
				<ZoomIcon className={styles.icon}></ZoomIcon>
			</div>
		</section>
	);
};
