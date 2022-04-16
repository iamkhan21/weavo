<script>
import { getWeatherState } from '@/domains/weather';
import { weather }         from '@stores/weather';
</script>

<section>
	<h2>{getWeatherState($weather)}</h2>
</section>
