import { asteroidsObj } from '@/mock/asteroidsData';
import { TAsteroidData, TFormattedAsteroidsData, TLinks } from '@/types/asteroidTypes';
import { getFormattedDate } from '@/utils/getFormattedDate';

type TAsteroidsApiResponse = {
    links: TLinks;
    element_count: 58;
    near_earth_objects: {
        [date in string]: TAsteroidData[];
    };
}

export async function fetchAsteroids(): Promise<TFormattedAsteroidsData> {
    const today = getFormattedDate(new Date());
    // const asteroids = fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=DEMO_KEY`)
    await new Promise(resolve => setTimeout(resolve, 400));
    // .then(response => response.json())
    // .then((result: TAsteroidsApiResponse) => {
    //     return {pageLinks: result.links, asteroids: result.near_earth_objects}
    // })
    return {pageLinks: {
        next: 'a',
        previous: 'b',
        selft: 'c'
    }, asteroids: asteroidsObj};
}