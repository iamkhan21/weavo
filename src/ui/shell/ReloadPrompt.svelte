<script lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/svelte';

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
	onRegistered(swr) {
		console.log(`SW registered: ${swr}`);
	},
	onRegisterError(error) {
		console.log('SW registration error', error);
	}
});

function close() {
	offlineReady.set(false);
	needRefresh.set(false);
}

$: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
	<div class="pwa-toast" role="alert">
		<div class="message">
			{#if $offlineReady}
				<span> App ready to work offline </span>
			{:else}
				<span> New content available, click on reload button to update. </span>
			{/if}
		</div>
		{#if $needRefresh}
			<button on:click="{() => updateServiceWorker(true)}"> Reload</button>
		{/if}
		<button on:click="{close}">Close</button>
	</div>
{/if}

<style>
.pwa-toast {
	position: fixed;
	right: 0;
	bottom: 0;
	margin: 30px 15px;
	padding: 12px;
	border: 1px solid var(--surface-4);
	border-radius: 4px;
	z-index: 1;
	text-align: left;
	background-color: var(--surface-2);
	box-shadow: 3px 4px 5px 0 var(--surface-1);
}

.pwa-toast .message {
	margin-bottom: 8px;
}

.pwa-toast button {
	border: 1px solid var(--surface-4);
	outline: none;
	margin-right: 5px;
	border-radius: 2px;
	padding: 3px 10px;
}
</style>
