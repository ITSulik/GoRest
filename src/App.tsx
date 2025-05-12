import List from "./components/List";
import Load from "./components/Loading";
import UseFetch from "./hooks/UseFetch";
import "./components/style.css";

function App() {
    const { users, isLoading } = UseFetch("https://gorest.co.in/public/v2/users");

    return (
        <div className="app">
            <h1 className="text-center font-bold text-[30px] py-8">GoRest Users</h1>
            {isLoading ? <Load /> : <List users={users} />}
        </div>
    );
}

export default App;
