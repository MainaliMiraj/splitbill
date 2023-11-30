
import EachFriend from "./EachFriend";





export default function FriendList({ friends, onSelection,selectedFriend}) {
  return (
    <ul>
      {friends.map((friend) => (
        <EachFriend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
