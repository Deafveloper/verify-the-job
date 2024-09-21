document.getElementById("jobForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const company = document.getElementById("company").value;
    const description = document.getElementById("description").value;
    const resultDiv = document.getElementById("result");

    const companyError = document.getElementById("companyError");
    const descriptionError = document.getElementById("descriptionError");

    // Clear previous error messages
    companyError.textContent = "";
    descriptionError.textContent = "";

    let isValid = true;

    // Validate company name
    if (company.trim() === "") {
        companyError.textContent = "Company is required.";
        isValid = false;
    } else if (!verifyCompany(company)) {
        companyError.textContent = "Company not verified. Be cautious.";
        isValid = false;
    }

    // Validate description
    if (description.trim() === "") {
        descriptionError.textContent = "Description is required.";
        isValid = false;
    }

    if (!isValid) return;

    const result = verifyJobPosting({ company, description });
    resultDiv.textContent = result;
});

document.getElementById("clearForm").addEventListener("click", function () {
    document.getElementById("jobForm").reset(); // Reset the form fields
    document.getElementById("result").textContent = ""; // Clear the result message

    // Clear error messages
    document.getElementById("companyError").textContent = "";
    document.getElementById("descriptionError").textContent = "";
});

function verifyJobPosting(jobPosting) {
    if (verifyJobDescription(jobPosting.description)) {
        return "Job description contains suspicious phrases.";
    }

    return "Job posting seems legitimate!";
}

function verifyCompany(companyName) {
    const trustedCompanies = [
        "Google",
        "Microsoft",
        "Amazon",
        "Apple",
        "Facebook",
        "IBM",
        "Tesla",
        "Coca-Cola",
        "Procter & Gamble",
        "Samsung",
        "Intel",
        "Adobe",
        // Add more trusted companies as needed
    ];
    return trustedCompanies.includes(companyName);
}

function verifyJobDescription(description) {
    const suspiciousPhrases = [
        "work from home",
        "quick money",
        "no experience required",
        // Add more suspicious phrases as needed
    ];
    return suspiciousPhrases.some((phrase) => description.includes(phrase));
}
