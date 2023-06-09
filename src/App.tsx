import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './style'
import { useState } from 'react'
import lightTheme from './themes/ligth'
import darkTheme from './themes/dark'
import Header from './components/Header'
import ThemeButton from './components/ThemeButton'

import Routes from './routes'
import Footer from './components/Footer'

import sun from './assets/icons/sun.png'
import moon from './assets/icons/moon.png'

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(true)

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <div className="container">
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>
      <ThemeButton onClick={() => setUseDarkTheme(!useDarkTheme)}>
        <img height={45} src={useDarkTheme ? moon : sun} />
      </ThemeButton>
    </ThemeProvider>
  )
}

export default App
