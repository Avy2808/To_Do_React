import './App.css';
import Header from "./MyComponents/Header";
import ToDos from "./MyComponents/ToDos";
import Footer from "./MyComponents/Footer";

function App() {
  function onDelete(){
    console.log("Deleting...");
  }
  let todos=[
    {
      sno:1,
      title:"Go To The Market",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno:2,
      title:"Go To The Mall",
      desc:"You need to go to the mall to get this job done"
    },
    {
      sno:3,
      title:"Go To The Movie",
      desc:"You need to go to the movie to get this job done"
    }
  ];
  return (
    <>
    <Header title="My ToDos List"/>
    <ToDos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
