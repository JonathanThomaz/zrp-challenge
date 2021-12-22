import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { useState } from 'react';
import api from 'services/api';
import './style.css';

function Home() {
  const [pokemonName, setPokemonName] = useState('');
  const [message, setMessage] = useState('Digite o nome de um pokemon');
  const [pokemonAbilities, setPokemonAbilities] =
    useState<Array<string> | null>();
  const handleSubmit = async () => {
    try {
      const response = await api.get<Array<string>>(`/pokemon/${pokemonName}`);
      setPokemonAbilities(response.data);
    } catch (error) {
      setMessage('Esse pokemon não existe');
    }
  };
  return (
    <div className="container">
      <Header title="Pokemon" />
      <div className="content">
        <div className="flex inputsContainer">
          <Input
            name="pokemonName"
            value={pokemonName}
            type="text"
            placeholder="Digite aqui"
            onChange={e => {
              setPokemonName(e.target.value);
            }}
          />
          <Button
            onClick={handleSubmit}
            name="Enviar"
            value="Enviar"
            disabled={!pokemonName}
          />
        </div>
        {pokemonAbilities ? (
          <div>
            <span>Habilidades: </span>
            <br />
            {pokemonAbilities.map(ability => {
              return (
                <>
                  <span key={ability}>{ability}</span>
                  <br />
                </>
              );
            })}
          </div>
        ) : (
          <span> {message}</span>
        )}
      </div>
    </div>
  );
}

export default Home;
