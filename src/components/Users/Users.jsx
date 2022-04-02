import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png";
import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
    });
  }
  render() {
    return (
      <div className={s.item}>
        {this.props.users.map((u) => (
          <div key={u.id} className={s.Card}>
            <span>
              <div>
                <img
                  className={s.img}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>Follow</button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
