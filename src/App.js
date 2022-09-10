import "./styles/index.scss";
import MusicPlayerPage from "./pages/MusicPlayerPage";
import SignInPage from "./pages/SignInPage";
import LoginPage from "./pages/LogInPage";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
