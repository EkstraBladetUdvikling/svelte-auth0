# Auth0 Sveltekit implementation example

To get a new svelte project with auth0 implementation run the following

```
npx degit EkstraBladetUdvikling/svelte-auth0 svelte-app-withAuth0
cd svelte-app-withAuth0
```

Edit the .env.example file with the correct auth0 application variables and remove the .example part of the file

```
yarn dev --open
```

Navigate to the provided URL. You should see the app running. And you should get an option to log in.

See how user context is used in components (/src/lib/example/Login.svelte) and subroutes (/src/routes/exampleroute)
