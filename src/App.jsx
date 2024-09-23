import { ThemeProvider } from "@emotion/react"
import { theme } from "./style/theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CssBaseline } from "@mui/material"
import Main from "./layout/Main"
import Products from "./pages/Products"
import AddProduct from "./pages/AddProduct"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
              <Route index element={<>home</>}/>
              <Route path='products'>
                <Route index element={<Products />}/>
                <Route path='add' element={<AddProduct />}/>
                <Route />
              </Route>
              <Route path='stock' element={<>stock</>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
