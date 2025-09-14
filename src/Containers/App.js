
import ToDoList from "../Components/ToDoList";
import Footer from "../Components/Footer";
import 'animate.css';
import ErrorBoundary from "../Components/ErrorBoundary";


function App(){
    return(
        <>
        <ErrorBoundary>
        <ToDoList />
        </ErrorBoundary>
        <Footer />
        </>
    );
}

export default App;