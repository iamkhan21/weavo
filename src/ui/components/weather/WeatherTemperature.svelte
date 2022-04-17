<script>
import { getActualTemperature, getApparentTemperature } from '@/domains/weather';
import { weather } from '@stores/weather';
</script>

<section class="py-10">
	<p class="temperature temperature--actual">
		Currently, it's actually
		{getActualTemperature($weather)}<sub class="unit">°C</sub>,<br /> but feels like
	</p>
	<h2 class="temperature temperature--apparent">
		{getApparentTemperature($weather)}<sub class="unit">°C</sub>
	</h2>
</section>

<style lang="postcss">
.temperature {
	line-height: 1.3;

	&--actual {
		font-size: 1.6rem;
		font-weight: 300;
	}

	&--apparent {
		font-size: 8rem;
	}
}

.unit {
	font-size: 0.7em;
	color: var(--text-2);
	vertical-align: baseline;
}
</style>
