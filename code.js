// if this script only downloads the frist section's attendance sheet,
// chrome may have blocked pop-ups because of too many downloads.
// make sure you allow all pop-ups from usis in that case.

// USIS -> Attendance -> Set year, semester and course -> run script.
// Developer Tools -> Sources -> Left Pane (may be hidden) -> Snippets -> New Snipptes -> Paste code.


section_select = document.getElementById("academicSection");
generate_button = document.getElementById("generate-button");
file_format_select = document.getElementById("format");
download_button = document.getElementById("download-button");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function download_section_attendance_sheet(delay){

    for (let i=1; i<section_select.length; i++){
        console.log("Downloading section: ", section_select.options[i].text, "...");
        
        section_select.selectedIndex = i;
        
        generate_button.click();
        await sleep(delay);
        
        file_format_select.selectedIndex = 2; // xls

        download_button.click();
        await sleep(delay);
    }
}


download_section_attendance_sheet(2000);
