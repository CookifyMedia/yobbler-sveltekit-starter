import type { Actions, PageServerLoad } from './$types';
import { error, invalid, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/helpers';
import { registerUserDto } from '$lib/schemas';
import { ClientResponseError } from 'pocketbase';
import { ZodError } from 'zod';

export const load: PageServerLoad = async () => {
    return {};
};

export const actions: Actions = {
    register: async ({ locals, request }) => {
		const { formData, errors } = await validateData(request, registerUserDto);

		if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('users').create(formData);
		} catch (err) {
			console.log('Error:', err);
			if (err instanceof ClientResponseError) {
				throw error(err.status, err.data.message);
			}
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				return {
					data: formData,
					errors
				};
			}
		}

		throw redirect(303, '/login');
	}
}