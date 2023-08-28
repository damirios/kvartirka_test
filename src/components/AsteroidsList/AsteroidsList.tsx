import {
    TAsteroidData,
    TDistanceUnit,
    TFormattedAsteroidsData,
} from "@/types/asteroidTypes";
import { AsteroidsListItem } from "../AsteroidsListItem/AsteroidsListItem";
import s from "./AsteroidsList.module.css";

interface IAsteroidsListProps {
    asteroidsData: TFormattedAsteroidsData | null;
    unit: TDistanceUnit;
    changeOrderedAsteroids: (id: string) => void;
    orderedAsteroids: string[];
    isOrderSubmitted?: boolean;
}

export function AsteroidsList({
    asteroidsData,
    unit,
    orderedAsteroids,
    changeOrderedAsteroids,
    isOrderSubmitted = false,
}: IAsteroidsListProps) {
    if (asteroidsData === null) {
        return <div className={s.loader}>Loading...</div>;
    }

    let asteroids: TAsteroidData[] = [];
    for (let date in asteroidsData.asteroids) {
        const asteroidsInDate = asteroidsData.asteroids[date];
        asteroids = asteroids.concat(
            asteroidsInDate.map((asteroid) => {
                return { ...asteroid, date };
            })
        );
    }

    if (isOrderSubmitted) {
        asteroids = asteroids.filter((asteroid) =>
            orderedAsteroids.includes(asteroid.id)
        );
    }

    return (
        <ul className={s.asteroids_list}>
            {asteroids.map((asteroid, index) => {
                return (
                    <AsteroidsListItem
                        orderedAsteroids={orderedAsteroids}
                        addOrRemoveAsteroidFromOrderList={
                            changeOrderedAsteroids
                        }
                        unit={unit}
                        key={index}
                        asteroid={asteroid}
                        isOrderSubmitted={isOrderSubmitted}
                    />
                );
            })}
        </ul>
    );
}
