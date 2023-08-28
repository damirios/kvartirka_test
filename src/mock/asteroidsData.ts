import { TAsteroidData } from "@/types/asteroidTypes";

const asteroid1: TAsteroidData = {
    links: {
        self: 'cool-link',
    },
    id: '1',
    name: "FS 2012",
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
        meters: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
        miles: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
        feet: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
    },
    is_potentially_hazardous_asteroid: true,
    close_approach_data: [{
        close_approach_date: "2023-07-29",
        close_approach_date_full: "2023-07-29 12:32",
        epoch_date_close_approach: 1234,
        relative_velocity: {
            kilometers_per_second: '12',
            kilometers_per_hour: '14',
            miles_per_hour: '18',
        },
        miss_distance: {
            astronomical: '0.3',
            lunar: '12345',
            kilometers: '32543',
            miles: '32423',
        },
        orbiting_body: 'Earth',
    }],
    absolute_magnitude_h: 12,
    date: "2023-07-30"
}

const asteroid2: TAsteroidData = {
    links: {
        self: 'cool-link',
    },
    id: '2',
    name: "FS 2015",
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
        meters: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
        miles: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
        feet: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
    },
    is_potentially_hazardous_asteroid: true,
    close_approach_data: [{
        close_approach_date: "2023-07-29",
        close_approach_date_full: "2023-07-29 12:32",
        epoch_date_close_approach: 1234,
        relative_velocity: {
            kilometers_per_second: '12',
            kilometers_per_hour: '14',
            miles_per_hour: '18',
        },
        miss_distance: {
            astronomical: '0.3',
            lunar: '12345',
            kilometers: '32543',
            miles: '32423',
        },
        orbiting_body: 'Earth',
    }],
    absolute_magnitude_h: 12,
    date: "2023-07-30"
}

const asteroid3: TAsteroidData = {
    links: {
        self: 'cool-link',
    },
    id: '6',
    name: "FS 2019",
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
        meters: {
            estimated_diameter_min: 120,
            estimated_diameter_max: 150,
        },
        miles: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
        feet: {
            estimated_diameter_min: 12,
            estimated_diameter_max: 15,
        },
    },
    is_potentially_hazardous_asteroid: true,
    close_approach_data: [{
        close_approach_date: "2023-07-29",
        close_approach_date_full: "2023-07-29 12:32",
        epoch_date_close_approach: 1234,
        relative_velocity: {
            kilometers_per_second: '12',
            kilometers_per_hour: '14',
            miles_per_hour: '18',
        },
        miss_distance: {
            astronomical: '0.3',
            lunar: '12345',
            kilometers: '3254213',
            miles: '32423',
        },
        orbiting_body: 'Earth',
    }],
    absolute_magnitude_h: 12,
    date: "2023-07-30"
}

const asteroids = [asteroid1, asteroid2, asteroid3, asteroid1, asteroid2, asteroid3, asteroid1, asteroid2, asteroid3];

export const asteroidsObj = {
    "2023-08-29" : asteroids
}