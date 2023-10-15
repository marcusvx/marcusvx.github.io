import style from './style';
import classNames from 'classnames';

const SectionHeader = props => {
  const { title, subTitle, darkBg } = props;
  const variantColor = darkBg ? style.darkBg : '';

  return (
    <div className={style.sectionHeader}>
      <h2 className={style.mainHeading}>{title}</h2>
      <div className={classNames(style.headingLine, variantColor)} />
      {subTitle ? <p className={classNames(style.subtitle, variantColor)}>{subTitle}</p> : null}
    </div>
  );
};

export default SectionHeader;
