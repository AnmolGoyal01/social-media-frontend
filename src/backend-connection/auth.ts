import axios, { AxiosInstance } from "axios";

class AuthService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      //   baseURL: import.meta.env.BACKEND_API_URL,
      //   withCredentials: true, // To include cookies in requests
    });
  }

  async register(
    email: string,
    username: string,
    password: string,
    fullName: string,
    avatar?: File
  ) {
    try {
      const response = await this.apiClient.post("/api/v1/users/register", {
        email,
        username,
        password,
        fullName,
        avatar,
      });
      if (response.status < 300) {
        console.log("Registration successful");
        this.login(email, username, password);
      }
      return response.data;
    } catch (err: any) {
      if (err.response && err.response.data) {
        const htmlError = err.response.data;
        const regex = /Error:\s*([^<]+)<br>/; // Regular expression to match the error message
        const match = htmlError.match(regex);

        if (match && match[1]) {
          throw new Error(match[1].trim());  // Extract the error message from HTML
        }
      }
      throw new Error("An unexpected error occurred");
    }
  }

  async login(email: string, username: string, password: string) {
    try {
      const response = await this.apiClient.post("/api/v1/users/login", {
        email,
        username,
        password,
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Login failed.";
    }
  }

  async logout() {
    try {
      const response = await this.apiClient.post("/api/v1/users/logout");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Logout failed.";
    }
  }

  async changePassword(oldPassword: string, newPassword: string) {
    try {
      const response = await this.apiClient.post(
        "/api/v1/users/change-password",
        { oldPassword, newPassword }
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Password change failed.";
    }
  }

  async refreshToken() {
    try {
      const response = await this.apiClient.post("/api/v1/users/refresh-token");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to refresh access token.";
    }
  }

  async getCurrentUser() {
    try {
      const response = await this.apiClient.get("/api/v1/users/current-user");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch current user.";
    }
  }
}

const authService = new AuthService();
export default authService;
