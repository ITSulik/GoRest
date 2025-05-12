import Card from "./Card";
import type { User } from "../models/user";
import "./style.css";

interface ListProps {
    users: User[];
}

function List({ users }: ListProps) {
    return (
        <div id="con" className="justify-center flex-wrap flex">
            {users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </div>
    );
}

export default List;
