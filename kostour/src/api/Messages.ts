import { apiRequest } from "./Api";

export interface IMessage {
  _id: string;
  question: string;
  answer: string;
  created_at: Date;
  updated_at: Date;
}

export type IGetMessagesResponse = IMessage[];

export const getMessages = () =>
  apiRequest<any, IGetMessagesResponse>("get", "messages");
