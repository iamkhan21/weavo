import App from '@/App.svelte';
import '@assets/style/_main.pcss';
import 'uno.css';

if (process.env.NODE_ENV === 'development') {
	const { worker } = await import('@/mocks/browser');
	await worker.start();
}

const app = new App({
	target: document.getElementById('app')
});

export default app;
