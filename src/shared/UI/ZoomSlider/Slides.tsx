import React, { ReactNode } from 'react';
interface ISlides<T>{
    slides : T[],
    render : (e : T, i : number) => ReactNode
}
function Slides<T>({slides, render} : ISlides<T>){
    return (
        <>
            {slides.map((slide, index) => {
                return (
                <div className="image">
                    {render(slide, index)}
                </div>
                )
            })}
        </>
    );
};
export default React.memo(Slides) as typeof Slides;
