import Featured from "./Components/Featured"
import NavBar from "./Components/NavBar"
import Slider from "./Components/Slider"
import ClientsPart from "./Components/clients"
import Footer from "./Components/footer"
import LatestNews from "./Components/latestNews"
import QuestoinPart from "./Components/question"

function App() {


  return (
    <div className="w-full mx-auto">
      <NavBar />
      <Slider />
      <Featured />
      <LatestNews />
      <ClientsPart />
      <QuestoinPart />
      <Footer />
    </div>
  )
}

export default App
