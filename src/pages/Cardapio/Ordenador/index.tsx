import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador(props: Props) {
  const [aberto, setAberto] = useState(false);

  return (
    <button
      onBlur={() => setAberto(false)}
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: props.ordenador !== '',
      })}
      onClick={() => setAberto(!aberto)}
    >
      <span>Ordenadr Por: {props.ordenador}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: aberto === true,
        })}
      >
        {opcoes.map((opcao) => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => props.setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
