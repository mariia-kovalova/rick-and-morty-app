import { Circle, Wrap } from './PieChart.styled';

export const PieChart = ({ data, statistics }) => {
  return (
    <Wrap>
      {data.map(({ label }) => (
        <Circle key={label} label={label} statistics={statistics} />
      ))}
    </Wrap>
  );
};
