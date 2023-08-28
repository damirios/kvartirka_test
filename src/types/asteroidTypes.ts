export type TAsteroidData = {
    links: {
        self: string;
    };
    id: string;
    name: string;
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
        meters: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
        miles: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
        feet: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
    };
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: {
        close_approach_date: string;
        close_approach_date_full: string;
        epoch_date_close_approach: number;
        relative_velocity: {
            kilometers_per_second: string;
            kilometers_per_hour: string;
            miles_per_hour: string;
        };
        miss_distance: {
            astronomical: string;
            lunar: string;
            kilometers: string;
            miles: string;
        }
        orbiting_body: string;
    }[];
    absolute_magnitude_h: number;
    date: string;
};

export type TLinks = {
    next: string;
    previous: string;
    selft: string;
};

export type TFormattedAsteroidsData = {
    pageLinks: TLinks;
    asteroids: {[date in string]: TAsteroidData[]};
}

export type TDistanceUnit = "km" | "lunar";