import { useState } from "react";

function AddFriend({ OnAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48/");

  function handleSubmit(e) {
     setName("");
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?u=${id}`,
      balance: 0,
      id,
    };
    OnAddFriend(newFriend);
    
    
    setImage("https://i.pravatar.cc/48/");
  }
 

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬Friend name</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <label>🏞️ Image Url</label>
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <button className="button">Add</button>
    </form>
  );
}

export default AddFriend;
