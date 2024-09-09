import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VerificationAge from "./components/verification-age/VerificationAge";
import CardUsers from "./components/card-user/CardUsers";
import useUsersVerification from "./store/manageUsers";

function App() {
  const [verificationAge, setverificationAge] = useState(true);
  const users = useUsersVerification((state) => state.users);

  return (
    <>
      <VerificationAge
        verificationAge={verificationAge}
        setverificationAge={setverificationAge}
      />
      <>
        <button onClick={() => setverificationAge(!verificationAge)}>
          Verificar
        </button>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <h5>There are {users.length} people</h5>
        </div>
        <CardUsers users={users} />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </>
  );
}

export default App;
