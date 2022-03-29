import styles from './Item.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Prato) {
  const navigate = useNavigate();
  return (
    <div className={classNames({ [styles.item]: true })} onClick={() => navigate(`/prato/${props.id}`)}>
      <div className={classNames({ [styles.item__imagem]: true })}>
        <img src={props.photo} alt={props.title} />
      </div>
      <div className={classNames({ [styles.item__descricao]: true })}>
        <div className={classNames({ [styles.item__titulo]: true })}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <TagsPrato {...props}/>
      </div>
    </div>
  );
}
