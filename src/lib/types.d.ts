import type { Record } from 'pocketbase';
import type { z } from 'zod';
import { projectDto, updateCommentDto, createCommentDto } from '$lib/schemas';
import { registerUserDto, loginUserDto } from './schemas';

interface User extends Record {
	id: string;
	firstName: string;
	lastName: string;
	avatar?: string;
}

type RegisterUserDto = z.infer<registerUserDto>;
type LoginUserDto = z.infer<loginUserDto>;

