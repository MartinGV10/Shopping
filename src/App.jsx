import './CSS/App.css'
import Footer from './Footer'
import Home from './Home'
import Nav from './Nav'

function App() {

  return (
    <>
      <div className="whole-page">
        <Nav />

        <div className="main">
          <Home />
        </div>
        
        <Footer />
      </div>
    </>
  )
}

export default App
