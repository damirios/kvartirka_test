import { useEffect, useRef, useState } from "react";
import { fetchAsteroids } from "@/services/api";
import {
    TAsteroidData,
    TDistanceUnit,
    TFormattedAsteroidsData,
} from "@/types/asteroidTypes";
import { AsteroidsListItem } from "../AsteroidsListItem/AsteroidsListItem";
import s from "./AsteroidsList.module.css";

interface IAsteroidsListProps {
    unit: TDistanceUnit;
    changeOrderedAsteroids: (id: string) => void;
    orderedAsteroids: string[];
    isOrderSubmitted?: boolean;
}

export function AsteroidsList({
    unit,
    orderedAsteroids,
    changeOrderedAsteroids,
    isOrderSubmitted = false,
}: IAsteroidsListProps) {
    const [asteroidsData, setAsteroidsData] =
        useState<TFormattedAsteroidsData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [nextLink, setNextLink] = useState<string | undefined>(undefined);
    const listRef = useRef<HTMLUListElement>(null);

    function fetchData() {
        setIsLoading(true);
        fetchAsteroids(nextLink)
            .then((result) => {
                setIsLoading(false);
                if (result === null) {
                    return;
                }
                setAsteroidsData({
                    pageLinks: result.pageLinks,
                    asteroids: {
                        ...asteroidsData?.asteroids,
                        ...result.asteroids,
                    },
                });
                setNextLink(result.pageLinks.next);
            })
            .catch((error) => {
                setError(error);
                console.log("error: ", error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLoading]);

    function handleScroll() {
        if (!listRef.current) {
            return;
        }

        if (
            document.documentElement.scrollTop +
                document.documentElement.clientHeight >=
                listRef.current.scrollHeight - 100 &&
            !isLoading
        ) {
            fetchData();
        }
    }

    if (asteroidsData === null) {
        return <div className={s.loader}>Loading...</div>;
    }

    if (error !== null) {
        return <div>Error: {error.message}</div>;
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
        <ul className={s.asteroids_list} ref={listRef}>
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
            {isLoading && (
                <div className={s.loader}>Loading other asteroids...</div>
            )}
        </ul>
    );
}
