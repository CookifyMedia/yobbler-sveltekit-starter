import type {Cookies, Handle} from '@sveltejs/kit'
import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/helpers';
import type { User } from '$lib/types';
import {isTheme, type Theme} from './types'
import { env } from '$env/dynamic/public';

const getThemeFromCookies = (cookies: Cookies): Theme => {
	const theme = cookies.get('theme')

	return isTheme(theme) ? theme : 'auto'
}

export const handle: Handle = async ({event, resolve}) => {
	event.locals.theme = getThemeFromCookies(event.cookies)

	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs<User>(event.locals.pb.authStore.model as User);
	} else {
    	event.locals.user = undefined
  	}

	const response = await resolve(event)

	// TODO: secure before deployment
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response
}