import clsx from "clsx";
import styles from "./CheckBox.module.scss";

type CheckBoxProps = {
	className?: string;
	text: string;
};
export const CheckBox: React.FC<CheckBoxProps> = ({ className, text }) => {
	return (
		<label className={clsx(styles.root, className)}>
			<input type="checkbox"></input>
			<span>{text}</span>
		</label>
	);
};
