<script lang="ts">
  import { navigateTo, o } from "o-types";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button
  on:click={() => navigateTo({ dapp: o.WALLET, route: 'index' }, dispatch)}>
  index</button>

<button
  on:click={() => navigateTo({ dapp: o.WALLET, route: 'wallet' }, dispatch)}>
  wallet</button>
