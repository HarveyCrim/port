import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className = "bg-[#000000] opacity-85 flex sticky top-0 justify-between items-center px-6 h-[10vh]">
      <div className="flex flex-col relative">
        <span className="text-white font-mono text-2xl">Harwin</span>
        <span className="text-white text-xs font-bold -rotate-6 absolute bottom-[-7px] right-[-7px]">Web Dev...</span>
      </div>
      <div className="flex items-center gap-4">
        <a href = "https://github.com/HarveyCrim"><FaGithub className="fill-white hover:fill-slate-400" size = {40}/></a>
      </div>
    </div>
  )
}

export default Navbar