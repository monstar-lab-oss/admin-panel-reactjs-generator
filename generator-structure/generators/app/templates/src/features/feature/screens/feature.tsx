import { memo } from "react";

const name = memo(() => {
  return <div>Raw Template</div>;
});

export default name;
