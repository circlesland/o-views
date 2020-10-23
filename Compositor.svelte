<script lang="ts">
  import { OmoHead } from "./";
  import { Arguments, Component, Definition } from "o-types";
  // import { navigate } from "o-types";

  export let manifest: string;
  export let childStyle = "";

  let svelteComponent = null;
  let component: Component<Arguments, Definition> = null;

  // if (manifest != "") {
  //   component = Component.fromString(manifest, window.o.registry);
  //   if (!component.isComposite()) {
  //     var leaf: any = component;
  //     svelteComponent = window.o.registry.getClass(leaf.getSvelteView());
  //   }
  // }
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

{#if component}
  {#if component.getParent() == null}
    <OmoHead title={component.title} />
  {/if}

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

  <!-- on:navigateTo={(args) => navigate(args)} -->
    <section
      style="{childStyle} overflow: hidden; height:100%;position:relative;">
      <svelte:component
        this={svelteComponent}
        />
    </section>
  {/if}
{/if}
