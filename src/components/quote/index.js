import style from "./style";

const Quote = (props) => {
  const { message, author } = props;
  return (
    <div class={style.quote + " has-overlay"}>
      <div class="container">
        <div class={style.qouteWrapper}>
          <p class="words">
            <span class={style.qouteMark + " " + style.open}>"</span>
            {message}
            <span class={style.qouteMark}>"</span>
          </p>
          <p class={style.author}>- {author} -</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
