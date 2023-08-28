import { getAsteroidNoun } from "@/utils/getNoun";
import s from "./Cart.module.css";

interface ICartProps {
    count: number;
    handleOrderSubmit: () => void;
}

export function Cart({ count, handleOrderSubmit }: ICartProps) {
    return (
        <div className={s.cart_box}>
            <div className={s.cart_info}>
                <h2 className={s.cart_title}>Корзина</h2>
                <p className={s.cart_count}>{`${count} ${getAsteroidNoun(
                    count
                )}`}</p>
            </div>
            <button
                onClick={handleOrderSubmit}
                className={s.cart_submit_button}
            >
                Отправить
            </button>
        </div>
    );
}
