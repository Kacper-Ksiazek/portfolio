// Tools
import { createContext, useState, useMemo } from "react";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import ALL_AVAILABLE_IMAGES from "@/data/pictures_for_matching_game";
// Types
import type { FunctionComponent, ReactNode, SetStateAction, Dispatch } from "react";
import type { PictureToMatch } from "@/data/pictures_for_matching_game";

interface PictureToMatchWithID extends PictureToMatch {
    id: number;
}
type AnimationToDisplay = "invalid_choose" | null;

interface PicturesMatchingGameContextInterface {
    numberOfTurns: number;
    animationToDisplay: AnimationToDisplay;
    pictureToDisplayInFullsize: PictureToMatchWithID | null;
    allPictures: PictureToMatchWithID[];
    gameIsOver: boolean;
    gameNumber: number;
    //
    startNewGame: () => void;
    /**
     * This function is triggered each time the picture is clicked, expects one parameter- a unique id of clicked element
     */
    handlePictureOnClick: (id: number) => void;
    checkWehetherAImageShouldBeShown: (id: number) => boolean;
    checkWhetherAImageHasBeenAlreadyMatched: (folder: string) => boolean;
    setPictureToDisplayInFullsize: Dispatch<SetStateAction<PictureToMatchWithID | null>>;
}

export const PicturesMatchingGameContext = createContext<PicturesMatchingGameContextInterface>({} as any);

export const PicturesMatchingGameContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    // This one property is used to refresh useMemo hook and allow staring further games without refreshing the page
    const [gameNumber, setGameNumber] = useState<number>(1);

    const [pictureToDisplayInFullsize, setPictureToDisplayInFullsize] = useState<PictureToMatchWithID | null>(null);
    const [numberOfTurns, setNumberOfTurns] = useState<number>(0);
    const [alreadyMatchedPictures, setAlreadyMatchedPictures] = useState<string[]>([]);
    const [idsOfPicturesToDisplay, setIdsOfPicturesToDisplay] = useState<number[]>([]);
    const [animationToDisplay, setAnimationToDisplay] = useState<AnimationToDisplay>(null);

    const allPictures = useMemo<PictureToMatchWithID[]>(() => {
        const _shuffle = (arr: any[]): any[] => arr.sort(() => 0.5 - Math.random());
        const fiveRandomImages: PictureToMatch[] = _shuffle(ALL_AVAILABLE_IMAGES).slice(0, 5);
        return _shuffle([...fiveRandomImages, ...fiveRandomImages]).map((el: PictureToMatch, index): PictureToMatchWithID => {
            return { ...el, id: index };
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameNumber]);

    useLazyLoadedImages({
        id: "PICTURES_MATCHING_MINIGAME_SINGLE_IMAGE",
        srcsToLazyLoad: allPictures.map((image) => `/images/landing-page/images-matching-game/${image.folder}/thumbnail.jpg`),
    });

    const handlePictureOnClick = (id: number) => {
        if (idsOfPicturesToDisplay.length === 2 || idsOfPicturesToDisplay.includes(id)) return;
        if (idsOfPicturesToDisplay.length === 0) return setIdsOfPicturesToDisplay([id]);
        setNumberOfTurns((val) => val + 1);
        //
        // Helper function to facilitate comparing of pictures reflecting by different ids
        const _getFolderName = (id: number): string => (allPictures.find((el) => el.id === id) as PictureToMatchWithID).folder;
        // Add currently clicked picture's id to the array in order to enable animations
        setIdsOfPicturesToDisplay((val) => [...val, id]);
        // Dedicate whether the pictures are equal
        if (_getFolderName(id) === _getFolderName(idsOfPicturesToDisplay[0])) {
            setAlreadyMatchedPictures((val) => [...val, _getFolderName(id)]);
            setAnimationToDisplay(null);
            setIdsOfPicturesToDisplay([]);
        } else {
            setTimeout(() => {
                setAnimationToDisplay("invalid_choose");
                setTimeout(() => {
                    setAnimationToDisplay(null);
                    setIdsOfPicturesToDisplay([]);
                }, 150);
            }, 450);
        }
    };

    const startNewGame = () => {
        setGameNumber((val) => val + 1);
        setNumberOfTurns(1);
        setAlreadyMatchedPictures([]);
        setIdsOfPicturesToDisplay([]);
        setAnimationToDisplay(null);
        setPictureToDisplayInFullsize(null);
    };

    return (
        <PicturesMatchingGameContext.Provider
            value={{
                gameNumber,
                animationToDisplay,
                allPictures,
                numberOfTurns,
                pictureToDisplayInFullsize,
                gameIsOver: alreadyMatchedPictures.length === 5,
                startNewGame,
                setPictureToDisplayInFullsize,
                handlePictureOnClick,
                checkWehetherAImageShouldBeShown: (id: number) => idsOfPicturesToDisplay.includes(id),
                checkWhetherAImageHasBeenAlreadyMatched: (folder: string) => alreadyMatchedPictures.includes(folder),
            }}
        >
            {props.children}
        </PicturesMatchingGameContext.Provider>
    );
};
