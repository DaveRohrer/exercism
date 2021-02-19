//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (code) => {

  const handshakeEvents = [
    "wink",
    "double blink",
    "close your eyes",
    "jump",
    "Reverse order",
  ];
  if ((code & 16) > 0) {
    code -= 16;
    return handshakeEvents.filter((x, index) => { return (1 << index & code) > 0 }).reverse();
  } else {
    return handshakeEvents.filter((x, index) => { return (1 << index & code) > 0 })
  }
};
