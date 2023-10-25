import PlayersList from './PlayersList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
const aziz={color:"#22d1e5",textAlign:"center"}
const background={backgroundColor:"#c6efea"};
//style of background
function App() {
  return (
    <div style={background} className="App">
      <h1 style={aziz}>Players</h1>
    <PlayersList/>
    </div>
  );
}

export default App;
