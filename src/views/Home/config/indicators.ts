export type TypeIndicator = {
    imageSrc : string,
    description : string
}

export const indicators:TypeIndicator[] = [
    {
        description : "ЭКГ в шести стандартных отведениях",
        imageSrc : "images/indicator1.svg"
    },
    {
        description : "Пульсовую волну с расчетом сатурации крови кислородом",
        imageSrc : "images/indicator2.svg"
    },
    {
        description : "Дыхательные движения (график дыхания)",
        imageSrc : "images/indicator3.svg"
    }
]