// task-1.js

// Оголошення функції isEnoughCapacity, яка приймає параметри products, containerSize
function isEnoughCapacity(products, containerSize) {
    // Підрахунок загальної кількості товарів у об'єкті products
    const totalProducts = Object.values(products).reduce((total, count) => total + count, 0);
    
    // Повернення результату перевірки, чи помістяться всі товари у контейнер
    return totalProducts <= containerSize;
  }
  
  // Перевірка роботи функції
  console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
  console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
  console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
  console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
  