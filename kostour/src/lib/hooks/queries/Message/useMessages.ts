import { useQuery, UseQueryOptions } from "react-query";
import { getMessages, IGetMessagesResponse } from "../../../../api/Messages";
import { messageKeys } from "../../keys/messageKeys";

export default function useMessages(
  options?: UseQueryOptions<any, any, IGetMessagesResponse, any>
) {
  return useQuery<any, any, IGetMessagesResponse, any>(
    messageKeys.messages(),
    getMessages,
    {
      useErrorBoundary: true,
      ...options,
    }
  );
}
