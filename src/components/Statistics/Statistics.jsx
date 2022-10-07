import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
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
