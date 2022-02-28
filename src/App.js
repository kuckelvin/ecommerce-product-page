import "./index.css"
import TopLayout from "./react-components/TopLayout"
import PageArea from "./react-components/PageArea"
import {ProductProvider} from "./react-context/ProductContext"

function App() {

  return (
    <ProductProvider>
      <div className="container">
        <TopLayout />
        <PageArea />
      </div>
    </ProductProvider>
  )
}

export default App