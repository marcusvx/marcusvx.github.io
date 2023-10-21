import style from './style.scss';
import classNames from 'classnames';

const SectionHeader = ({ darkBg, children }) => {
  const variantColor = darkBg ? style.darkBg : '';

  return (
    <div className={style.sectionHeader}>
      {children}
      <div className={classNames(style.headingLine, variantColor)} />
    </div>
  );
};

SectionHeader.Title = ({ children }) => {
  return <h2 className={style.mainHeading}>{children}</h2>;
};

SectionHeader.SubTitle = ({ darkBg, children }) => {
  const variantColor = darkBg ? style.darkBg : '';

  return <p className={classNames(style.subtitle, variantColor)}>{children}</p>;
};

export default SectionHeader;
