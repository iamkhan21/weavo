<script>
import { getCityAndCountry } from '@/domains/location';
import { location }          from '@stores/location';
</script>

<section>
	<h4>{getCityAndCountry($location)}</h4>
</section>
