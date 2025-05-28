import api from '@/lib/axios';

type GetUsersParams = {
  search?: string;
  page?: number;
};

export async function getUsers(params?: GetUsersParams) {
  try {
    const response = await api.get('/random-user', {
      params: params?.search ? {search: params?.search} : {},
    });
    return response.data.data;
  } catch (error: any) {
    alert(`Failed to fetch users: ${error.message}`);
    throw error;
  }
}
