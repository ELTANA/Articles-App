export const truncateText = (text: string, limit: number) => {
  return {
    truncatedTest: text && text.length > limit ? `${text.substring(0, limit)}...` : text,
    isTruncated: text && text.length > limit
  };
};
