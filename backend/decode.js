const encodedString = 'k4rqMHknJiHJ1hyfaRWbNw==';

const encodings = ['ascii', 'utf8', 'utf16le', 'ucs2', 'base64', 'latin1', 'binary'];

for (const encoding of encodings) {
  try {
    const decodedString = Buffer.from(encodedString, 'base64').toString(encoding);
    console.log(`Decoded string (${encoding}):`, decodedString);
  } catch (error) {
    console.log(`Error decoding string (${encoding}):`, error.message);
  }
}