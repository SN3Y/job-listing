import { dataType } from "@/types/types";
import Icons from "./Icons";

export default function Card(
    {   
        id,
        company,
        logo,
        condition,
        featured,
        position,
        postedAt,
        contract,
        location,
        languages,
        tools,
        role,
        level,
        filterFunction,
        addFilter


}:dataType) {

    function handleClick(skill:string){
        filterFunction(skill)
    }

    const Skills = (skill:string) =>{
        return(
            <button key={skill} className="rounded-md p-1 px-1 m-2 bg-Light-Grayish-Cyan-(Background) h-fit 
            items-center hover:bg-Desaturated-Dark-Cyan  text-Desaturated-Dark-Cyan hover:text-white" onClick={()=>handleClick(skill) + addFilter(skill) }>
                {skill}
            </button>
        )
    }
    const rule = `${condition === true ? "border-s-[4px]" : ""} + w-[70vw] bg-Grayish-Cyan-(Background) border-Dark-Grayish-Cyan h-fit grid " 
    + " md:flex relative my-8 md:my-2 shadow-2xl rounded-md`
    
    return(
        <div key={id} className={rule}>
            <div className="relative top-[-40px] left-4 md:top-[40px] md:w-40">
                <Icons url={logo} desc={company}/>
            </div>
            <div>
            <div className="grid text-nowrap grid-rows-4 w-6/12 md:gap-y-2 relative left-10 top-[-10px] md:top-[10px] md:items-center">
                <div className="flex gap-x-2 text-nowrap md:mt-2 items-start">
                    <p className="h-6 rounded-md bg-black text-Dark-Grayish-Cyan font-bold">{company}</p>
                    {condition != false ? <div className="md:h-6 rounded-xl bg-Dark-Grayish-Cyan px-2 py-[0.5px]">
                        <p className="text-Light-Grayish-Cyan-(Background)">NEW!</p>
                        </div>: ""}
                    {featured != false ? <div key={id} className="md:h-6 rounded-xl px-2 bg-Very-Dark-Grayish-Cyan md:py-[0.5px]">
                        <p className="text-Light-Grayish-Cyan-(Background)">FEATURED</p>
                        </div> : ""}
                </div>
                <div className="flex text-Very-Dark-Grayish-Cyan font-bold md:text-xl">
                    {position}
                </div>
                <div className="flex gap-x-2 items-center md:border-none border-b-[1px] w-9/12 text-Dark-Grayish-Cyan">
                    {postedAt}
                    <div className="w-1 h-1 rounded-full bg-Dark-Grayish-Cyan text-Dark-Grayish-Cyan">.</div>
                    {contract}
                    <div className="w-1 h-1 rounded-full bg-Dark-Grayish-Cyan text-Dark-Grayish-Cyan">.</div>
                    {location}
                </div>
                
            </div>
            </div>
            <div className="flex flex-wrap p-2 md:w-full items-center ps-8 md:ps-0 md:justify-end">
                    <button className="rounded-md p-1 px-1 m-2 bg-Light-Grayish-Cyan-(Background) h-fit 
                    items-center hover:bg-Desaturated-Dark-Cyan text-Desaturated-Dark-Cyan hover:text-white" onClick={()=>handleClick(role) + addFilter(role)}>
                        {role}
                    </button>
                    <button className="rounded-md p-1 px-1 m-2 bg-Light-Grayish-Cyan-(Background) h-fit 
                    items-center hover:bg-Desaturated-Dark-Cyan  text-Desaturated-Dark-Cyan hover:text-white" onClick={()=>handleClick(level) + addFilter(level)}>
                        {level}
                    </button>
                    {   
                        [...languages, ...tools].map(skill => Skills(skill))
                    }
                </div>
        </div>
    )
};
