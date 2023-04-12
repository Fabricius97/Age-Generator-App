const calculateAge = () => {
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const requiredField = document.getElementsByClassName("requiredField");
    const errorValid = document.getElementsByClassName("errorValid");
  
    // Reset error messages and borders
    for (let i = 0; i < requiredField.length; i++) {
      requiredField[i].style.display = "none";
      errorValid[i].style.display = "none";
    }
    dayInput.style.border = "1px solid #ccc";
    monthInput.style.border = "1px solid #ccc";
    yearInput.style.border = "1px solid #ccc";
  
    // Check if any input fields are empty or invalid
    let isEmpty = false;
    let isValid = true;
    if (dayInput.value === "") {
      isEmpty = true;
      requiredField[0].style.display = "block";
      dayInput.style.border = "1px solid red";
    } else if (isNaN(dayInput.value) || dayInput.value < 1 || dayInput.value > 31) {
      isValid = false;
      errorValid[0].style.display = "block";
      dayInput.style.border = "1px solid red";
    }
    if (monthInput.value === "") {
      isEmpty = true;
      requiredField[1].style.display = "block";
      monthInput.style.border = "1px solid red";
    } else if (isNaN(monthInput.value) || monthInput.value < 1 || monthInput.value > 12) {
      isValid = false;
      errorValid[1].style.display = "block";
      monthInput.style.border = "1px solid red";
    }
    if (yearInput.value === "") {
      isEmpty = true;
      requiredField[2].style.display = "block";
      yearInput.style.border = "1px solid red";
    } else if (isNaN(yearInput.value) || yearInput.value > new Date().getFullYear()) {
      isValid = false;
      errorValid[2].style.display = "block";
      yearInput.style.border = "1px solid red";
    }
  
    if (isEmpty || !isValid) {
      return;
    }
  
    // Calculate age
    const birthDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    // Display age
    document.getElementById("years").textContent = age;
    document.getElementById("months").textContent = Math.abs(today.getMonth() - birthDate.getMonth());
    document.getElementById("days").textContent = Math.abs(today.getDate() - birthDate.getDate());
  };
  
  // Add event listener to button
  document.querySelector(".borderImg").addEventListener("click", calculateAge);
  