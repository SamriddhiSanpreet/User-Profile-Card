import logo from './logo.svg';
import './App.css';
import UserCard from './Component/UserProfileCard';

function App() {
  return (
    <div>
        <h1>WELCOME TO THIS WEBSITE</h1>
    <div className="card-info">
        <UserCard name="Samriddhi Sanpreet" email="samriddhisanpreet2005@gmail.com" imgUrl="https://imageio.forbes.com/specials-images/imageserve/6185d97068c7a8440e502546/0x0.jpg?format=jpg&amp;width=200" age="18" gender="Female" phone="123xxxxxxx"/>
        <UserCard name="Ashishpuri Goswami" email="ashishpurigoswami2005@gmail.com" age="18" gender="Male" phone="987xxxxxxx" imgUrl="https://i.pinimg.com/originals/07/80/4b/07804baf046ff2013e033d0387ddf422.jpg"/>
        <UserCard name="Aashika Singh Rajpoot" email="aashikasingh123@gmail.com" age="35" gender="Female" phone="987xxxxxxx" imgUrl="https://www.visaplace.com/wp-content/uploads/2020/06/d521f6d5612afb7daa968827a775-1573329.jpgd_.jpeg"/>
        <UserCard name="Shruti Rai Singhania" email="preetusharma123@gmail.com" age="35" gender="Female" phone="987xxxxxxx" imgUrl="https://i.pinimg.com/originals/59/b4/bc/59b4bc4f271367e472f9f3b1847684b6.jpg"/>
        <UserCard name="Rudra Singh Oberoi" email="rudrasingh360@gmail.com" age="35" gender="Male" phone="987xxxxxxx" imgUrl="https://alexanderklebe.com/wp-content/uploads/Headshot_photographer_actors_Berlin_Paul.jpg"/>
    </div>
    </div>
  );
}

export default App;
