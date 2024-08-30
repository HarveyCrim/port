import { Carousel } from 'nuka-carousel';
type arrayEl = {
    img: string,
    text:string
}
const ProjectCard = ({name, url, points, array} : {name: string, url: string, points: string[], array?: arrayEl[]}) => {
  return (
    <div className="min-w-[280px] max-w-[300px] md:max-w-[700px] border p-4 rounded-md border-slate-700 shadow-xl shadow-slate-800">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4 text-slate-300 text-sm md:text-lg">
                        <span>{name}</span>
                        <div>
                            <span className="text-sm">{"Live URL: "}</span>
                            <a className = "underline text-sm" href = {url} > {url}</a>
                        </div>
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
                {array && <div className='space-y-2 mt-[30px]'>
                    <h1 className='text-white text-4xl'>Flow</h1>
                {array && <div className='w-full md:border'>
                    <Carousel showDots showArrows>
                        {
                            array?.map((ele) => {
                                return <div className='min-w-[280px] md:min-w-[500px] md:px-5 px-3'>
                                    <img src = {ele.img} className='w-[280px] h-[200px] md:w-[500px] md:h-[300px]'/>
                                    <p className='text-white md:text-small text-xs'>{ele.text}</p>
                                </div>
                            })
                        }
                    </Carousel>
                </div>}
                </div>}
        </div>
  )
}

export default ProjectCard