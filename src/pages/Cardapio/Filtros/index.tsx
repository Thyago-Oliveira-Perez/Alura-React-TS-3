import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';
type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros(props: Props) {
  function selecionaFiltro(opcao: IOpcao) {
    if (props.filtro === opcao.id) return props.setFiltro(null);
    return props.setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: props.filtro === opcao.id,
          })}
          key={opcao.id}
          onClick={() => selecionaFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
