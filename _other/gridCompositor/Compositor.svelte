<script lang="ts">
  import { Component, Leaf } from "o-types/pattern/CompositePattern";
  export let manifest: string;
  var component = Component.fromString(manifest, window.o.registry);
  export let childStyle = "";
  let svelteComponent = null;
  if (!component.isComposite()) {
    var leaf = component as Leaf<any, any>;
    svelteComponent = window.o.registry.getClass(leaf.getSvelteView());
  }
</script>

<style>
  .compositor {
    height: 100%;
    display: grid;
    grid-template-areas: var(--areas);
    grid-template-columns: var(--columns);
    grid-template-rows: var(--rows);
    overflow: hidden;
    position: relative;
  }
</style>

{#if component.isComposite()}
  <section
    class="compositor"
    style="{component.renderCompositeStyle()} {childStyle}">
    {#each component.getChildren() as child}
      <svelte:self
        manifest={child.component.toString()}
        childStyle={component.renderLeafStyle(child.component, child.args)} />
    {/each}
  </section>
{:else}
  <section style="{childStyle} overflow: hidden; height:100%;position:relative;">
    <svelte:component this={svelteComponent} />
  </section>
{/if}
