import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GameTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class GameType {
  readonly id: string;
  readonly tag?: string;
  readonly gameID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<GameType, GameTypeMetaData>);
  static copyOf(source: GameType, mutator: (draft: MutableModel<GameType, GameTypeMetaData>) => MutableModel<GameType, GameTypeMetaData> | void): GameType;
}

export declare class Game {
  readonly id: string;
  readonly coverImageUrl?: string;
  readonly name?: string;
  readonly intro?: string;
  readonly GameTypes?: (GameType | null)[];
  readonly Videos?: (Video | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Game, GameMetaData>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game, GameMetaData>) => MutableModel<Game, GameMetaData> | void): Game;
}

export declare class Video {
  readonly id: string;
  readonly coverImageUrl?: string;
  readonly name?: string;
  readonly length?: string;
  readonly views?: string;
  readonly videoUrl?: string;
  readonly userID?: string;
  readonly gameID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Video, VideoMetaData>);
  static copyOf(source: Video, mutator: (draft: MutableModel<Video, VideoMetaData>) => MutableModel<Video, VideoMetaData> | void): Video;
}

export declare class ChatRoom {
  readonly id: string;
  readonly newMessages?: number;
  readonly LastMessage?: Message;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly chatRoomLastMessageId?: string;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}

export declare class Message {
  readonly id: string;
  readonly content: string;
  readonly chatroomID?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name?: string;
  readonly status?: string;
  readonly Messages?: (Message | null)[];
  readonly imageUrl?: string;
  readonly Videos?: (Video | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}