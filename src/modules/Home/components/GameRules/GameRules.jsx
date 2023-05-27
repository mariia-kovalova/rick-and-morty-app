import {
  AboutModal,
  Greeting,
  List,
  PageHeader,
  Paragraph,
  Start,
} from './GameRules.styled';

export const GameRules = () => {
  return (
    <AboutModal>
      <Greeting>Welcome, traveler!</Greeting>
      <Start>Let's start your journey!</Start>
      <List>
        <li>
          <PageHeader>⭐ Home page</PageHeader>
          <Paragraph>1. Click Teleport button</Paragraph>
          <Paragraph>
            2. This will generate random character, location and new Rick and
            Morty adventure!
          </Paragraph>
        </li>
        <li>
          <PageHeader>⭐ Characters</PageHeader>
          <Paragraph>1. Generate Random Character.</Paragraph>
          <Paragraph>2. Check the full list of characters.</Paragraph>
          <Paragraph>3. Filter characters by Name, Status or Gender.</Paragraph>
          <Paragraph>4. Click on character card to find out more.</Paragraph>
        </li>
        <li>
          <PageHeader>⭐ Locations</PageHeader>
          <Paragraph>1. Generate Random Location.</Paragraph>
          <Paragraph>2. Check the full list of locations.</Paragraph>
          <Paragraph>3. Filter locations by Name, Type or Dimension.</Paragraph>
          <Paragraph>4. Click on location card to find out more.</Paragraph>
        </li>
        <li>
          <PageHeader>⭐ Episodes</PageHeader>
          <Paragraph>1. Generate Random Episode.</Paragraph>
          <Paragraph>2. Check the full list of episodes.</Paragraph>
          <Paragraph>3. Filter episodes by Season or Name.</Paragraph>
          <Paragraph>4. Click on episode card to find out more.</Paragraph>
        </li>
        <li>
          <PageHeader>⭐ Library</PageHeader>
          <Paragraph>
            1. Add Characters, Locations and Episodes to your Library by
            clicking Heart button on their cards.
          </Paragraph>
          <Paragraph>
            2. Use Library page to access your favourite Characters, Locations
            and Episodes.
          </Paragraph>
        </li>
      </List>
    </AboutModal>
  );
};
