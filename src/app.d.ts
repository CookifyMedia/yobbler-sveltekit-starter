import type { User } from '$lib/types';
import PocketBase, { Admin, Record } from 'pocketbase';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	declare namespace App {
		import type {Theme} from './types'


		interface Locals  {
			theme: Theme,
			pb: PocketBase,
			user: User | Admin | undefined,
		}

		interface Platform {}

		interface Session {
			theme: Theme
		}

		interface Stuff {}
	}
}