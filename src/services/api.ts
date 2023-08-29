import { TAsteroidData, TFormattedAsteroidsData, TLinks, TSingleAsteroid } from '@/types/asteroidTypes';
import { getFormattedDate, getTomorrowDate } from '@/utils/getFormattedDate';

type TAsteroidsApiResponse = {
    links: TLinks;
    element_count: 58;
    near_earth_objects: {
        [date in string]: TAsteroidData[];
    };
}

let requestTimes = 0;
export async function fetchAsteroids(link?: string): Promise<TFormattedAsteroidsData | null> {
    const today = getFormattedDate(new Date());
    const tomorrow = getTomorrowDate(today);
    const url = link || `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${tomorrow}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY || "DEMO_KEY"}`;
    const asteroids = fetch(url)
    .then(response => response.json())
    .then((result: TAsteroidsApiResponse) => {
        requestTimes++;
        console.log('request count: ', requestTimes);
        console.log(result);
        return {pageLinks: result.links, asteroids: result.near_earth_objects}
    })
    .catch(error => {
        console.log('error: ', error);
        return null;
    })

    return asteroids;
}

export async function fetchAsteroid(id: string): Promise<TSingleAsteroid | null> {
    const asteroidData = fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY || "DEMO_KEY"}`)
    .then(response => response.json())
    .then(result => {
        return result;
    })
    .catch(error => {
        console.log(error);
        return null;
    })

    return asteroidData;
}