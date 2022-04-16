<script lang="ts">
  import { onMount } from "svelte";
  import wretch from "wretch";

  onMount(()=>{
    wretch("/weather")
      .get()
      .json((json) => {
        console.log(json);
      });
  })
</script>
