import { useEffect, useState } from "react";
import type { User } from "../models/user";

function UseFetch(url: string) {
    const [users, setUser] = useState<User[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const Fuser = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await fetch(url);
            const data: User[] = await response.json();
            setUser(data);
            setLoading(false);
        };

        Fuser();
    }, [url]);

    return { users, isLoading };
}

export default UseFetch;
