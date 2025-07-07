type ChatGroupType = {
    id: string;
    user_id: string;
    title:string;
    passcode: string;
    created_at: string;
}
type MessageType = {
  id: string;
  message: string;
  group_id: string;
  name: string;
  created_at: string;
};
type GroupChatUserType = {
  id: number;
  name: string;
  group_id: string;
  created_at: string;
  isOnline?: boolean;
};