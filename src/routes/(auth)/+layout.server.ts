import type {LayoutServerLoad} from './$types'

	
export const load: LayoutServerLoad = async ({ locals }) => {


	const theme = locals.theme
	return {
		theme,
	}
}