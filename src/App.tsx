import { useRoutes } from "react-router-dom";
import Routes from "@/Routes";

function App() {
  const pages = useRoutes(Routes);
  return <>{pages}</>;
}

export default App;
