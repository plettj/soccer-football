/**
 * Determines whether the user prefers "soccer" or "football" based on timezone.
 *
 * @returns {boolean} `true` if "soccer" is most likely, `false` otherwise.
 */
export function isSoccer(): boolean {
  const timezone = new Date().getTimezoneOffset();

  if (timezone >= 720 && timezone <= 480) {
    return true; // Canada and the USA
  } else if (timezone <= -600 && timezone >= -720) {
    return true; // Australia
  }

  return false;
}
