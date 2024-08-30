const Hero = () => {
  return (
    <div className="bg-[#1b1f23] h-full flex flex-col-reverse md:flex-row md:px-8 md:h-[90vh]">
        <div className="md:w-[50%] flex flex-col justify-center space-y-12">
            <h1 className = "bg-gradient-to-r text-center md:text-start from-pink-600 via-blue-500 to-purple-400 text-3xl md:text-6xl font-medium text-transparent bg-clip-text">Harwin Sodhi</h1>
            <div className="space-y-4">
                <p className="text-3xl text-center md:text-start font-mono text-slate-300">Full Stack Developer</p>
                <h5 className="text-white font-serif text-center md:text-start p-6 md:p-0 text-sm md:text-lg">I am a passionate full stack developer with a knack for 
                    crafting robust and scalable web applications. With 1 year
                    of hands-on experience, I have honed my skills in front-end
                    technologies like React and Next.js, as well as backend 
                    technologies like Node.js, Express and MongoDB. My goal is
                    to give my 100% to every organization that gives me a chance
                    and contribute to something meaningful. From building my first
                    HELLO WORLD web page to building complex web services that use 
                    a plethora of frameworks, one thing has always been constant: my 
                    joy in seeing the ideas in my head turn into something tangible. 
                    This is what drives to learn new technologies on the horizon.
                </h5>
            </div>
        </div>
        <div className="md:w-[50%] flex mt-[50px] md:mt-[0px] justify-center items-center">
            <img src = "https://res.cloudinary.com/dkfznhahe/image/upload/v1725007444/picq_vkelm9.png" className="w-[50%] h-[50%] md:w-[450px] md:h-[450px]"/>
        </div>
    </div>
  )
}

export default Hero