import OmoHead from "./_other/OmoHead.svelte"
import ViewNotRegistered from "./1_atoms/ViewNotRegistered.svelte";

import Blubb from "./_other/Blubb.svelte"
import ErrorView from "./_other/ErrorView.svelte"
import GetTrust from "./_other/GetTrust.svelte"
import Register from "./_other/Register.svelte"
import Safe from "./_other/Safe.svelte"
import TextileLogin from "./_other/TextileLogin.svelte"
import TrustSomeone from "./_other/TrustSomeone.svelte"
import UnlockSafe from "./_other/UnlockSafe.svelte"
import Wallet from "./_other/Wallet.svelte"
import WalletLogin from "./_other/WalletLogin.svelte"

import App from "./_other/App.svelte";
import GridCompositor from "./_other/gridCompositor/Compositor.svelte";
import type { Component, Composite, Definition, Leaf, SvelteView,  } from "o-types";
import type { Arguments as Args ,Constructor} from "o-types";
import { CssGridArguments, CssGridDefinition, CssGridLayout, DefaultLayout, SvelteViewArguments, SvelteViewDefinition, SvelteViewLeaf } from "./_other/foo";

export { App, GridCompositor, OmoHead, ViewNotRegistered, Component };
export let Views: SvelteView[] = [Blubb, ErrorView, GetTrust, Register, Safe, TextileLogin, TrustSomeone, UnlockSafe, Wallet, WalletLogin];
export let Arguments: { new(): Args }[] = [CssGridArguments, SvelteViewArguments];
export let Definitions: { new(): Definition }[] = [SvelteViewDefinition, CssGridDefinition];
// export let Layouts: { Constructor<Composite> }[] = [CssGridLayout, DefaultLayout];
// export let Leafs: { Constructor<Leaf> }[] = [SvelteViewLeaf];

