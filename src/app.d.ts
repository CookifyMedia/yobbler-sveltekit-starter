// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	import type {Theme} from './types'


	interface Locals  {
		theme: Theme
	}

	interface Platform {}

	interface Session {
		theme: Theme
	}

	interface Stuff {}
}
