import data from "../data";

function Pet({ name, breed }) {

    function getFormattedText(word){
        let wordArray = word.split(" ").map(arr => (arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase()))
        if(wordArray.length > 1){
            return wordArray.join(" ")
        } return wordArray.join()
    }
    
    return (
        <small className="pet-card">
            <h3>{getFormattedText(name)}: {getFormattedText(breed)}</h3>
        </small>
    );
}

export default Pet;