import clsx from "clsx";
import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputProps = {
	ref?: ForwardedRef<HTMLInputElement>;
	className?: string;
};

export const Input: React.FC<
	InputProps & InputHTMLAttributes<HTMLInputElement>
> = forwardRef(({ className, ...props }, ref) => {
	return (
		<input className={clsx(styles.root, className)} ref={ref} {...props} />
	);
});
