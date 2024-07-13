const storeToken = (token: string): void => {
  localStorage.setItem("token", token);
};

const getToken = (): string | null => {
  return localStorage.getItem("token") || null;
};

const deleteToken = (): void => {
  localStorage.removeItem("token");
};

export { storeToken, getToken, deleteToken };
