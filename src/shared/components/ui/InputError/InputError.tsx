import styles from "./InputError.module.scss";

type InputErrorProps = {
	message?: string;
};

export const InputError: React.FC<InputErrorProps> = ({ message }) => {
	return <div className={styles.error}>{message}</div>;
};
