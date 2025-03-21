import { apiClient } from "../apiClient";
import { User } from "@/models/User";

export const getUsers = async (): Promise<User[]> => {
    const response = await apiClient.get(process.env.URL_USER || "/users/");
    return response.data;
};

export const createUser = async (userData: Omit<User, "id">): Promise<User> => {
    const response = await apiClient.post(process.env.URL_USER || "/users/", userData);
    return response.data;
};
