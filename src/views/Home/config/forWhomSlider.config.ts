
export type TWhoWhomSliderItem = {
    text : string,
    imgSrc : string
}
export const forWhomSliderConfig:TWhoWhomSliderItem[] = [
    {
    text : "Твой голос прекрасен что его хочется слушать вечно, не останавливаясь.",
    imgSrc : "/images/dasha1.jpg"
    },
    {
        text : "Твоя фигура так изумительна, что закрывая глаза , сложно представлять что - либо другое.",
        imgSrc : "/images/dasha2.jpg"
    },
    {
        text : "Твой волосы выглядят такими приятными, что хочется в них зарыться",
        imgSrc : "/images/dasha3.jpg"
    },
    {
        text : "Ну и ты просто богиня:>",
        imgSrc : "/images/dasha4.jpg"
    }
]

export const forWhomSliderImagesConfig:string[] = forWhomSliderConfig.map( (item) => item.imgSrc );