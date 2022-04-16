<script lang="ts">
import { weatherLoading } from '@stores/weather';
</script>

{#if $weatherLoading}
	<p>Getting weather...</p>
{/if}
