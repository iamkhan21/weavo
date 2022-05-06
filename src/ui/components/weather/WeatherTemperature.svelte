<script>
import { getActualTemperature, getApparentTemperature } from '@/domains/weather';
import { weather } from '@stores/weather';
</script>

<section class="py-8 text-center">
	<p class="font-light text-2xl">
		Currently, it's actually
		{getActualTemperature($weather)}<sub class="unit">°C</sub>,<br /> but feels like
	</p>
	<h2 class="leading-none text-8xl">
		{getApparentTemperature($weather)}<sub class="unit">°C</sub>
	</h2>
</section>
