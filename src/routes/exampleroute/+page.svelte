<script lang="ts">
	import { getContext } from "svelte";

  const user = getContext("user");
</script>


{#if user}
  Logged in as {user.name}
{:else}
  You are not logged in
{/if}
