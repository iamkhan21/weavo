<script>
import { getCityAndCountry } from '@domain/location';
import { location } from '@stores/location';
</script>

<section>
	<h4>{getCityAndCountry($location)}</h4>
</section>
