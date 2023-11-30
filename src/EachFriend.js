function EachFriend({ friend, onSelection,selectedFriend }) {
  const isSelected=selectedFriend && selectedFriend.id===friend.id;

  return (
    <li className={isSelected?'selected':''}>
      {/* Image and the name */}
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {/* balance conditional rendering */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}

      {/* Button */}
      <button className="button" onClick={() => onSelection(friend)}>
        {isSelected?'Close':'Select'}
      </button>
    </li>
  );
}

export default EachFriend;
