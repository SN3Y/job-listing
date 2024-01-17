import bgHeader from '../../../public/images/bg-header-desktop.svg'
import Image from 'next/image'

export default function Header() {
    return(
        <div className='h-fit bg-Desaturated-Dark-Cyan'>
            <Image src={bgHeader} alt="bg-desktop" priority />
        </div>
    )
};
