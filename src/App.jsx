import { ThemeProvider } from "@emotion/react"
import { theme } from "./style/theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CssBaseline } from "@mui/material"
import Main from "./layout/Main"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
              <Route index element={<>teste</>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
