export type TypeContact = {
    imageSrc : string,
    link : string,
    name : string,
    iconSvg : string
}

export const contacts:TypeContact[] = [
    {
        iconSvg : "/images/vk.svg",
        imageSrc : "/images/vk.jpg",
        link : "https://vk.com/smart_cardio",
        name : "Научно-популярная медицина"
    },
    {
        iconSvg : "/images/telegram.svg",
        imageSrc : "/images/tg.jpg",
        link : "https://t.me/smart_cardio",
        name : "Для врачей"
    },
    {
        iconSvg : "/images/dzen.svg",
        imageSrc : "/images/blog.jpg",
        link : "https://dzen.ru/smartcardio",
        name : "Наш блог"
    }
]