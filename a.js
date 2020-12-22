function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); // Trả về 3, phần tử thứ 4.