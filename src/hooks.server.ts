import { COOKIE_NAME, SESSION_SECRET } from '$env/static/private';
import { setAuthCookie } from '$lib/auth/auth0';
import type { User } from '$lib/types/user';
import jwt from 'jsonwebtoken';

export const handle = async ({ event, resolve }) => {
	const cookie = event.cookies.get(COOKIE_NAME) ?? null;

	if (cookie === null) {
		event.locals.user = null;
		return resolve(event);
	}

	if (cookie) {
		// Extend the cookie
		const user = jwt.verify(cookie, SESSION_SECRET) as User;
		setAuthCookie(event.cookies, user);

		event.locals.user = user;

		return await resolve(event);
	}

	return await resolve(event);
};
