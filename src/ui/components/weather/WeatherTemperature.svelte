<script>
import { getActualTemperature, getApparentTemperature } from '@/domains/weather';
import { weather } from '@stores/weather';
</script>

<section class="py-10 text-center">
	<p class="font-light text-2xl">
		Currently, it's actually
		{getActualTemperature($weather)}<sub class="unit">°C</sub>,<br /> but feels like
	</p>
	<h2 class="leading-none temperature--apparent">
		{getApparentTemperature($weather)}<sub class="unit">°C</sub>
	</h2>
</section>

<style lang="postcss">
.temperature--apparent {
	font-size: 8rem;
}
</style>
