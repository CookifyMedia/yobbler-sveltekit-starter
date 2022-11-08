import type {LayoutServerLoad} from './$types'

	
export const load: LayoutServerLoad = async ({ locals }) => {
	if (locals.user) {
		return {
			user: locals.user
		};
	}

	const theme = locals.theme
	return {
		theme,
		user: undefined
	}
}