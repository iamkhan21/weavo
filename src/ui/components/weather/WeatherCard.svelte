<script>
import WeatherLocation from '@components/weather/WeatherLocation.svelte';
import WeatherState from '@components/weather/WeatherState.svelte';
import WeatherTemperature from '@components/weather/WeatherTemperature.svelte';
import WeatherWind from '@components/weather/WeatherWind.svelte';
</script>

<section class="card flex flex-col justify-center items-center min-h-27rem">
	<WeatherLocation />
	<WeatherTemperature />
	<WeatherWind />
	<WeatherState />
</section>
