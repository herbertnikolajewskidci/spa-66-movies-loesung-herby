import "./App.css";
import DisplayList from "./components/DisplayList";
import InputField from "./components/InputField";
import SearchTermProvider from "./context/SearchTermProvider";

function App() {
    return (
        <SearchTermProvider>
            <InputField />
            <DisplayList />
        </SearchTermProvider>
    );
}

export default App;
