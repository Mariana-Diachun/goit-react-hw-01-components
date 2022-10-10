import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.wrapper}>
      <div>{title && <h2 className={css.title}>{title}</h2>}</div>
      <ul className={css.list}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.item}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};
