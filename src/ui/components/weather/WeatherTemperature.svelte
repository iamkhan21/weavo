<script>
import { getTemperature } from '@/domains/weather';
import { weather }        from '@stores/weather';
</script>

<section>
	<p class="temperature leading-tight">
		{getTemperature($weather)}<sub class="unit">°C</sub>
	</p>
</section>

<style>
.temperature {
	font-size: 8rem;
	font-weight: 900;
}

.unit {
	font-size: 0.7em;
	color: var(--text-2);
	vertical-align: baseline;
}
</style>
