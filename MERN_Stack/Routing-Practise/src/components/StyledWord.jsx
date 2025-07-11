import { useParams } from 'react-router-dom';

export default function StyledWord() {
    const { word, color, bgColor } = useParams();
    return (
        <h1 style={{
            color: color,
            backgroundColor: bgColor,
            padding: '50px',
            textAlign: 'center',
            fontFamily: 'verdana'

        }}>
            The word is: {word}
        </h1>
    );
}