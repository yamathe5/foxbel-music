import "./styles/index.scss";
import UnauthenticatedPage from "./UnauthenticatedPage";
import AuthenticatedPage from "./AuthenticatedPage";
import { useAuth } from "./context/auth-context";

function App() {
  // let user = null;
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? (
        <AuthenticatedPage></AuthenticatedPage>
      ) : (
        <UnauthenticatedPage></UnauthenticatedPage>
      )}
    </div>
  );
}

export default App;
