import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/TodoListWithReduxThunk/',
	server: {
		proxy: {
			'/todoapi': {
				target: 'https://andreypachalia.ru',
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
