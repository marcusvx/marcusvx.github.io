import { withText } from 'preact-i18n';
import styles from './style.scss';

export const TypedText = ({ translationId }) => {
  const Typed = withText(translationId)(props => {
    const text = props[translationId.split('.')[1]];
    return (
      <div className={styles.wrapper} style={{ width: `${text.length}ch` }}>
        {text}
      </div>
    );
  });

  return <Typed />;
};
