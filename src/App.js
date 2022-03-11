import "./index.css"
import {ProductProvider} from "./react-context/ProductContext"
import MainPage from "./react-components/MainPage"

function App() {
  return (
    <>
      <ProductProvider>
        <MainPage />
      </ProductProvider>
    </>
  )
}

export default App