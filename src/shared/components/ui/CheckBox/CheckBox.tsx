import clsx from "clsx";
import styles from "./CheckBox.module.scss";

type CheckBoxProps = {
	className?: string;
};
export const CheckBox: React.FC<CheckBoxProps> = ({ className }) => {
	return (
		<label className={clsx(styles.root, className)}>
			<input type="checkbox"></input>
			<span>
				Save my name, email, and website in this browser for the next time I
				comment.
			</span>
		</label>
	);
};
