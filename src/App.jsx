import './App.css'
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
      <div className='App'>
      {/* <LodCountries></LodCountries> */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
      </div>
  );
}














// function LodCountries(){
//   const [countries, setCountries] = useState([])
//   useEffect( () =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   },[])
//   return(
//     <div>
//       <h3>Visiting Every Country of the World!!!</h3>
//       <p>Available Countries: {countries.length}</p>
//       {
//         countries.map(country => <Country name={country.name.common}></Country>)
//       }
//     </div>
//   )
// }
// function Country (props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//     </div>
//   )
// }

export default App
