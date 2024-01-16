import { createContext, useContext, useState } from "react";

const UsersContext = createContext();

export function useUserContext() {
  return useContext(UsersContext);
}
export default function UsersProvider({ children }) {
  // states
  const [users, setUsers] = useState({
    original: [],
    input: [],
    suggested: [],
  });
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [highlightedId, setHighlightedId] = useState(null);

  // functions
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    setUsers((prev) => ({
      ...prev,
      original: [...users],
      suggested: [...users],
    }));
  };

  const removeUser = (id) => {
    const updatedInputUsers = users.input.filter(({ id: ID }) => ID !== id);
    const updatedSuggestedUsers = [
      ...users.suggested,
      users.original.find(({ id: ID }) => ID === id),
    ];
    setUsers((prev) => ({
      ...prev,
      input: updatedInputUsers,
      suggested: updatedSuggestedUsers,
    }));
    setHighlightedId(null);
  };
  const chooseUserHandler = (id) => {
    setShowModal(false);
    const updatedSuggestedUsers = users.suggested.filter(
      ({ id: ID }) => ID !== id
    );
    const updatedInputUsers = [
      ...users.input,
      users.original.find(({ id: ID }) => ID === id),
    ];
    setUsers((prev) => ({
      ...prev,
      input: updatedInputUsers,
      suggested: updatedSuggestedUsers,
    }));
    setInput("");
    setHighlightedId(null);
  };

  const backspaceHandler = (e) => {
    if (e.key === "Backspace" && input === "") {
      const userToRemove = users.input.find(
        (user, index, arr) => index === arr.length - 1
      );
      setHighlightedId(userToRemove.id);

      if (highlightedId && e.key === "Backspace") {
        const updatedInputUsers = users.input.filter(
          ({ id }) => id !== userToRemove.id
        );
        const updatedSuggestedUsers = [...users.suggested, userToRemove];
        setUsers((prev) => ({
          ...prev,
          input: updatedInputUsers,
          suggested: updatedSuggestedUsers,
        }));
        setHighlightedId(null);
      }
    }
  };

  const values = {
    users,
    input,
    showModal,
    highlightedId,
    setUsers,
    setInput,
    setShowModal,
    fetchUsers,
    removeUser,
    chooseUserHandler,
    backspaceHandler,
    setHighlightedId,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
}
