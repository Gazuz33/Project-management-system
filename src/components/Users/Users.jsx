import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userPhoto.png";
import s from "./Users.module.css";
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
    if (i == 20) break;
  }
  return (
    <div className={s.item}>
      <div className={s.pagesNav}>
        {pages.map((p) => {
          return (
            <div className={s.page}>
              <button
                className={props.currentPage === p && s.selectedPage}
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </button>
            </div>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.Card}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={s.img}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div className={s.user}>
              <span>
                <span className={s.name}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
              </span>
              <div>
                {u.followed ? (
                  <button
                    className={s.follow}
                    disabled={props.followingInProgress}
                    onClick={() => {
                      props.toggleFollowingProgress(true);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "723d1c66-1150-4725-9fd5-40447f80529e",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleFollowingProgress(false);
                        });
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    className={s.follow}
                    disabled={props.followingInProgress}
                    onClick={() => {
                      props.toggleFollowingProgress(true);
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "723d1c66-1150-4725-9fd5-40447f80529e",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                          props.toggleFollowingProgress(false);
                        });
                    }}
                  >
                    Подписаться
                  </button>
                )}
              </div>
            </div>
          </span>
        </div>
      ))}
      <div className={s.pagesNav}>
        {pages.map((p) => {
          return (
            <div className={s.page}>
              <button
                className={props.currentPage === p && s.selectedPage}
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Users;
