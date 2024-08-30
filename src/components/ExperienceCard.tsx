const ExperienceCard = ({date, role, org, points} : {date: string, role: string, org: string, points: string[]}) => {
  return (
    <div className="max-w-[700px] border p-4 rounded-md border-slate-700 shadow-xl shadow-slate-800">
                <div className="flex flex-col">
                    <span className="text-white font-mono text-lg">{date}</span>
                    <div className="flex gap-4 text-slate-300 text-sm md:text-lg">
                        <span>{role}</span>
                        |
                        <span>{org}</span>
                    </div>
                </div>
                <div className="mt-2 space-y-4">
                    {
                        points.map((point) => {
                            return <div className="flex gap-3 text-white text-sm md:text-lg">
                            <div className="pt-2">
                                <div className="bg-slate-100 rounded-full h-[10px] w-[10px]">
    
                                </div>
                            </div>
                            <span className=" p-0 m-0">{point}</span>
                        </div>
                        })
                    }
                </div>
            </div>
  )
}

export default ExperienceCard