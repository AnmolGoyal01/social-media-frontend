import axios, { AxiosInstance } from "axios";

class UserService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
    //   baseURL: import.meta.env.BACKEND_API_URL,
    //   withCredentials: true,
    });
  }

  async healthCheck() {
    try {
      const response = await this.apiClient.get("/api/v1/healthCheck");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to perform health check.";
    }
  }

  async getUserProfile(username: string) {
    try {
      const response = await this.apiClient.get(`/api/v1/u/${username}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch user profile.";
    }
  }

  async getUserFeed() {
    try {
      const response = await this.apiClient.get("/api/v1/feed");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to fetch user feed.";
    }
  }

  async updateAvatar(avatar: File) {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);

      const response = await this.apiClient.patch("/api/v1/avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to update avatar.";
    }
  }

  async togglePrivateAccount() {
    try {
      const response = await this.apiClient.patch("/api/v1/privateAccount");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to toggle private account.";
    }
  }

  async updateBio(bio: string) {
    try {
      const response = await this.apiClient.patch("/api/v1/bio", { bio });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to update bio.";
    }
  }

  async updateFullName(fullName: string) {
    try {
      const response = await this.apiClient.patch("/api/v1/fullName", { fullName });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to update full name.";
    }
  }

  async updateUsername(username: string) {
    try {
      const response = await this.apiClient.patch("/api/v1/username", { username });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || "Failed to update username.";
    }
  }
}

const userService = new UserService();
export default userService;
