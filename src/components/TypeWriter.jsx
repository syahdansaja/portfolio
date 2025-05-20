import { useEffect, useState } from "react"

const TypeWrtier = (text, speed = 20) => {
    const [displayedText, setDisplayedText] = useState("");
    useEffect(() => {
        let i = 0;

        const typeCharacter = () => {
            if (i < text.length) {
                setDisplayedText((prevText) => prevText + text.charAt(i));
                setTimeout(typeCharacter, speed);
                console.log(text.charAt(i));
            }
            i++;
        }
        typeCharacter();
    }, [text,speed]);

    return displayedText;
}

export default TypeWrtier;