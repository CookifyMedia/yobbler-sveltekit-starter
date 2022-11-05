import type {Cookies, Handle} from '@sveltejs/kit'

import {isTheme, type Theme} from './types'

const getThemeFromCookies = (cookies: Cookies): Theme => {
	const theme = cookies.get('theme')

	return isTheme(theme) ? theme : 'auto'
}

export const handle: Handle = async ({event, resolve}) => {
	event.locals.theme = getThemeFromCookies(event.cookies)

	const response = await resolve(event)

	return response
}