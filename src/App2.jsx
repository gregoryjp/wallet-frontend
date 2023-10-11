import { RouterProvider } from "react-router-dom";
import RouterMain from "./routes/RouterMain";

export const App2 = () => {
  return (
    <div>
      <RouterProvider router={RouterMain} />
    </div>
  );
};
