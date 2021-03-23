import {CardOne} from './components/CardOne'
import "./App.css";
import pic from './images.jpg'
import pic1 from './images1.jpg'
import pic2 from './images2.jpg'
import pic3 from './images3.jpg'
import pic4 from './images4.jpg'
import pic5 from './images5.jpg'


function App() {
  const data = [
    { img: pic },
    { img: pic1},
    { img: pic2},
    { img: pic3},
    { img: pic4},
    { img: pic5},
  ];
  
 return (
    <div className="App">
      {data.map((pic) => {
        return <CardOne data={pic} />;
      })}
    </div>
  );
}
export default App;
