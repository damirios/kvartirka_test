"use client";

import { useState } from "react";
import { AsteroidsList } from "@/components/AsteroidsList/AsteroidsList";
import { Cart } from "@/components/Cart/Cart";
import { DistanceControls } from "@/components/DistanceControls/DistanceControls";
import { TDistanceUnit } from "@/types/asteroidTypes";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
    const [distanceUnit, setDistanceUnit] = useState<TDistanceUnit>("km");
    const [orderedAsteroids, setOrderedAsteroids] = useState<string[]>([]);
    const [isOrderSubmitted, setIsOrderSubmitted] = useState<boolean>(false);

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

    function handleBackToListClick() {
        setOrderedAsteroids([]);
        setIsOrderSubmitted(false);
    }

    if (isOrderSubmitted) {
        return (
            <>
                <Sidebar />
                <main className={s.main}>
                    <div className={s.asteroids_block}>
                        <h1 className={s.asteroids_title}>Заказ отправлен!</h1>
                        <h2
                            className={s.asteroids_back_button}
                            onClick={handleBackToListClick}
                        >
                            Вернуться к списку
                        </h2>
                        <AsteroidsList
                            changeOrderedAsteroids={changeOrderedAsteroids}
                            orderedAsteroids={orderedAsteroids}
                            unit={distanceUnit}
                            isOrderSubmitted={true}
                        />
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <Sidebar />
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
                    />
                </div>
                <Cart
                    handleOrderSubmit={() => setIsOrderSubmitted(true)}
                    count={orderedAsteroids.length}
                />
            </main>
        </>
    );
}
