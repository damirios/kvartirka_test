import { getAsteroidNoun } from "@/utils/getNoun";
import s from "./Cart.module.css";

interface ICartProps {
    count: number;
}

export function Cart({ count }: ICartProps) {
    return (
        <div className={s.cart_box}>
            <h2 className={s.cart_title}>Корзина</h2>
            <p className={s.cart_count}>{`${count} ${getAsteroidNoun(
                count
            )}`}</p>
            <button className={s.cart_submit_button}>Отправить</button>
        </div>
    );
}
