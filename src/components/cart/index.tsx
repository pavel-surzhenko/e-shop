export const Cart: React.FC<ICart> = (props) => {
    const { image, title, price } = props

    return (
        <div>
            <div>
                <img src={`${image}`} alt='' />
            </div>
            <div>
                <h2>{title}</h2>
                <div>{price}</div>
            </div>
        </div>
    )
}

export interface ICart {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}
