import useUsersVerification from "../../store/manageUsers";
import style from "./CardUsers.module.css";
export default function CardUsers({ users }) {
  console.log(users)
  return (
    <table className={style.table_users}>
      {users.length > 0 &&
        users.map((user) => {
          let date = new Date(user.entryDate);
          return (
            <div key={user.id} className={style.div_card_user}>
              <tr>
                <td>Name: </td>
                <tr>
                  <b>{user.name}</b>
                </tr>
              </tr>
              <tr>
                <td>Age: </td>
                <tr>
                  <b>{user.age}</b>
                </tr>
              </tr>
              <tr>
                <td>Date: </td>
                <tr>
                  <b>{date ? date.toLocaleDateString() : ""}</b>
                </tr>
              </tr>
              <tr>
                <td>Time: </td>
                <tr>
                  <b>{date ? date.toLocaleTimeString() : ""}</b>
                </tr>
              </tr>
              <tr>
                <td>Id: </td>
                <tr className={style.user_id}>
                  <b>{user.id.substring(0, 8)}</b>
                </tr>
              </tr>
            </div>
          );
        })}
    </table>
  );
}
