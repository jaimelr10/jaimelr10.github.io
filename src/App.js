import './App.css';

import AppBar from './components/AppBar';
import { MyLinks } from './components/CardContent/MyLinks';
import Card from './components/CvCard';

function App() {
  return (
    <div className="App">
      <AppBar/>
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      <Card title={"My Links⚓"} modalContent={
       <MyLinks/>
      }/>
      <Card title={"Working Experience 💻"} content={
        <></>
      }/>
      <Card title={"Education 👨‍🎓"} content={
        <></>
      }/>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      <Card title={"About me 🧔"} content={
        <></>
      }/>
    </div>

    </div>
  );
}

export default App;
