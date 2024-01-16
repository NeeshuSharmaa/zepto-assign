import { useUserContext } from "../contexts/UsersProvider";

export default function SuggestionModal() {
  const { input, users, chooseUserHandler } = useUserContext();

  let filteredUsers = input
    ? users.suggested.filter(({ firstName, lastName }) =>
        (firstName + lastName).toLowerCase().includes(input.toLowerCase())
      )
    : users?.suggested;

  return (
    <ul className="modal" anchor="input">
      {filteredUsers?.map(({ id, firstName, lastName, email, image }) => (
        <li key={id} onClick={() => chooseUserHandler(id)}>
          <div>
            <img src={image} alt={firstName} className="user-img" />
            <span>
              {firstName} {lastName}
            </span>
          </div>

          <span>{email}</span>
        </li>
      ))}
    </ul>
  );
}
