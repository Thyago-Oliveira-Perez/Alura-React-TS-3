import cardapio from 'data/cardapio.json';
import Item from './Item';
import classNames from 'classnames';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';
import { Cardapio } from 'types/Prato';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);

  function ordenar(novaLista: Cardapio) {

    switch (props.ordenador) {
    case 'porcao':
      return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
    case 'qtd_pessoas':
      return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
    case 'preco':
      return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
    default:
      return novaLista;
    }
  }

  function testaBusca(title: string) {
    const regex = new RegExp(props.busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (props.filtro !== null) return props.filtro === id;
    return true;
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [props.busca, props.filtro, props.ordenador]);

  return (
    <div className={classNames({ [styles.itens]: true })}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
