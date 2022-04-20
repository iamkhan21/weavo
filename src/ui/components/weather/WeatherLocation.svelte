<script>
import { getCityAndCountry } from '@/domains/location';
import { location } from '@stores/location';
</script>

<section>
	<h3>{getCityAndCountry($location)}</h3>
</section>
