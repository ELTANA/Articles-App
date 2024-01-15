export const truncateText = (text: string, limit: number) => {
  return {
    truncatedTest: text && text.length > limit ? `${text.substring(0, limit)}...` : text,
    isTruncated: text && text.length > limit
  };
};

export const generateUniqueString = () => {
  const timestampPart = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 9); // 7 characters

  return `${timestampPart}${randomPart}`.toUpperCase().substring(0, 7);
};
