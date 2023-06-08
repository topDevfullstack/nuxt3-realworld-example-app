import { useCookie, useRuntimeConfig, type CookieOptions } from 'nuxt/app';

export const useToken = <T = string | null | undefined>(options: CookieOptions<T> = {}) => {
	const config = useRuntimeConfig();
	const token = useCookie(config.public.cookieName, options);

	const get = () => {
		return `Token ${token.value}`;
	};

	const set = (value: T) => {
		token.value = value;
	};

	return { get, set };
};
