import type {Layout} from "o-types";

export const LayoutHeaderMain : Layout = {
  areas: "'header' 'main'",
  columns: "1fr",
  rows: "2rem 1fr",
};

export const LayoutHeaderMainFooter: Layout = {
  areas: "'header' 'main' 'footer'",
  columns: "1fr",
  rows: "3rem 1fr 4rem",
};
