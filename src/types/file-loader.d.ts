declare module "*.png" {
  const url: string;
  export default url;
}

declare module "*.jpg" {
  const url: string;
  export default url;
}

declare module "*.svg" {
  import type * as React from "react";
  type SvgrComponent = React.FC<React.SVGAttributes<SVGElement>>;

  const url: string;
  export default url;

  export const ReactComponent: SvgrComponent;
}
