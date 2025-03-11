<script lang="ts">
  import { getContext } from "svelte";


  let user = getContext("user");

</script>


{#if user}
  <h1>Welcome {user.name}</h1>
  <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
  <a href="/api/auth/logout">Logout</a>
{:else}
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
  <a href="/api/auth/login">Login</a>

{/if}
