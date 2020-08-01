import style from "./style";
import classNames from "classnames";

const SectionHeader = (props) => {
  const { title, subTitle, darkBg } = props;
  const variantColor = darkBg ? style.darkBg : "";

  return (
    <div class={style.sectionHeader}>
      <h2 class={style.mainHeading}>{title}</h2>
      <div class={classNames(style.headingLine, variantColor)}></div>
      {subTitle ? (
        <p class={classNames(style.subtitle, variantColor)}>{subTitle}</p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
