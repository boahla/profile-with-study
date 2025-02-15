import "./App.css";
import { RootContainer } from "./components/common/RootContainer";
import MyView from "./sections/MyView";

function App() {
  return (
    <RootContainer className="App">
      <MyView />
    </RootContainer>
  );
}

export default App;
