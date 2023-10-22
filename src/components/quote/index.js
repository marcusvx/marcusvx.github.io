import style from './style';
import classNames from 'classnames';

const Quote = props => {
  const { children, author, reference } = props;
  return (
    <section className={style.quote}>
      <div className={style.container}>
        <div className={style.quoteWrapper}>
          <p className="words">
            <span className={classNames(style.quoteMark, style.open)}>"</span>
            {children}
            <span className={style.quoteMark}>"</span>
          </p>
          <p className={style.author}>- {author} -</p>
          <p className={style.reference}>{reference}</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
