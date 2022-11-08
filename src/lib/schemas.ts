import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const loginUserDto = zfd.formData({
	email: z.string().email(),
	password: z.string()
});

export const registerUserDto = zfd.formData({
	firstName: z.string().min(3, { message: "Måste innehålla minst 3 bokstäver!" }).max(64).trim(),
	lastName: z.string().min(3, { message: "Måste innehålla minst 3 bokstäver!" }).max(64).trim(),
	email: z.string().email({ message: "Måste vara en godkänd epost!" }),
	password: z.string().min(6, { message: "Måste innehålla minst 6 karaktärer!" }).max(64),
	passwordConfirm: z.string().min(6, { message: "Måste innehålla minst 6 karaktärer!" }).max(64),
	terms: z.string({
		required_error: "Du måste godkänna villkoren!",
	  })
});

export type registerUserErrors = z.inferFlattenedErrors<typeof registerUserDto>;