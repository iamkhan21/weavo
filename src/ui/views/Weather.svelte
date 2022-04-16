<script lang="ts">
import { onMount } from 'svelte';
import { loadWeatherData } from '@application/weather';
import WeatherCard from '@components/weather/WeatherCard.svelte';
import WeatherLoader from '@components/weather/WeatherLoader.svelte';

onMount(() => {
	loadWeatherData();
});
</script>

<article class="relative">
	<WeatherCard />
	<WeatherLoader />
</article>
