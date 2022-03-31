import s from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        photoUrl:
          "https://oir.mobi/uploads/posts/2020-08/1596283242_4-p-gubka-bob-art-deviantart-6.png",
        fullName: "Name_1",
        status: "Status № 1",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        followed: true,
        photoUrl:
          "https://oir.mobi/uploads/posts/2020-08/1596283242_4-p-gubka-bob-art-deviantart-6.png",
        fullName: "Name_2",
        status: "Status № 2",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 3,
        followed: true,
        photoUrl:
          "https://oir.mobi/uploads/posts/2020-08/1596283242_4-p-gubka-bob-art-deviantart-6.png",
        fullName: "Name_3",
        status: "Status № 3",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }
  return (
    <div className={s.item}>
      {props.users.map((u) => (
        <div key={u.id} className={s.Card}>
          <span>
            <div>
              <img src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
