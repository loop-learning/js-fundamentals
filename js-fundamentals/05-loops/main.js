// ========================================
// 5. LOOPS - REPETITION CONTROL
// ========================================

// For loop - counting backwards
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// For loop with arrays - traditional approach
let loopColors = ["red", "green", "blue"];
for (let i = 0; i <= 2; i++) {
  console.log(loopColors[i]);
}

// For-of loop - modern array iteration
for (let color of loopColors) {
  console.log(color);
}

// While loop - condition-based repetition
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}