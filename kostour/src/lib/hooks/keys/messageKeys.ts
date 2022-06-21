export const messageKeys = {
  messages: (filters?: any) =>
    ["messages", ...Object.values(filters || [])] as const,
  message: (id: string) => ["messages", id] as const,
};
