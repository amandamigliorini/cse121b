// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
               { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}]
  };

function addData(course){
    document.getElementById('courseName').textContent = course.name;
    document.getElementById('courseCode').textContent = course.code;
};

function outputSections(sections){
    const html = sections.map((section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`)
    document.querySelector('#sections').innerHTML = html.join("");
}

document.getElementById('enrollStudent').addEventListener('click', function(){
    const sectionNum = document.querySelector('#sectionNumber').value;
    const sectionIndex = aCourse.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      aCourse.sections[sectionIndex].enrolled++;
      outputSections(aCourse.sections);
    }
});
document.querySelector('#dropStudent').addEventListener('click', function(){
    const sectionNum = document.querySelector('#sectionNumber').value;
    const sectionIndex = aCourse.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      aCourse.sections[sectionIndex].enrolled--;
      outputSections(aCourse.sections);
    }
});

addData(aCourse);
outputSections(aCourse.sections);


