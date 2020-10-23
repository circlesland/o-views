<script lang="ts">
  //   debugger;

  export let data: any;

  export let dataObj: {
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
  dataObj = JSON.parse(data);

  console.log(data);
</script>

{data}
{#if dataObj.transactions}
  {#each dataObj.transactions as t}
    <p>{t.from}</p>
    <p>{t.amount}</p>
  {/each}
{/if}
