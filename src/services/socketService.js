/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/18/16.
 */

import * as userService from './userService';
import * as messageService from './messageService';

export default function socketService(socket, io) {
  let id;
  let nickName;

  socket.on('initialize', (user) => {
    nickName = user.nick_name;
    console.log(`${nickName} has joined`);
    userService.create({nick_name: nickName}).then((user) => {
      socket.emit('initialize', user.toJSON());
      console.log(user.toJSON());
    });
  });

  socket.on('disconnect', () => {
    console.log(`${nickName} has disconnected`);
  });

  socket.on('send:message', (data) => {
    messageService.create({message: data.message, user_id: data.user.id}).then((message) => {
      let id = message.get('id');
      console.log(id);
      return messageService.fetchById(id);
    }).then((message) => {
      let response = message.toJSON();
      delete response.user_id;
      console.log(response);
      io.emit('send:message', response);
    });
  });
}