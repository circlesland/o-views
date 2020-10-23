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

<div class="h-full overflow-y-scroll">
  <div class="h-full bg-gray-100 p-8">
    <h1 class="text-primary text-3xl font-bold pb-2">Login</h1>
  </div>
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
</div>
