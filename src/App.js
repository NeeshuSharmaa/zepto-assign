import { useEffect } from "react";
import "./App.css";
import { useUserContext } from "./contexts/UsersProvider";
import UserChips from "./components/UserChips";
import AddUsers from "./components/AddUsers";

function App() {
  const { fetchUsers } = useUserContext();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Pick Users</h1>
      <div className="input-field">
        <UserChips />
        <AddUsers />
      </div>
    </div>
  );
}

export default App;
