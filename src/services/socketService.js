/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/18/16.
 */

import * as userService from './userService';
import * as messageService from './messageService';

let members = [];

export default function socketService(socket, io) {
  let id;
  let nickName;

  socket.on('initialize', (user) => {
    nickName = user.nick_name;
    userService.create({nick_name: nickName}).then((user) => {
      id = user.get('id');
      socket.emit('initialize', user.toJSON());
      members.push(user.toJSON());
      io.emit('list:members', members);
    });
  });

  socket.on('disconnect', () => {
    members = members.filter((member) => {
      return member.id !== id;
    });
    io.emit('list:members', members);
  });

  socket.on('send:message', (data) => {
    messageService.create({message: data.message, user_id: data.user.id}).then((message) => {
      let id = message.get('id');
      return messageService.fetchById(id);
    }).then((message) => {
      let response = message.toJSON();
      delete response.user_id;
      io.emit('send:message', response);
    });
  });
}