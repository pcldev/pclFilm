export const resizeImage = (url, width = "", height = "") =>
  url.startsWith("https://graph.facebook.com/")
    ? url
    : `https://images.weserv.nl/?url=${encodeURIComponent(
        url
      )}&w=${width}&h=${height}&fit=outside`;
export const convertSrtToVtt = (url) =>
  `https://srt-to-vtt-two.vercel.app?url=${url}`;

// tool made by napthedev
