<script>
import { getWindDirection, getWindSpeed } from '@domains/weather';
import { weather } from '@stores/weather';
</script>

<section class="py-2">
	<p class="font-light text-2xl">
		Wind {getWindDirection($weather)}
		{getWindSpeed($weather)}<sub class="unit">km/h</sub>
	</p>
</section>
