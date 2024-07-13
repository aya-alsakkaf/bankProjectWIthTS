import instance from ".";
import { storeToken } from "./storage";

const login = async (userInfo: { username: string; password: string }) => {
  console.log(userInfo);
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  storeToken(data.token);
  return data;
};

const myProfile = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const updateProfile = async (userInfo: { image: string | null }) => {
  const formData = new FormData();
  if (userInfo.image) {
    formData.append("image", userInfo.image);
  }
  const { data } = await instance.put(
    "/mini-project/api/auth/profile",
    formData
  );
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const transferToAccount = async (transferInfo: {
  username: string;
  amount: string;
}) => {
  console.log(transferInfo);
  const { data } = await instance.put(
    `/mini-project/api/transactions/transfer/${transferInfo.username}`,
    {
      amount: Number(transferInfo.amount),
    }
  );
  return data;
};
export { login, myProfile, updateProfile, getAllUsers, transferToAccount };
