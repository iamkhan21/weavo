<script lang="ts">
import { weatherLoading } from '@stores/weather';
import { locationLoading } from '@stores/location';
</script>

{#if $weatherLoading || $locationLoading}
	<section class="backdrop absolute inset-0 flex flex-col items-center justify-center">
		<span class="loader"></span>
		<h4 class="mt-8">
			Getting {$locationLoading ? 'location' : 'weather'}...
		</h4>
	</section>
{/if}

<style lang="postcss">
.backdrop {
	background-color: var(--surface-1);
	border-radius: var(--radius-2);
	opacity: 0.95;
}

.loader {
	width: 48px;
	height: 48px;
	display: block;
	margin: 20px auto;
	box-sizing: border-box;
	position: relative;

	&::after {
		content: '';
		box-sizing: border-box;
		width: 48px;
		height: 48px;
		left: 0;
		bottom: 0;
		position: absolute;
		border-radius: 50% 50% 0;
		border: 15px solid var(--red-9);
		transform: rotate(45deg) translate(0, 0);
		animation: animMarker 0.4s ease-in-out infinite alternate;
	}

	&::before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 150%;
		width: 24px;
		height: 4px;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.9);
		animation: animShadow 0.4s ease-in-out infinite alternate;
	}
}

@keyframes animMarker {
	0% {
		transform: rotate(45deg) translate(5px, 5px);
	}
	100% {
		transform: rotate(45deg) translate(-5px, -5px);
	}
}

@keyframes animShadow {
	0% {
		transform: scale(0.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>
