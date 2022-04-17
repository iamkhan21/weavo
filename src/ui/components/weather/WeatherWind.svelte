<script>
import { getWindDirection, getWindSpeed } from '@domains/weather';
import { weather } from '@stores/weather';
</script>

<section class="py-2">
	<p>Wind {getWindDirection($weather)} {getWindSpeed($weather)} km/h</p>
</section>
