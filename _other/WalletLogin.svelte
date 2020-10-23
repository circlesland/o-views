<script lang="ts">
  import { navigateTo, o } from "o-types";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // import { navigateTo } from "../../kernel/viewRegistry";
  // import { CirclesWrapper } from "../../kernel/circles-protocol/circlesActions";
  let seedPhrase = "";
  function login() {
    // if (seedPhrase == "") return;
    // let account = CirclesWrapper.safeOwnerFromKeyphrase(seedPhrase);
    // //@todo catch some errors
    // CirclesWrapper.storeAccount(account);
    // navigateTo("safe");
    alert("loginaction");
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
  .grid {
    @apply h-full w-full;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-rows: 40px 1fr auto;
    grid-template-columns: 1fr;
  }
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
    @apply overflow-y-scroll h-full bg-gray-100 p-8;
  }
  footer {
    grid-area: footer;
  }
</style>

<div class="grid">
  <header
    class="flex flex-col justify-center bg-grey-lighter border-b border-gray-300">
    <div class="text-primary font-bold uppercase text-center">Login</div>
  </header>

  <main class="overflow-y-scroll h-full bg-gray-100 p-8;">
    <p class="text-sm py-4 text-center text-gray-700">Yeah!</p>
  </main>

  <footer class="text-sm border-t border-gray-300 p-6">
    <div>
      <!-- <form method="POST" onsubmit="return false;">
        <div
          class="w-full p-3 bg-primary uppercase font-bold text-white text-center rounded-lg">
          Oida!
        </div>
      </form> -->
    </div>
  </footer>
</div>

<!-- 

<div class=" bg-gray-100 p-8">
  <h1 class="text-primary text-3xl font-bold pb-2">Login</h1>
</div>
<div class="h-full overflow-y-scroll">
  <div class="p-4 ">
    <h3 class="text-sm text-primary font-medium">
      Please enter your Seedphrase
    </h3>
    <div class="box border rounded flex flex-col     bg-white">
      <textarea
        placeholder="word1 word2 ... word24"
        bind:value={seedPhrase}
        class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" />
    </div>
    <button
      class="w-full mt-2"
      on:click={() => navigateTo({ dapp: o.WALLET, route: 'wallet' }, dispatch)}>login</button>
  </div>
</div> -->
