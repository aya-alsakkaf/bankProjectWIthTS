import { useQuery } from "@tanstack/react-query";
import React from "react";
import { myProfile } from "../../API/auth";
import { UserCard } from "../../Components/UserCard";

const Profile = () => {
  const { data } = useQuery({
    queryKey: ["myProfile"],
    queryFn: myProfile,
  });

  return (
    <div className="h-[100vh]  flex flex-col justify-center items-center">
      <UserCard
        username={data?.username}
        image={data?.image}
        balance={data?.balance}
        profile={true}
      />
    </div>
  );
};

export default Profile;
