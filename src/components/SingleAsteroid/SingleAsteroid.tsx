import { TSingleAsteroid } from "@/types/asteroidTypes";
import { AsteroidApproachListItem } from "../AsteroidApproachListItem/AsteroidApproachListItem";
import s from "./SingleAsteroid.module.css";

interface ISingleAsteroidProps {
    asteroidData: TSingleAsteroid | null;
}

export function SingleAsteroid({ asteroidData }: ISingleAsteroidProps) {
    if (asteroidData === null) {
        return <div className={s.asteroid_box}>Loading...</div>;
    }

    const avgDiameter = Math.floor(
        (+asteroidData.estimated_diameter.meters.estimated_diameter_max +
            +asteroidData.estimated_diameter.meters.estimated_diameter_min) /
            2
    );
    const dangerous = asteroidData.is_potentially_hazardous_asteroid
        ? "высокая"
        : "низкая";

    return (
        <main className={s.asteroid_box}>
            <div className={s.asteroid_main_info}>
                <div className={s.asteroid_info_block}>
                    Название: {asteroidData.name}
                </div>
                <div className={s.asteroid_info_block}>
                    Диаметр:{" "}
                    {new Intl.NumberFormat("ru-RU").format(avgDiameter)} м
                </div>
                <div className={s.asteroid_info_block}>
                    Потенциальная опасность: {dangerous}
                </div>
            </div>
            <ul className={s.asteroid_approach_list}>
                {asteroidData.close_approach_data.map((approach, index) => (
                    <AsteroidApproachListItem approach={approach} key={index} />
                ))}
            </ul>
        </main>
    );
}
