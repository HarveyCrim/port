import AchieveAndProj from "../components/AchieveAndProj"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Tech from "../components/Tech"

const Home = () => {
  return (
    <div className="">
        <Navbar />
        <Hero />
        <Tech />
        <Experience/>
        <AchieveAndProj />
    </div>
  )
}

export default Home