import style from "./style";
import classNames from "classnames";

const Quote = (props) => {
  const { message, author } = props;
  return (
    <section class={style.quote}>
      <div class={style.container}>
        <div class={style.quoteWrapper}>
          <p class="words">
            <span class={classNames(style.quoteMark, style.open)}>"</span>
            {message}
            <span class={style.quoteMark}>"</span>
          </p>
          <p class={style.author}>- {author} -</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
