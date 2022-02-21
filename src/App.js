import "./index.css"
import TopLayout from "./react-components/TopLayout.js"
import PageArea from "./react-components/PageArea.js"

function App() {
  return (
    <div className="container">
      <TopLayout />
      <PageArea />
    </div>
  );
}

export default App