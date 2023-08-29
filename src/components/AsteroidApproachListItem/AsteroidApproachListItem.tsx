import { TApproach } from "@/types/asteroidTypes";
import { getFormattedDateAndTime } from "@/utils/getFormattedDateAndTime";

import s from "./AsteroidApproachListItem.module.css";

interface IAsteroidApproachListItemProps {
    approach: TApproach;
}

export function AsteroidApproachListItem({
    approach,
}: IAsteroidApproachListItemProps) {
    const { date, time } = getFormattedDateAndTime(
        approach.close_approach_date_full
    );
    const planets = {
        Merc: "Меркурий",
        Venus: "Венера",
        Earth: "Земля",
        Mars: "Марс",
        Juptr: "Юпитер",
        Sat: "Сатурн",
        Uran: "Уран",
        Nept: "Нептун",
        Pluto: "Плутон",
    };

    return (
        <li className={s.approach_item}>
            <div className={s.approach_date}>
                <p>Дата сближения: {date}</p>
                <p>Время сближения: {time}</p>
            </div>
            <div className={s.approach_info_block}>
                Относительная скорость:{" "}
                <span>
                    {new Intl.NumberFormat("ru-RU").format(
                        Math.floor(
                            +approach.relative_velocity.kilometers_per_second
                        )
                    )}{" "}
                    км/с
                </span>
            </div>
            <div className={s.approach_info_block}>
                Расстояние до Земли:{" "}
                <span>
                    {new Intl.NumberFormat("ru-RU").format(
                        Math.floor(+approach.miss_distance.kilometers)
                    )}{" "}
                    км
                </span>
            </div>
            <div className={s.approach_info_block}>
                Тело, по орбите которого летит:{" "}
                <span>
                    {planets[approach.orbiting_body] || approach.orbiting_body}
                </span>
            </div>
        </li>
    );
}
