import React from "react";
import SuggestionModal from "./SuggestionModal";
import { useUserContext } from "../contexts/UsersProvider";

export default function AddUsers() {
  const { input, showModal, setShowModal, setInput, backspaceHandler } =
    useUserContext();
  return (
    <div className="add-users">
      <input
        type="text"
        value={input}
        placeholder="Add new user..."
        onClick={() => setShowModal(true)}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={backspaceHandler}
      />
      {showModal && <SuggestionModal />}
    </div>
  );
}
