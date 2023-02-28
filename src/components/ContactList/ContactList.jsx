import { List } from './styled/List.styled';

export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </List>
  );
};
