import { useState } from "react";

import FriendList from "./FriendList";
import AddFriend from "./AddFriend";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Krishna",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Barsha",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Shaym",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendFrom, setshowAddFriendFrom] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setshowAddFriendFrom(false);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function handleShowToAddFriend() {
    setshowAddFriendFrom(!showAddFriendFrom);
  }
  function handleSubmitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriendFrom && <AddFriend OnAddFriend={handleAddFriend} />}
        <button className="button" onClick={handleShowToAddFriend}>
          {showAddFriendFrom ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          friendSelected={selectedFriend}
          onSplitBill={handleSubmitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
export default App;
