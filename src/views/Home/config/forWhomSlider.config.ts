
export type TWhoWhomSliderItem = {
    text : string,
    imgSrc : string
}
export const forWhomSliderConfig:TWhoWhomSliderItem[] = [
    {
    text : "СмартКардио® - надежный помощник в мониторинге сердечного ритма. Полностью беспроводное устройство с автоматическим анализом показателей.",
    imgSrc : "/images/for-users.png"
    },
    {
        text : "СмартКардио® - определение сердечного ритма Ваших пациентов всего за 20 секунд. Точная информация для экономии времени до принятия ключевых решений.",
        imgSrc : "/images/for-doctors.png"
    },
    {
        text : "Мы предоставляем телемедицинскую систему, позволяющую проводить диагностику и оценивать динамику заболеваний дистанционно.",
        imgSrc : "/images/for-hospitals.png"
    }
]

export const forWhomSliderImagesConfig:string[] = forWhomSliderConfig.map( (item) => item.imgSrc );