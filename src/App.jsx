import './App.css';
import Dashboard from './components/Dashboard';

const URL = 'https://boolean-api-server.fly.dev/satokii/contact'

fetch(URL)
.then(res => res.json())
.then(data => console.log(data))

function App() {
    return (
        <Dashboard></Dashboard>
    );
}

export default App;
