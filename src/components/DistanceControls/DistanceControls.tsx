import { TDistanceUnit } from "@/types/asteroidTypes";
import s from "./DistanceControls.module.css";

interface IDistanceControlsProps {
    changeDistanceUnit: (unit: TDistanceUnit) => void;
    unit: TDistanceUnit;
}

export function DistanceControls({
    changeDistanceUnit,
    unit,
}: IDistanceControlsProps) {
    return (
        <div className={s.buttons_block}>
            <button
                onClick={() => changeDistanceUnit("km")}
                className={`${s.button} ${
                    unit === "km" ? s.button_selected : ""
                }`}
            >
                в километрах
            </button>
            <span> | </span>
            <button
                onClick={() => changeDistanceUnit("lunar")}
                className={`${s.button} ${
                    unit === "lunar" ? s.button_selected : ""
                }`}
            >
                в лунных орбитах
            </button>
        </div>
    );
}
