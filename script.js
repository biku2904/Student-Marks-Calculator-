function calculateMarks() {

    let name = document.getElementById("studentName").value;

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    let mark4 = Number(document.getElementById("mark4").value);
    let mark5 = Number(document.getElementById("mark5").value);
    let mark6 = Number(document.getElementById("mark6").value);

    // Check Empty Fields
    if (
        name.trim() === "" ||
        document.getElementById("mark1").value === "" ||
        document.getElementById("mark2").value === "" ||
        document.getElementById("mark3").value === "" ||
        document.getElementById("mark4").value === "" ||
        document.getElementById("mark5").value === "" ||
        document.getElementById("mark6").value === ""
    ) {
        alert("Please enter all details!");
        return;
    }

    // Check Marks
    let marks = [mark1, mark2, mark3, mark4, mark5, mark6];

    if (marks.some(mark => mark < 0 || mark > 100)) {
        alert("Enter marks between 0 and 100!");
        return;
    }

    // Total Marks
    let total = mark1 + mark2 + mark3 + mark4 + mark5 + mark6;

    // Percentage
    let percentage = (total / 600) * 100;

    // Grade
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Pass or Fail
    let status = marks.every(mark => mark >= 35) ? "PASS" : "FAIL";

    // Display Result
    document.getElementById("resultName").innerText = name;
    document.getElementById("total").innerText = total + " / 600";
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
    document.getElementById("grade").innerText = grade;
    document.getElementById("status").innerText = status;

}