const domain = "http://localhost:7010/";
const socket = "ws://localhost:7010/";
const urls = {
  login: `${domain}user/login/pwd`,
  myInfo: `${domain}user/my/info`,
  updateMyInfo: `${domain}user/update/normal`,
  updateMyPwd: `${domain}user/update/pwd`,
  syncWxInfo: `${domain}user/update/wx`,
  forumList: `${domain}forum/list`,
  threadCreate: `${domain}thread/create`,
  threadList: (fid, page) => `${domain}thread/list/${fid}/${page}`,
  threadInfo: (tid, page) => `${domain}thread/info/${tid}/${page}`,
  threadReply: `${domain}thread/reply`,
  groupMemberList: gid => `${domain}group/users/${gid}`,
  userInfo: uid => `${domain}user/info/${uid}`,
  userThreadList: (uid, page) => `${domain}user/threads/${uid}/${page}`,
  userGroup: uid => `${domain}group/user/${uid}`,
  messageList: page => `${domain}message/list/${page}`,
  messageRead: mid => `${domain}message/read/${mid}`,
  messageDelete: mid => `${domain}message/delete/${mid}`,
  messageReadAll: `${domain}message/all/read`,
  messageDeleteAll: `${domain}message/all/delete`,
  messageCount: `${domain}message/count`,
  closeThread: `${domain}thread/close`,
  diamondThread: `${domain}thread/diamond`,
  topThread: `${domain}thread/top`,
  deleteThread: tid => `${domain}thread/delete/${tid}`,
  deletePost: pid => `${domain}post/delete/${pid}`,
  deleteThreadHard: tid => `${domain}thread/deleteHard/${tid}`,
  deletePostHard: pid => `${domain}post/deleteHard/${pid}`,
  recoveryThread: tid => `${domain}thread/recovery/${tid}`,
  recoveryPost: pid => `${domain}post/recovery/${pid}`,
  groupList: `${domain}group/list`,
  groupUsers: gid => `${domain}group/users/${gid}`,
  forumListSimple: `${domain}forum/listSimple`,
  socket: socket
};
export default urls;
