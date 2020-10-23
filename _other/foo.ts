import { Definition, Arguments, Leaf, Composite, Constructor, Component } from "o-types";

export class CssGridDefinition extends Definition {
    templateAreas: string;
    templateRows: string;
    templateColumns: string;
}

export class CssGridArguments extends Arguments {
    area: string
}



export class CssGridLayout extends Composite<CssGridArguments, CssGridDefinition> {
    renderLeafStyle(child: Component<any, any>, args: CssGridArguments): string {
        let hidden = child.isHidden() ? "display:none;" : "";
        return `grid-area: ${args.area}; ${hidden}`;
    }

    renderCompositeStyle(): string {
        var definition = this.getDefinition();
        return `--areas: ${definition.templateAreas};
                --columns: ${definition.templateColumns}; 
                --rows: ${definition.templateRows};`;
    }

    static new(definition: CssGridDefinition) {
        return super.create(CssGridLayout, definition, new CssGridArguments());
    }

}









export class DefaultLayout extends CssGridLayout {
    static new() {
        return super.new({ templateAreas: "main", templateColumns: "1fr", templateRows: "1fr" });
    }
}

export class SvelteViewDefinition extends Definition { }
export class SvelteViewArguments extends Arguments { viewName: string }

export class SvelteViewLeaf extends Leaf<SvelteViewArguments, SvelteViewDefinition> {
    getSvelteView(): string {
        return this.viewName;
    }

    viewName:string;

    renderLeafStyle(child: Component<any, any>, args: SvelteViewArguments): string {
        return "";
    }

    renderCompositeStyle(): string {
        return ""
    }

    static new() {
        return super.create(SvelteViewLeaf, new SvelteViewDefinition(), new SvelteViewArguments());
    }
}