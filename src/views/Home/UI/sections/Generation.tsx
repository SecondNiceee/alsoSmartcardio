import { routes } from "@/shared/config/routes";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";
import Reveal from "@/shared/UI/Reveal/Reveal";
import Image from "next/image";

const Generation = () => {
    return (
        <section className='section relative'>

            <Image className="w-[15%] md:block hidden absolute left-[5%] top-[10%] opacity-50 blur-[30px]" src={"/images/logo.jpg"} alt='#' width={1200} height={1006} />
            <Image className="right-[5%] md:block hidden bottom-[10%] absolute w-[15%] opacity-50 blur-[30px]" src={"/images/logo.jpg"} alt='#' width={1200} height={1006} />

            <div className="absolute left-[0%] z-20 top-[30%] opacity-50 md:opacity-70 lg:opacity-100 bg-[#16cffd] w-[200px] h-[200px] blur-[200px]"></div>
            <div  className="container relative z-30 gap-containerGap p-container flex flex-col">
                <Reveal character={CHARACTER.UPDOWN} className='h2'>СмартКардио® - забота о здоровье поколений</Reveal>

                <Reveal character={CHARACTER.LEFT} className="relative">
                    <div className="w-full left-1/2 -translate-x-1/2 max-w-[880px] h-full blur-3xl opacity-10 absolute  bg-[#5100FD] "/>
                    <Image  width={1400} height={1400} alt="generation" className='max-w-[880px] rounded-2xl w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] mx-auto relative z-30'  src={"/images/generation.png"}  />
                </Reveal>

                <Reveal character={CHARACTER.RIGHT} className='relative'>
                    <div className="bg-black w-4/5 rounded-3xl left-1/2 h-[1px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <OrderButton link={routes.store} className='w-[100%] relative z-50 max-w-[70%] md:max-w-[500px] bg-[#ffffff] py-[11px] md:py-[18px] px-[14px] mx-auto border-solid border-2 scale-hover'  >
                        <span className='button-p'>Заказать</span>
                    </OrderButton>
                </Reveal>
            </div>
        </section>
    );
};

export default Generation;