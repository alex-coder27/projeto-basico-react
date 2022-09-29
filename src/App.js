import './App.css';
import Card from './components/card/card';
import Button from './components/button/button';

const sayLabel = (label) => {
  alert('A label desse botão é: ' + label)
}

function App() {
  return (
    <main>
      <Card color={'red'}>
        <p>Apenas um parágrafo qualquer</p>
      </Card>
      <Button sayLabel={sayLabel} />
    </main>
  );
}

export default App;
