import './App.css';
import restaurant from './restaurant.jpg';

function Header(props) {
   return (
      <header>
         <h1>{props.name}'s Kitchen</h1>
      </header>
   );
}

function Main(props) {
   return (
      <section>
         <p>We serve the most {props.adjective} food around.</p>
         <img src={restaurant} height={300} alt='napkin and silverware' />
         <ul style={{padding:0}}>
            {props.dishes.map((dish) => (
               <li key={dish.id}>{dish.title}</li>
            ))}
         </ul>
      </section>
   )
}

function Footer(props) {
   return (
      <footer><p>Copyright {props.year}</p></footer>
   )
}

const dishes = [
   'Macaroni and Cheese',
   'Steak',
   'Brussel Sprouts',
   'Mashed Potatoes'
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));


function App() {
   return (
      <div className='App'>
         <Header name='Matt' />
         <Main adjective='amazing' dishes={dishObjects} />
         <Footer year={new Date().getFullYear()} />
      </div>
   );
}

export default App;
