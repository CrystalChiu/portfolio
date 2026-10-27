import styles from "./SeasonalPortrait.module.css";
import { getSeason, PORTRAIT_PATH } from "../../utils/season";

export default function SeasonalPortrait() {
    const holiday = getSeason();
    const src = `${PORTRAIT_PATH}/${holiday.name}.png`;

    return (
        <img
            src={src}
            alt={holiday.alt}
            className={styles.portrait}
        />
    );
}
