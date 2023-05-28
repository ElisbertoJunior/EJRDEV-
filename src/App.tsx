import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style'
import { useState } from 'react'
import lightTheme from './themes/ligth'
import darkTheme from './themes/dark'
import Header from './components/Header'
import ThemeButton from './components/ThemeButton'

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(true)

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <ThemeButton onClick={() => setUseDarkTheme(!useDarkTheme)} />
    </ThemeProvider>
  )
}

export default App
