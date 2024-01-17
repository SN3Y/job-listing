import { IconType } from "@/types/types";

export default function Icons({url, desc}:IconType) {
    return(
        <div className="h-full relative">
            <img src={url} alt={desc} />
        </div>
    )
};
