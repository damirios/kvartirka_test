import s from "./Header.module.css";
import { Passion_One } from "next/font/google";

const passionOneFont = Passion_One({
    weight: "400",
    subsets: ["latin"],
});

export function Header() {
    return (
        <header className={s.header_box}>
            <h1 className={`${s.header_title} ${passionOneFont.className}`}>
                ARMAGEDDON 2023
            </h1>
            <h2 className={s.header_subtitle}>
                <p className={s.header_paragraph}>
                    ООО “Команда им. Б. Уиллиса”.
                </p>
                <p className={s.header_paragraph}>
                    Взрываем астероиды с 1998 года.
                </p>
            </h2>
        </header>
    );
}
