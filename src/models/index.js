// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { GameType, Game, Video, ChatRoom, Message, User } = initSchema(schema);

export {
  GameType,
  Game,
  Video,
  ChatRoom,
  Message,
  User
};