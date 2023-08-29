import { SingleAsteroidContainer } from "@/components/SingleAsteroid/SingleAsteroidContainer";

interface IAsteroidPageProps {
    params: {
        id: string;
    };
}

export default function AsteroidPage({ params }: IAsteroidPageProps) {
    return <SingleAsteroidContainer id={params.id} />;
}
