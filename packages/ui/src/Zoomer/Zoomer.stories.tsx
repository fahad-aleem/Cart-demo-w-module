import { Zoomer } from "./Zoomer";

export default {
  title: "Zoomer",
  component: Zoomer,
};

export const ZoomerComponent = () => {
  return <Zoomer setZoomLevel={console.log} />;
};
