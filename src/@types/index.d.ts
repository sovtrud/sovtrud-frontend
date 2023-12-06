//eslint-disable-next-line
declare module "*.svg?react" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  // const src: string;
  // export default src;
  export default ReactComponent;
}
