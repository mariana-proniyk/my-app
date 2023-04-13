import { object, string } from "yup";

export const validationSchema = object({
	email: string().email("*Email is required").required("*Email is not valid"),
	name: string().min(3).max(10).required("*This field is required"),
	message: string().min(15).required("*This field is required"),
	number: string().min(10).required("*This field is required"),
	website: string().min(5).required("*This field is required"),
});
