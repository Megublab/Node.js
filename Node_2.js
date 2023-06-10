function areAnagrams(str1, str2) {
  // Видаляємо всі пробіли з рядків і перетворюємо на нижній регістр
  const normalizedStr1 = str1.replace(/\s/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/\s/g, '').toLowerCase();

  // Перевіряємо, чи мають рядки однакову довжину
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  // Створюємо об'єкти для підрахунку кількості входжень кожного символу в рядки
  const charCount1 = {};
  const charCount2 = {};

  // Підраховуємо кількість входжень кожного символу в рядок 1
  for (let i = 0; i < normalizedStr1.length; i++) {
    const char = normalizedStr1[i];
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Підраховуємо кількість входжень кожного символу в рядок 2
  for (let i = 0; i < normalizedStr2.length; i++) {
    const char = normalizedStr2[i];
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Перевіряємо, чи мають обидва рядки однакову кількість входжень кожного символу
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

// Приклад використання:
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Виведе: true
