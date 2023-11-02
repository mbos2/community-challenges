export interface BasicUserInfo {
  name?: string;
  age?: number;
  aboutShort?: string;
  country?: string;
  hobbies?: string[];
}

export interface AdditionalUserInfo{
  links: string[];
}

export interface UserInfo {
  basicUserInfo?: BasicUserInfo;
  additionalUserInfo?: AdditionalUserInfo;
}

export type IGuildRoleShort = {
  value: string;
  name: string;
}

export interface IOwner {
  ownerId: string;
}