import {
    forwardRef,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";
import type {
    CSSProperties,
    ElementType,
    HTMLAttributes,
    MouseEvent as ReactMouseEvent,
    ReactNode,
} from "react";
import {
    motion,
    useInView,
    type Transition,
    type UseInViewOptions,
} from "motion/react";

export type HighlightDirection = "ltr" | "rtl" | "ttb" | "btt";

type TextHighlighterProps = {
    children: ReactNode;
    as?: ElementType;
    triggerType?: "auto" | "hover" | "ref" | "inView";
    transition?: Transition;
    useInViewOptions?: UseInViewOptions;
    highlightColor?: string;
    direction?: HighlightDirection;
} & HTMLAttributes<HTMLElement>;

export type TextHighlighterRef = {
    animate: (direction?: HighlightDirection) => void;
    reset: () => void;
};

const defaultInViewOptions: UseInViewOptions = {
    once: true,
    initial: false,
    amount: 0.1,
};

const getBackgroundSize = (
    direction: HighlightDirection,
    animated: boolean,
) => {
    switch (direction) {
        case "ltr":
        case "rtl":
            return animated ? "100% 100%" : "0% 100%";
        case "ttb":
        case "btt":
            return animated ? "100% 100%" : "100% 0%";
    }
};

const getBackgroundPosition = (direction: HighlightDirection) => {
    switch (direction) {
        case "rtl":
            return "100% 0%";
        case "btt":
            return "0% 100%";
        case "ltr":
        case "ttb":
            return "0% 0%";
    }
};

export const TextHighlighter = forwardRef<
    TextHighlighterRef,
    TextHighlighterProps
>((
    {
        as = "span",
        children,
        direction = "ltr",
        highlightColor = "hsl(25, 90%, 80%)",
        transition = { type: "spring", duration: 1, delay: 0, bounce: 0 },
        triggerType = "inView",
        useInViewOptions = defaultInViewOptions,
        className,
        ...props
    },
    ref,
) => {
    const componentRef = useRef<HTMLElement | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [directionOverride, setDirectionOverride] =
        useState<HighlightDirection | null>(null);
    const currentDirection = directionOverride ?? direction;

    const elementInView = useInView(
        componentRef,
        triggerType === "inView" ? useInViewOptions : defaultInViewOptions,
    );

    useImperativeHandle(ref, () => ({
        animate: (animationDirection?: HighlightDirection) => {
            if (animationDirection) {
                setDirectionOverride(animationDirection);
            }
            setIsAnimating(true);
        },
        reset: () => setIsAnimating(false),
    }));

    const shouldAnimate =
        triggerType === "hover"
            ? isHovered
            : triggerType === "inView"
              ? elementInView
              : triggerType === "ref"
                ? isAnimating
                : triggerType === "auto";

    const animatedSize = useMemo(
        () => getBackgroundSize(currentDirection, shouldAnimate),
        [shouldAnimate, currentDirection],
    );
    const initialSize = useMemo(
        () => getBackgroundSize(currentDirection, false),
        [currentDirection],
    );
    const backgroundPosition = useMemo(
        () => getBackgroundPosition(currentDirection),
        [currentDirection],
    );

    const highlightStyle = {
        backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition,
        backgroundSize: animatedSize,
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
    } as CSSProperties;

    const ElementTag = as;

    return (
        <ElementTag
            ref={componentRef}
            {...props}
            onMouseEnter={(event: ReactMouseEvent<HTMLElement>) => {
                props.onMouseEnter?.(event);
                if (triggerType === "hover") {
                    setIsHovered(true);
                }
            }}
            onMouseLeave={(event: ReactMouseEvent<HTMLElement>) => {
                props.onMouseLeave?.(event);
                if (triggerType === "hover") {
                    setIsHovered(false);
                }
            }}
        >
            <motion.span
                className={className}
                style={highlightStyle}
                animate={{ backgroundSize: animatedSize }}
                initial={{ backgroundSize: initialSize }}
                transition={transition}
            >
                {children}
            </motion.span>
        </ElementTag>
    );
});

TextHighlighter.displayName = "TextHighlighter";

export default TextHighlighter;
