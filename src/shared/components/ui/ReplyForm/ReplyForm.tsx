import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";
import { Input } from "../Input/Input";
import { InputError } from "../InputError/InputError";
import styles from "./ReplyForm.module.scss";
import { validationSchema } from "./validation";

const defaultValues: FormData = {
	email: "",
	name: "",
	website: "",
	subject: "",
	message: "",
	tel: "",
};

type FormData = {
	email: string;
	name: string;
	message: string;
	tel: string;
	subject: string;
	website: string;
};

type ReplyFormProps = {
	subject?: string;
	website?: string;
	checkBox?: string;
	className?: string;
	title?: string;
};
export const ReplyForm: React.FC<ReplyFormProps> = ({
	website,
	subject,
	checkBox,
	className,
	title,
}) => {
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
		<div className={clsx(styles.root, className)}>
			<h4>{title}</h4>
			<form className={styles.form} onSubmit={handleSubmit(onFormSubmitted)}>
				<div className={styles["input-wrapper"]}>
					<Input placeholder="Name" type="name" {...register("name")}></Input>
					{errors.name && touchedFields.name && (
						<InputError message={errors.name.message}></InputError>
					)}
				</div>
				<div className={styles["input-wrapper"]}>
					<Input
						placeholder="Email"
						type="email"
						{...register("email")}
					></Input>
					{errors.email && touchedFields.email && (
						<InputError message={errors.email.message}></InputError>
					)}
				</div>
				{website && (
					<div className={styles["input-wrapper"]}>
						<Input
							placeholder={website}
							type="website"
							{...register("website")}
						></Input>
						{errors.website && touchedFields.website && (
							<InputError message={errors.website.message}></InputError>
						)}
					</div>
				)}

				{subject && (
					<div className={styles["input-wrapper"]}>
						<Input
							placeholder={subject}
							type="subject"
							{...register("subject")}
						></Input>
						{errors.subject && touchedFields.subject && (
							<InputError message={errors.subject.message}></InputError>
						)}
					</div>
				)}

				<div className={styles["input-wrapper"]}>
					<Input placeholder="Phone" type="tel" {...register("tel")}></Input>
					{errors.tel && touchedFields.tel && (
						<InputError message={errors.tel.message}></InputError>
					)}
				</div>
				<div className={clsx(styles.message, ["input-wrapper"])}>
					<Input
						placeholder="Hello Iam Intrested in.."
						type="message"
						{...register("message")}
					></Input>
					{errors.message && touchedFields.message && (
						<InputError message={errors.message.message}></InputError>
					)}
				</div>
				{checkBox && (
					<CheckBox className={styles["check-box"]} text={checkBox}></CheckBox>
				)}

				<Button
					isDisabled={!isValid}
					className={styles.button}
					type={"is-default"}
				>
					Send Now
				</Button>
			</form>
		</div>
	);
};
