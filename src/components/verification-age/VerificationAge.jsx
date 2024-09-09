import { useState } from "react";
import style from "./verificationAge.module.css";
import manageUsers from "../../store/manageUsers";
export default function VerificationAge({
  verificationAge,
  setverificationAge,
}) {
  const [ageUser, setAgeUser] = useState("");
  const [nameUser, setNameUser] = useState("");
  const addUser = manageUsers((state) => state.addUser);
  const [mensagge, setMensagge] = useState("");
  const [validationColor, setValidationColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const menor13 = () => {
      setMensagge("You can't enter the event");
      setValidationColor("#ff0000");
      setTimeout(() => {
        setMensagge("");
      }, 2000);
      return;
    };
    const mayor17 = () => {
      setMensagge("You can enter the event");
      setValidationColor("#00ff04");
      const entryDate = new Date();
      addUser({
        name: nameUser,
        age: ageUser,
        id: crypto.randomUUID(),
        entryDate,
      });
      setTimeout(() => {
        setMensagge("");
        setverificationAge(false);
      }, 1000);
      return
    };
    const menor13mayor17 = () => {
      setMensagge("You can enter the event with adult supervision");
      setValidationColor("#f6ff00");
      setTimeout(() => {
        setMensagge("I am accompanied by a responsible adult");
      }, 2000);
      return;
    };
    ageUser < 13 && menor13();
    ageUser > 17 && mayor17();
    12 > ageUser < 17 && menor13mayor17();
    // ageUser < 13 ? menor13() : ageUser > 17 ? mayor17() : menor13mayor17();
  };
  return (
    <div style={{ display: verificationAge ? "" : "none" }}>
      <div className={style.Div_mask_verification} />
      <div
        className={style.Div_Verification_Age}
        style={{ border: `${validationColor} 2px solid ` }}
      >
        {verificationAge && (
          <form onSubmit={handleSubmit} className={style.Form_verification_age}>
            <h1>verify your age</h1>

            <input
              placeholder="Enter your name"
              type="text"
              value={nameUser}
              onChange={(e) => {
                setNameUser(e.target.value);
              }}
            />
            <br />
            <input
              placeholder="Enter your age"
              type="number"
              value={ageUser.includes("e") ? "" : ageUser}
              onChange={(e) => {
                setAgeUser(e.target.value);
                setMensagge("");
              }}
              max={130}
              min={0}
            />
            <p>{mensagge}</p>
            {mensagge ? "" : <button type="submit">verify</button>}
            {mensagge == "I am accompanied by a responsible adult" && (
              <>
                <button
                  onClick={() => {
                    setMensagge("");
                    setAgeUser("");
                  }}
                >
                  cancel
                </button>
                <button
                  onClick={() => {
                    setverificationAge(false);
                    addUser({
                      name: nameUser,
                      age: ageUser,
                      id: crypto.randomUUID(),
                      entryDate: new Date(),
                    });
                  }}
                >
                  accept
                </button>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
