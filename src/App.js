import './App.css';
import Gallery from './gallery';
import Topbar from './topbar';

function App() {
  return (
    <div className="App">
       
      <header className="App-header"> 
           <Topbar />

       <p>Welcome to the Red-Art Splash Gallery in Tampa, FL. We celebrate the rich diversity of our country through multicultural art. Our pieces are one-of-a-kind, colorful, relevant, and thoughtfully crafted. All of the work is signed by the artist.</p>
            <Gallery />

      </header> 

    </div>
  );
}

export default App;
