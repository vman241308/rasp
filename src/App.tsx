import { useRoutes } from "react-router-dom";
import Routes from "@/Routes";

function App() {
  const pages = useRoutes(Routes);
  return <div className="max-w-[440px] mx-auto pt-4 min-h-[100vh] flex flex-col">{pages}</div>;
}

export default App;
