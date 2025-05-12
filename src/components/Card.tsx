import type { User } from "../models/user";

interface CardProps {
    user: User;
}

function Card({ user }: CardProps) {
    return (
        <div
            className={`flex justify-center font-semibold py-20 text-[20px] m-2 h-[20px] w-[320px] text-center rounded-[15px] cursor-pointer items-center transition duration-300 hover:opacity-80   ${user.status === "inactive" ? "bg-gray-300" : "bg-green-600"}`}
        >
            {user.name}
        </div>
    );
}

export default Card;
