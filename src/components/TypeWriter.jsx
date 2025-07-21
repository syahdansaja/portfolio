import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Typewriter = ({ words, speed = 100, pauseTime = 1000, className }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === currentWord.length) {
                    setIsDeleting(true);
                }
            } else {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, speed]);

    useEffect(() => {
        if (!isDeleting && charIndex === words[wordIndex % words.length].length) {
            const pause = setTimeout(() => setIsDeleting(true), pauseTime);
            return () => clearTimeout(pause);
        }
    }, [charIndex, isDeleting, wordIndex, pauseTime, words]);

    return (
        <span className={"text-4xl font-extrabold text-shadow-gray-500 text-shadow-md"}>
            {text.split('\n').map((line, i) => (
                <span key={i}>
                {line}
                <br />
                </span>
            ))}
        </span>
    );

};

Typewriter.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
    speed: PropTypes.number,
    pauseTime: PropTypes.number,
    className: PropTypes.string,
};

export default Typewriter;
