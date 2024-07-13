import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { FC, useState } from "react";
import { transferToAccount, updateProfile } from "../API/auth";

type UserCardProps = {
  username: string;
  image: string;
  balance: number;
  profile: boolean;
};
export const UserCard: FC<UserCardProps> = ({
  image,
  username,
  balance,
  profile,
}) => {
  const [userInfo, setUserInfo] = useState({
    image: "",
  });
  const [transferInfo, setTransferInfo] = useState({
    username: "",
    amount: "",
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["updateProfilePicture"],
    mutationFn: () => updateProfile(userInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myProfile"],
      });
    },
  });

  const { mutate: transfer } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transferToAccount(transferInfo),
  });
  const handleChange = (e: any) => {
    if (e.target.files) {
      setUserInfo({ ...userInfo, image: e.target.files[0] });
    }
  };
  return (
    <div className="bg-white p-10 flex flex-col items-center rounded shadow-lg">
      <img
        src={`https://react-bank-project.eapi.joincoded.com/${image}`}
        alt="profile"
        className="w-24 h-24 rounded-full"
      />

      <h1> Username: {username}</h1>
      <h1> Balance: {balance}</h1>

      {profile ? (
        <>
          <input
            type="file"
            className="p-2 rounded border"
            name="image"
            onChange={handleChange}
          />
          <button
            className="p-2 mt-2 bg-green-700 text-white rounded text-center"
            onClick={() => mutate()}
          >
            Update Profile Picture
          </button>
        </>
      ) : (
        <>
          <input
            type="number"
            className="p-2 rounded border"
            name="amount"
            onChange={(e) =>
              setTransferInfo({ ...transferInfo, amount: e.target.value })
            }
          />
          <button
            className="p-2 mt-2 bg-green-700 text-white rounded text-center"
            onClick={() => {
              setTransferInfo({ ...transferInfo, username: username });
              transfer();
            }}
          >
            Transfer
          </button>
        </>
      )}
    </div>
  );
};
