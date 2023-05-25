import { PieChart } from '../PieChart/PieChart';
import { Item, List, StyledH3, Text, Wrap } from './Statistics.styled';

export const Statistics = ({ data, statistics }) => {
  return (
    <Wrap>
      <StyledH3>Statistics</StyledH3>
      <Text>
        Data generated with the help of teleport or Rick's randomizers
      </Text>
      <PieChart data={data} statistics={statistics} />
      <List>
        {data.map(({ label, count }) => (
          <Item key={label}>
            <p>Number of random {label}:</p>
            <p>{count}</p>
          </Item>
        ))}
      </List>
    </Wrap>
  );
};
