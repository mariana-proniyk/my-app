import clsx from "clsx";
import { WhatWeDoItem } from "../../ui";
import styles from "./WhatWeDo.module.scss";

export const WhatWeDo = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<WhatWeDoItem
				title={"What We Do"}
				text={
					"It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal."
				}
				button={"Our Concept"}
			></WhatWeDoItem>
			<WhatWeDoItem
				className={styles.item}
				title={"The End Result"}
				text={
					"It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal."
				}
				button={"Our Portfolio"}
			></WhatWeDoItem>
		</section>
	);
};
