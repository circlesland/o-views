<script lang="ts">
  import { Arguments, Component, Definition } from "o-types";
  import { navigate } from "o-types";
  export let manifest: string;
  export let childStyle = "";
  export let title = "";
  export let error = "";

  let svelteComponent = null;
  let component: Component<Arguments, Definition> = null;
  if (manifest) {
    if (manifest == "") {
      error = "Manifest empty";
      manifest = null;
    } else {
      try {
        component = Component.fromString(manifest, window.o.registry);
        title = component.title;
        if (!component.isComposite()) {
          var leaf: any = component;
          svelteComponent = window.o.registry.getClass(leaf.getSvelteView());
        }
      } catch (e) {
        error = "error on loading manifest: " + e.message;
        manifest = null;
      }
    }
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

{#if component}
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
    <section
      style="{childStyle} overflow: hidden; height:100%;position:relative;">
      <svelte:component
        this={svelteComponent}
        on:navigateTo={navigate}
        data={JSON.stringify(component.data)} />
    </section>
  {/if}
{/if}
