import { useUserContext } from "../contexts/UsersProvider";

export default function UserChips() {
  const { users, removeUser, highlightedId } = useUserContext();
  return (
    <>
      {users.input.map(({ id, name }) => (
        <li key={id} className={highlightedId === id ? "highlight" : ""}>
          <span>{name}</span>
          <small onClick={() => removeUser(id)}>x</small>
        </li>
      ))}
    </>
  );
}
