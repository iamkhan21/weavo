<script>
import { getWeatherState } from '@/domains/weather';
import { weather } from '@stores/weather';
</script>

<section>
	<h2 class="text-center">{getWeatherState($weather)}</h2>
</section>
