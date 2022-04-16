import App from './App.svelte';
import './assets/style/main.pcss';
import 'uno.css';

if (process.env.NODE_ENV === 'development') {
	(async function () {
		const { worker } = await import('./mocks/browser');
		worker.start();
	})();
}

const app = new App({
	target: document.getElementById('app')
});

export default app;
