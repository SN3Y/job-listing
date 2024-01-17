import { filterFunctions } from "@/types/types";
import x from "./icon-remove.svg"
import Image from "next/image";


export default function FilterHeader({filter, clearFilter, clearAllFilter}:filterFunctions) {

    return(
        <div className={filter.length === 0 ? "hidden" : "relative bg-white ps-6 flex top-[-3vh]" + 
        " md:top-[-5vh] w-[70vw] left-[15%] items-center h-fit py-2 shadow-xl"}>
          <div className="w-10/12 flex flex-wrap">
          {filter.map(filtro => {
                return(
                    
                            <button key={filtro} onClick={()=>clearFilter(filtro)} className="flex items-center gap-1 bg-Light-Grayish-Cyan-(Background) text-Dark-Grayish-Cyan rounded-md p-1 px-1 m-2 text-start">
                                {filtro}
                                <div className="bg-Dark-Grayish-Cyan h-full items-center hover:bg-Very-Dark-Grayish-Cyan">
                                    <Image src={x} width={25} height={14} alt="x"/>
                                    </div>
                            </button>
                        
                    
                )
            })}
          </div>
          <div className="items-center justify-end w-fit">
            <button onClick={()=>clearAllFilter()} >
                <span className="text-Dark-Grayish-Cyan text-end hover:underline">Clear</span>
            </button>
          </div>
        </div>
        
    )
};
