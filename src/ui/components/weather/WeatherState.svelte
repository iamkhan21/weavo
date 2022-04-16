<script>
import { getWeatherState } from '@domain/weather';
import { weather } from '@stores/weather';
</script>

<section>
	<h2>{getWeatherState($weather)}</h2>
</section>
