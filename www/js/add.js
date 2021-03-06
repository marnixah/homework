'use strict';
document.addEventListener("DOMContentLoaded", function(){
    appendCard(generateEditableCard("title", "tasks", new Date(), "1", "google.com"));
});

function save(id) {
    const title = document.getElementById('title-' + id).value;
    const tasks = document.getElementById('tasks-' + id).value;
    const dateArr = document.getElementById('time-' + id).value.split(" ");
    // Dates and times (yay)
    const year = dateArr[0];
    const month = dateArr[1] -1;
    const day = dateArr[2];

    const timeArr = dateArr[3].split(":");

    const hour = timeArr[0];
    const minute = timeArr[1];
    // Years, months, days, hours, minutes, seconds
    const date = new Date(year, month, day, hour, minute, 0);
    
    let data = {};

    data.title = title;
    data.tasks = tasks;
    data.time = date.getTime();
    $.ajax({
        type: "POST",
        url: '/api/addHomework',
        data: data
    });
    notify('Homework added. Redirecting you in 5 seconds...', 'success');
    setTimeout(() => {
        document.location.href = "/";
    }, 5000);
}