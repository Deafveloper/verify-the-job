document.getElementById("jobForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const company = document.getElementById("company").value.trim();
    const description = document.getElementById("description").value.trim();

    // Basic verification logic (you can customize this)
    const isCompanyValid = company.length > 0;
    const isDescriptionValid = description.length > 20; // Example condition

    // Get the result div
    const resultDiv = document.getElementById("result");

    // Clear previous error messages
    document.getElementById("companyError").textContent = "";
    document.getElementById("descriptionError").textContent = "";

    // Display results
    if (isCompanyValid && isDescriptionValid) {
        resultDiv.textContent = "Job Posting Verified!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Job Posting seems illegitimate.";
        resultDiv.style.color = "red";
        
        if (!isCompanyValid) {
            document.getElementById("companyError").textContent = "Please enter a valid company name.";
        }
        if (!isDescriptionValid) {
            document.getElementById("descriptionError").textContent = "Job description must be at least 20 characters long.";
        }
    }
});

// Clear button functionality
document.getElementById("clearButton").addEventListener("click", function () {
    // Reset form fields
    document.getElementById("jobForm").reset();
    
    // Clear error messages and result
    document.getElementById("companyError").textContent = "";
    document.getElementById("descriptionError").textContent = "";
    document.getElementById("result").textContent = "";
});
