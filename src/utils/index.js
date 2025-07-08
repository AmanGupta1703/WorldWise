function flagEmojiToCountryCode(emoji) {
  const codePoints = Array.from(emoji).map((char) => char.codePointAt(0) - 0x1f1e6);

  const countryCode = codePoints
    .map((codePoint) => String.fromCharCode(codePoint + "A".charCodeAt(0)))
    .join("");

  return countryCode;
}

function getFlagUrl(countryCode) {
  const code = countryCode.toLowerCase();

  return `https://flagcdn.com/w160/${code}.png`;
}

function formatISODate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function formatCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

function getUserPosition() {
  if ("geolocation" in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {
            coords: { latitude, longitude },
          } = position;
          resolve([latitude, longitude]);
        },
        (error) => {
          reject(error);
        },
      );
    });
  } else {
    throw new Error("Geolocation is not supported by this browser.");
  }
}

export { flagEmojiToCountryCode, getFlagUrl, formatISODate, formatCurrentDate, getUserPosition };
