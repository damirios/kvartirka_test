import Image from "next/image";

import { TAsteroidData, TDistanceUnit } from "@/types/asteroidTypes";
import { getMonth } from "@/utils/monthsMap";
import s from "./AsteroidsListItem.module.css";

import asteroidIcon from "@/static/asteroid.png";
import dangerIcon from "@/static/danger.png";

interface IAstreroidsListItemProps {
    asteroid: TAsteroidData;
    unit: TDistanceUnit;
}

export function AsteroidsListItem({
    asteroid,
    unit,
}: IAstreroidsListItemProps) {
    const [year, month, day] =
        asteroid.close_approach_data[0].close_approach_date.split("-");

    const averageDiameter = Math.floor(
        (+asteroid.estimated_diameter.meters.estimated_diameter_max +
            asteroid.estimated_diameter.meters.estimated_diameter_min) /
            2
    );

    const missDistanceType = unit === "km" ? "kilometers" : "lunar";
    const missDistance = Math.floor(
        +asteroid.close_approach_data[0].miss_distance[missDistanceType]
    );
    const missDistanceUnit = unit === "km" ? " км" : " лунные орбиты";

    return (
        <li className={s.list_item}>
            <div className={s.asteroid_date}>{`${day} ${getMonth(
                month
            )} ${year}`}</div>
            <div className={s.asteroid_info}>
                <div className={s.asteroid_distance}>
                    <div className={s.asteroid_distance_value}>
                        {missDistance + missDistanceUnit}
                    </div>
                    <div className={s.asteroid_distance_arrow}></div>
                </div>
                <div className={s.asteroid_icon}>
                    <Image
                        src={asteroidIcon}
                        alt="asteroid"
                        width={22}
                        height={24}
                    />
                </div>
                <div className={s.asteroid_props}>
                    <div className={s.asteroid_name}>{asteroid.name}</div>
                    <div className={s.asteroid_size}>Ø {averageDiameter} м</div>
                </div>
            </div>
            <div className={s.asteroid_bottom_menu}>
                <button type="button" className={s.asteroid_order_destroy}>
                    Заказать
                </button>
                <div className={s.asteroid_danger_status}>
                    <Image
                        src={dangerIcon}
                        alt="danger"
                        width={15}
                        height={15}
                    />
                    <span>Опасен</span>
                </div>
            </div>
        </li>
    );
}
