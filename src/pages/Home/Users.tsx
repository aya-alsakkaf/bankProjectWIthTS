import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../../API/auth";
import { UserCard } from "../../Components/UserCard";

const Users = () => {
  const { data } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  });

  const userList = data?.map((user: any) => {
    return (
      <UserCard
        key={user._id}
        balance={user.balance}
        image={user.image}
        username={user.username}
        profile={false}
      />
    );
  });
  return <div className="flex flex-wrap gap-10 justify-center">{userList}</div>;
};

export default Users;
