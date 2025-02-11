export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const emptyAvatarURL = './src/images/empty_avatar.png';

export const fixGroupData = (data) => {
  const fixData = data;

  console.log('fixdata');
  console.log(data);

  if (fixData) {
    fixData.forEach((obj) => {
      console.log(obj.avatar);
      if (!obj.avatar) {
        obj.avatar = emptyAvatarURL;
      }
    });
  }
  return fixData;
};
