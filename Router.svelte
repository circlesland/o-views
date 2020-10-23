<script>
  import * as page from "page";
  import { OmoHead } from "./";
  import { Router } from "o-types";
  import Compositor from "./Compositor.svelte";

  let manifest = null;
  let title = "°os loading";
  let error = null;

  Router.page = page;
  if (Router.checkRoute()) {
    page("*", loadContent);
    page({ popstate: true, hashbang: true });
  }

  //   setTimeout(() => {
  //     page("/wallet");
  //   }, 3000);

  async function loadContent(ctx) {
    try {
      manifest = await Router.getManifestFromRoute(ctx);
    } catch (e) {
      error = "Error while loading manifest";
      manifest = null;
    }
  }
</script>

<OmoHead {title} />
{#if manifest}
  <Compositor bind:manifest bind:title bind:error />
{:else if error}
  <p>ERROR: {error}</p>
{:else}
  <p>°os loading</p>
{/if}
