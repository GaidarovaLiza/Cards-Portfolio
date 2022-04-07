import './App.css';
import { Portfolio } from './companents/Portfolio';




function App(props) {

	return (
		<Portfolio filters={props.filters} businessCard={props.businessCard}/>
	
	);
}

export default App;
