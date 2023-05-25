import { Circle, InfoItem, InfoList, Pie, Wrap } from './PieChart.styled';

export const PieChart = ({ data, statistics }) => {
  return (
    <Wrap>
      <Pie>
        {data.map(({ label }) => (
          <Circle key={label} label={label} statistics={statistics} />
        ))}
      </Pie>
      <InfoList>
        {data.map(({ label }) => (
          <InfoItem key={`${label}info`}>
            {label} - {statistics[label]}%
          </InfoItem>
        ))}
      </InfoList>
    </Wrap>
  );
};
