"use client";

import { AsteroidsList } from "@/components/AsteroidsList/AsteroidsList";
import { DistanceControls } from "@/components/DistanceControls/DistanceControls";
import { fetchAsteroids } from "@/services/api";
import { TDistanceUnit, TFormattedAsteroidsData } from "@/types/asteroidTypes";
import { useEffect, useState } from "react";
import s from "./page.module.css";

export default function Home() {
    const [asteroidsData, setAsteroidsData] =
        useState<TFormattedAsteroidsData | null>(null);
    const [distanceUnit, setDistanceUnit] = useState<TDistanceUnit>("km");

    useEffect(() => {
        fetchAsteroids().then((result) => {
            setAsteroidsData(result);
        });
    }, []);

    function changeDistanceUnit(unit: TDistanceUnit) {
        setDistanceUnit(unit);
    }

    return (
        <main className={s.main}>
            <h1 className={s.asteroids_title}>Ближайшие подлёты астероидов</h1>
            <DistanceControls
                unit={distanceUnit}
                changeDistanceUnit={changeDistanceUnit}
            />
            <AsteroidsList unit={distanceUnit} asteroidsData={asteroidsData} />
        </main>
    );
}
