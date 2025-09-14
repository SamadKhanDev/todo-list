
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import 'animate.css';
import ErrorBoundary from "./ErrorBoundary";


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