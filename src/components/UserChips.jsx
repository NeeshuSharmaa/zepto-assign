import { useUserContext } from "../contexts/UsersProvider";

export default function UserChips() {
  const { users, removeUser, highlightedId } = useUserContext();
  return (
    <>
      {users.input.map(({ id, firstName, lastName, image }) => (
        <li key={id} className={highlightedId === id ? "highlight" : ""}>
          <div>
            <img src={image} alt={firstName} className="user-img" />
            <span>
              {firstName} {lastName}
            </span>
          </div>
          <small onClick={() => removeUser(id)}>x</small>
        </li>
      ))}
    </>
  );
}
