const userAccess = data => {
  return { type: 'USER_ACCESS', data };
};

const handleUserData = data => {
  return {
    type: 'HANDLE_USER_DATA',
    data,
  };
};

const setMBTI = data => {
  return {
    type: 'SET_MBTI',
    data,
  };
};

const changeNickname = data => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  };
};

const setUserImage = data => {
  return {
    type: 'SET_USER_IMAGE',
    data,
  };
};

const userActions = {
  userAccess,
  handleUserData,
  setMBTI,
  changeNickname,
  setUserImage,
};

export default userActions;
