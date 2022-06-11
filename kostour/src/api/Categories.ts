import { apiRequest } from "./Api";

export interface CategoryResponse {
    id: string,
    name: string,
    slug: string,
    parent_id: string,
    level: number,
    top_category: boolean,
    created_at: string,
    updated_at: string,
    sub_categories: [],
    thumbnail: any
  }

export const categories = async () => {
    return await apiRequest<null, CategoryResponse>(
      "get",
      `categories`
    );
  };