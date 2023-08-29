import { fetchAsteroid } from "@/services/api";
import { SingleAsteroid } from "./SingleAsteroid";

export async function SingleAsteroidContainer({ id }: { id: string }) {
    const asteroidData = await fetchAsteroid(id);
    return <SingleAsteroid asteroidData={asteroidData} />;
}
