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
}

export function AsteroidsList({ asteroidsData, unit }: IAsteroidsListProps) {
    if (asteroidsData === null) {
        return <div>Loading...</div>;
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

    return (
        <ul>
            {asteroids.map((asteroid, index) => {
                return (
                    <AsteroidsListItem
                        unit={unit}
                        key={index}
                        asteroid={asteroid}
                    />
                );
            })}
        </ul>
    );
}
