import { Outlet } from "react-router-dom";

import { useAuth } from "./contexts/AuthContext";

import { Header } from "./components";

const App = () => {
  const { status: authStatus } = useAuth();

  return (
    <div className="h-full bg-zinc-800 font-manrope flex flex-col relative z-1 selection:bg-zinc-700 selection:text-zinc-100">
      {!authStatus ? <Header /> : null}
      <main className="flex-1">
        <section className=" h-full">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default App;
