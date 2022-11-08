import type {LayoutServerLoad} from './$types'

	
export const load: LayoutServerLoad = async ({ locals }) => {
	const theme = locals.theme
	
	if (locals.user) {
		return {
			theme,
			user: locals.user
		};
	}

	return {
		theme,
		user: undefined
	}
}