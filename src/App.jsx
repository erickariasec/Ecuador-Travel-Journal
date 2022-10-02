import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  const cards = data.map(content => {
    return <Card 
      key={content.id}
      content={content}
    />
  })

  return (
    <div className="App">
      <Navbar />
      <div className="cards-list">
        {cards}
      </div>
    </div>
  )
}

export default App
