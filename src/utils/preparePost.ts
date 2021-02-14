export const preparePost = (postBody: string) => {
  if (postBody.length > 100) {
    const textArr = postBody.split('');
    textArr.length = 100;
    return textArr.join('') + '...';
  }
  return postBody;
};
