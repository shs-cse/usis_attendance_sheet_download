```js
// Go to USIS -> Login -> Advising -> Put in random student's ID -> Show Info -> Console

course = 'CSE250';
isDownloadingClassAttendanceSheet = false; // exam attendance if false

function examAttendancePDF(usis_sec_code){
    return "https://usis.bracu.ac.bd/academia/studentAttendance/rptExamAttendanceSheet?sectionId=" + 
        usis_sec_code + "&reportFormat=PDF"
}

function classAttendanceXLS(usis_sec_code){
    return "https://usis.bracu.ac.bd/academia/studentAttendance/createSchedulePDF?academicSectionId=" + 
        usis_sec_code + "&colNo=15&format=XLS"
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

downloadAttendanceSheet = isDownloadingClassAttendanceSheet ? classAttendanceXLS : examAttendancePDF;
all_sections = $("#academicCourse, #academicCourseSelected").find("option:contains('" + course + "-')");
for(let i=0; i<all_sections.length; i++){ 
    sec = all_sections[i];
    if (sec.text.includes("CLOSED")) continue;
    console.log("Downloading -> " + sec.text)
    window.open(downloadAttendanceSheet(sec.value));
    await sleep(1000);
}
```

<!-- # Auto-Download Attendance Sheets From USIS

This is intended for coordinates maintaining a lot of course-sections. 
Repeatedly downloading attendance sheets for each individual section can be a bit painful. 
This script is here to automate that for you.

Log into `USIS`, then go to the `Attendance` tab and select either `(before confirmation)` or `(after confirmation)`.
Select academic year, semster and course. 
Then run this script.

Since this script is going to download a lot of attendance sheet files, chrome will likely block pop-ups.
Check the right end of the address bar, and there should be an icon indicating that.
Click on it and then select `Allow all pop-ups from usis.bracu.ac.bd`. -->
