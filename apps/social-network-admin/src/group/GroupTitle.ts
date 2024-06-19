import { Group as TGroup } from "../api/group/Group";

export const GROUP_TITLE_FIELD = "id";

export const GroupTitle = (record: TGroup): string => {
  return record.id?.toString() || String(record.id);
};
