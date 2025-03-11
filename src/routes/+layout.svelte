<script lang="ts">
	import Login from '$lib/example/Login.svelte';
	import { setContext } from 'svelte';


  let { children, data } = $props();


  setContext("user", data.user);
</script>

<Login />

<main>
  {@render children?.()}
</main>
