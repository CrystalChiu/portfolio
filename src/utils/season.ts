export const PORTRAIT_PATH = "/images/portraits";

export type Holiday = {
    readonly name: string;
    readonly activeMonths: readonly number[] | null;
    readonly alt: string;
};

const DEFAULT_HOLIDAY: Holiday = {
    name: "default",
    activeMonths: null,
    alt: "Default Crystal illustration.",
};

const HOLIDAYS: readonly Holiday[] = [
    {
        name: "birthday",
        activeMonths: [5],
        alt: "Birthday Crystal illustration.",
    },
    {
        name: "halloween",
        activeMonths: [9],
        alt: "Spooky Crystal illustration.",
    },
    {
        name: "christmas",
        activeMonths: [10, 11],
        alt: "Reindeer Crystal illustration.",
    },
    {
        name: "valentines",
        activeMonths: [1],
        alt: "Lovestruck Crystal illustration.",
    },
    {
        name: "easter",
        activeMonths: [2, 3],
        alt: "Easter bunny Crystal illustration.",
    },
];

/**
 * Returns the current seasonal portrait, or the default if none is active.
 */
export function getSeason(): Holiday {
    const month = new Date().getMonth();

    return (
        HOLIDAYS.find((holiday) => holiday.activeMonths?.includes(month)) ??
        DEFAULT_HOLIDAY
    );
}
