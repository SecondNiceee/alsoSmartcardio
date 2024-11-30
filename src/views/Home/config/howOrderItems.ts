export type TypeOrder = {
    imageSrc : string,
    h : string,
    p : string
}
export const howOrderItems:TypeOrder[] = [
    {
        imageSrc : "/images/cartIcon.png",
        h : 'Выбирайте',
        p : "Не забудьте положить понравившийся товар в корзину"
    },
    {
        imageSrc: "/images/truckIcon.png",
        h : "Оформляйте заказ",
        p : 'Выберите самый удобный вариант доставки'
    },
    {
        imageSrc : '/images/moneyIcon.png',
        h : 'Оплатите',
        p : 'Оплата при получени, вводить данные карты не нужно'
    }
]