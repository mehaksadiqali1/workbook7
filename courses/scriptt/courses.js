"use strict";

let courseTBody = document.querySelector("#courseTable tbody");
console.log(courseTBody);

async function getCourses() {
  let promise = fetch("http://localhost:8081/api/courses");
  let response = await promise;
  let courses = await response.json();
  console.log(courses);
  displayCourses(courses);
}

function buildTableRow(course) {
  let tr = courseTBody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = course.id;

  let td2 = tr.insertCell();
  td2.innerText = course.courseNum;

  let td3 = tr.insertCell();
  td3.innerText = course.courseName;

  let td4 = tr.insertCell();
  td4.innerText = course.dept; 

  let td5 = tr.insertCell();
  td5.innerText = course.instructor;

  let td6 = tr.insertCell();
  td6.innerText = course.startDate;

  let td7 = tr.insertCell();
  td7.innerText = course.numDays; 
}

function displayCourses(courseArray) {
  for (const course of courseArray) {
    buildTableRow(course);
  }
}

getCourses();
