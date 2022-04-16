<script>
import WeatherLocation from '@components/weather/WeatherLocation.svelte';
import WeatherState from '@components/weather/WeatherState.svelte';
import WeatherTemperature from '@components/weather/WeatherTemperature.svelte';
</script>

<section class="card flex flex-col justify-center items-center min-h-18rem">
	<WeatherLocation />
	<WeatherTemperature />
	<WeatherState />
</section>
