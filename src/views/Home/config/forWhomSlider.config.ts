
export type TWhoWhomSliderItem = {
    text : string,
    imgSrc : string
}
export const forWhomSliderConfig:TWhoWhomSliderItem[] = [
    {
<<<<<<< HEAD
    text : "Твой голос прекрасен что его хочется слушать вечно, не останавливаясь.",
    imgSrc : "/images/dasha1.jpg"
    },
    {
        text : "Твоя фигура так изумительна, что закрывая глаза , сложно представлять что - либо другое.",
        imgSrc : "/images/dasha2.jpg"
    },
    {
        text : "Твой волосы выглядят такими приятными, что хочется в них укутаться",
        imgSrc : "/images/dasha3.jpg"
    },
    {
        text : "Ну и ты просто богиня:>",
        imgSrc : "/images/dasha4.jpg"
=======
    text : "СмартКардио® - надежный помощник в мониторинге сердечного ритма. Полностью беспроводное устройство с автоматическим анализом показателей.",
    imgSrc : "/images/for-users.webp"
    },
    {
        text : "СмартКардио® - определение сердечного ритма Ваших пациентов всего за 20 секунд. Точная информация для экономии времени до принятия ключевых решений.",
        imgSrc : "/images/for-doctors.webp"
    },
    {
        text : "Мы предоставляем телемедицинскую систему, позволяющую проводить диагностику и оценивать динамику заболеваний дистанционно.",
        imgSrc : "/images/for-hospitals.webp"
>>>>>>> 53e526b (asd)
    }
]

export const forWhomSliderImagesConfig:string[] = forWhomSliderConfig.map( (item) => item.imgSrc );