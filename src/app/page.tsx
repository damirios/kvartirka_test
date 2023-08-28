"use client";

import { AsteroidsList } from "@/components/AsteroidsList/AsteroidsList";
import { Cart } from "@/components/Cart/Cart";
import { DistanceControls } from "@/components/DistanceControls/DistanceControls";
import { fetchAsteroids } from "@/services/api";
import { TDistanceUnit, TFormattedAsteroidsData } from "@/types/asteroidTypes";
import { useEffect, useState } from "react";
import s from "./page.module.css";

export default function Home() {
    const [asteroidsData, setAsteroidsData] =
        useState<TFormattedAsteroidsData | null>(null);
    const [distanceUnit, setDistanceUnit] = useState<TDistanceUnit>("km");
    const [orderedAsteroids, setOrderedAsteroids] = useState<string[]>([]);
    const [isOrderSubmitted, setIsOrderSubmitted] = useState<boolean>(false);

    useEffect(() => {
        fetchAsteroids().then((result) => {
            setAsteroidsData(result);
        });
    }, []);

    function changeDistanceUnit(unit: TDistanceUnit) {
        setDistanceUnit(unit);
    }

    function changeOrderedAsteroids(id: string) {
        const isOrdered = orderedAsteroids.includes(id);
        if (isOrdered) {
            const index = orderedAsteroids.findIndex(
                (asteroidId) => asteroidId === id
            );
            if (index !== orderedAsteroids.length) {
                setOrderedAsteroids(
                    orderedAsteroids
                        .slice(0, index)
                        .concat(orderedAsteroids.slice(index + 1))
                );
            } else {
                setOrderedAsteroids(orderedAsteroids.slice(0, index));
            }
        } else {
            setOrderedAsteroids(orderedAsteroids.concat([id]));
        }
    }

    if (isOrderSubmitted) {
        return (
            <main className={s.main}>
                <div className={s.asteroids_block}>
                    <h1 className={s.asteroids_title}>Заказ отправлен!</h1>
                    <AsteroidsList
                        isOrderSubmitted={isOrderSubmitted}
                        changeOrderedAsteroids={changeOrderedAsteroids}
                        orderedAsteroids={orderedAsteroids}
                        unit={distanceUnit}
                        asteroidsData={asteroidsData}
                    />
                </div>
            </main>
        );
    }

    return (
        <main className={s.main}>
            <div className={s.asteroids_block}>
                <h1 className={s.asteroids_title}>
                    Ближайшие подлёты астероидов
                </h1>
                <DistanceControls
                    unit={distanceUnit}
                    changeDistanceUnit={changeDistanceUnit}
                />
                <AsteroidsList
                    changeOrderedAsteroids={changeOrderedAsteroids}
                    orderedAsteroids={orderedAsteroids}
                    unit={distanceUnit}
                    asteroidsData={asteroidsData}
                />
            </div>
            <Cart
                handleOrderSubmit={() => setIsOrderSubmitted(true)}
                count={orderedAsteroids.length}
            />
        </main>
    );
}
