import "./App.css";
import SearchEngine from "./SearchEngine";
import FancyLoadingAnimation from "fancy-loading-animation";
import "fancy-loading-animation/dist/index.css";

function App() {
    return ( <
        div className = "App" >
        <
        FancyLoadingAnimation loadingAnimationVarient = "bee"
        loadingAnimationDelay = { 0.3 }
        loadingCharacterDirection = "right"
        loadingTextStyle = {
            { color: "orange" }
        }
        />{" "} <
        header className = "App-header" >
        <
        h1 > What 's the weather today? </h1> <SearchEngine />{" "} <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React { " " } <
        /a>{" "} < /
        header > { " " } <
        /div>
    );
}

export default App;