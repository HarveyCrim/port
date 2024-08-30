import { BiLogoPostgresql } from "react-icons/bi"
import { DiMongodb, DiNodejs } from "react-icons/di"
import { FaGitSquare, FaJava, FaReact } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"

const Tech = () => {
  return (
    <div className="bg-[#1b1f23] h-[500px] flex flex-col pt-[100px] items-center gap-4 md:gap-14">
        <div className="flex justify-center w-full">
            <span className="text-slate-100 text-4xl md:text-6xl">Technologies</span><span className="text-pink-500 text-4xl">.</span>
        </div>
        <div className="flex flex-row flex-wrap justify-center px-7 md:p-0 w-fit gap-4 space-y-4 items-center">
            <FaReact size = {80} className="fill-blue-300"/>
            <DiNodejs size = {80} className="fill-green-500"/>
            <SiTypescript size = {80} className="fill-blue-600"/>
            <FaJava size = {80} className="fill-orange-500"/>
            <FaGitSquare size = {80} className="fill-red-600"/>
            <DiMongodb size = {80} className="fill-green-700"/>
            <BiLogoPostgresql size = {80} className="fill-blue-700"/>
        </div>
    </div>
  )
}

export default Tech