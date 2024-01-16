import { useUserContext } from "../contexts/UsersProvider";

export default function SuggestionModal() {
  const { input, users, chooseUserHandler } = useUserContext();

  let filteredUsers = input
    ? users.suggested.filter(({ name }) =>
        name.toLowerCase().includes(input.toLowerCase())
      )
    : users?.suggested;

  return (
    <ul className="modal" anchor="input">
      {filteredUsers?.map(({ id, name, email }) => (
        <li key={id} onClick={() => chooseUserHandler(id)}>
          <span>{name}</span>
          <span>{email}</span>
        </li>
      ))}
    </ul>
  );
}
