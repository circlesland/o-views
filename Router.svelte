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

<style>
  @media screen and (min-width: 600px) {
    .wrap {
      height: 95%;
    }
  }
  @media screen and (min-width: 1024px) {
    .wrap {
      height: 85%;
    }
  }
  @media screen and (min-width: 1600px) {
    .wrap {
      height: 75%;
    }
  }
</style>

<OmoHead {title} />

<div
  class=" bg-white h-screen flex flex-col items-center justify-center bg-grey-lighter bg-cover bg-center"
  style="background-image: url(https://source.unsplash.com/7awMZWDS4rg)">
  <div
    class="wrap shadow-2xl border border-gray-300 bg-white rounded-lg md:m-12 w-full h-full max-w-md justify-center">
    {#if manifest}
      <Compositor bind:manifest bind:title bind:error />
    {:else if error}
      <p>ERROR: {error}</p>
    {:else}
      <p>°os loading</p>
    {/if}
  </div>
</div>
