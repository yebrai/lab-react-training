import logo from './logo.svg';
import './App.css';
import UserData from './data/berlin.json'
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

let IdCardJohn = {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth:new Date("1992-07-14").toDateString(),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
}


function App() {
  return (
    <div className="App">
    <IdCard user={IdCardJohn}/>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
