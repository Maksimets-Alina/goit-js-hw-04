// task-2.js

// Оголошення функції calcAverageCalories, яка приймає параметр days
function calcAverageCalories(days) {
    // Якщо масив днів порожній, повернути 0
    if (days.length === 0) return 0;
    
    // Підрахунок загальної кількості калорій за допомогою reduce
    const totalCalories = days.reduce((total, day) => total + day.calories, 0);
    
    // Повернення середньодобового значення калорій
    return totalCalories / days.length;
  }
  
  // Перевірка роботи функції
  console.log(calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])); // 3180
  
  console.log(calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])); // 2270
  
  console.log(calcAverageCalories([])); // 0
  