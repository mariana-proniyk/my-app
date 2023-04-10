import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import clsx from "clsx";
import { Button, Input } from "../../ui";
import styles from "./FormSection.module.scss";

import { validationSchema } from "./validation";
import { InputError } from "../../ui/InputError/InputError";

const defaultValues: FormData = {
	email: "",
	name: "",
	message: "",
};

type FormData = {
	email: string;
	name: string;
	message: string;
};

export const FormSection = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, touchedFields, isValid },
	} = useForm<FormData>({
		defaultValues,
		mode: "onTouched",
		resolver: yupResolver(validationSchema),
	});

	const onFormSubmitted = (data: FormData) => {
		console.log("send data to server", data);
	};

	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<h2>Creative project? Let's have a productive talk.</h2>
			<form className={styles.form} onSubmit={handleSubmit(onFormSubmitted)}>
				<div className={clsx(styles.name, styles["input-wrapper"])}>
					<Input placeholder="Name" type="name" {...register("name")} />
					{errors.name && touchedFields.name && (
						<InputError message={errors.name.message}></InputError>
					)}
				</div>
				<div className={clsx(styles.email, styles["input-wrapper"])}>
					<Input placeholder="Email" type="email" {...register("email")} />
					{errors.email && touchedFields.email && (
						<InputError message={errors.email.message}></InputError>
					)}
				</div>
				<div className={clsx(styles["input-wrapper"])}>
					<Input
						className={styles.message}
						placeholder="Hello I am Intrested in.."
						type="message"
						{...register("message")}
					/>
					{errors.message && touchedFields.message && (
						<InputError message={errors.message.message}></InputError>
					)}
				</div>
				<Button
					isDisabled={!isValid}
					className={styles.button}
					type={"is-default"}
				>
					Send Now
				</Button>
			</form>
		</section>
	);
};
