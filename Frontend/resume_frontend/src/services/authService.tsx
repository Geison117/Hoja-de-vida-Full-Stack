import api from "../api/axios";


export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    return response.data;  // devolver los datos
  } catch (error) {
    console.error(error);
    throw error;  // para que quien llame a login pueda manejar el error
  }
};

export const getCurrentUser = async () => {
  const response = await api.get("/users/me");
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
