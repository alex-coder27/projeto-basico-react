import './App.css';
import Card from './components/card/index';
import Button from './components/button/index';


function App() {
  const myText = 'Apenas um parágrafo qualquer'

  return (
    <main>
      <Card color={'red'} label={myText}/>
      <Button />
    </main>
  );
}

export default App;
