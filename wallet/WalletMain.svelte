<script lang="ts">
  export let data: {
    transactions: [
      {
        from: string;
        to: string;
        amount: string;
        date: number;
        text: string;
      }
    ];
  };
</script>

{#if data.transactions}
  {#each data.transactions as t}
    <p>{t.from}</p>
    <p>{t.amount}</p>
  {/each}
{/if}
