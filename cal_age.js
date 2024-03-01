function calculateAge(dob) {
    var dob = new Date(dob);
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById("age").innerText = calculateAge("2001-05-24"); // แก้ไขวันเกิดของคุณที่นี่
