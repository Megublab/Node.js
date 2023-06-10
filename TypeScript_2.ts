function areAnagrams(str1: string, str2: string): boolean {
  const normalizedStr1 = str1.replace(/\s/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/\s/g, '').toLowerCase();

  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  const charCount1: Record<string, number> = {};
  const charCount2: Record<string, number> = {};

  for (let i = 0; i < normalizedStr1.length; i++) {
    const char = normalizedStr1[i];
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (let i = 0; i < normalizedStr2.length; i++) {
    const char = normalizedStr2[i];
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

// Приклад використання:
const string1: string = "listen";
const string2: string = "silent";
console.log(areAnagrams(string1, string2));
