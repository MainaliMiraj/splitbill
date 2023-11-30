import { useState } from "react";

function FormSplitBill({ friendSelected, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || isNaN(paidByUser)) return;
    onSplitBill(whoIsPaying === "user" ? -paidByUser : paidByFriend);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2 style={{ color: "darkgreen" }}>
        Split a bill with {friendSelected.name}
      </h2>

      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♂️Your Expenses</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => {
          const userInput = Number(e.target.value);
          setPaidByUser(
            !isNaN(userInput) && userInput <= bill ? userInput : paidByUser
          );
        }}
      />

      <label>👬{friendSelected.name}'s Expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑Who is playing the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="You">You</option>
        <option value="user">{friendSelected.name}</option>
      </select>

      <button className="button">Split Bill</button>
    </form>
  );
}

export default FormSplitBill;
