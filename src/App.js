import PropertyCard from "./components/property_card";
import TodoForm from "./components/todo_form";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
      <div className="container my-5">
      <div className="row">
       <PropertyCard/>
       <TodoForm/>
       </div>
    </div>
    </div>
  );
}

export default App;
