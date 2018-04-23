var data=[
		{
	id:1111,
	fullName: "Полушкіина Олександра",
	className: "5-B",
	recordsForParents: "05.10. Запізнився на урок",
	behaviour: "задовільне",
	diaryRecords:[
			{
		subjectName:"Українська мова",
		marks: {
			'1.09':5,
			'4.09':4,
			'6.09':9,
			'8.09':8,
			'10.09':10,
			'11.09':12,
			'12.09':9,
			'13.09':12,
			'14.09':11,
				}
			},
			{
		subjectName:"Українська література",
		marks: {
			'3.09':12,
			'7.09':10,
			'9.09':12,
			'11.09':10,
			'13.09':8
				}
			},
			{
		subjectName:"Природознавство",
		marks: {
			'1.09':9,
			'3.09':10,
			'4.09':12,
			'7.09':10,
			'8.09':9,
			'10.09':10,
			'12.09':12,
			'13.09':10,
			'14.09':10
				}
			},
			{
		subjectName:"Математика",
		marks: {
			'2.09':8,
			'5.09':9,
			'6.09':10,
			'9.09':11,
			'11.09':10,
			'13.09':11,
			'14.09':9
				}
			}
		]
	},
	{
	id:1112,
	fullName: "Приходько Миколая",
	className: "5-B",
	recordsForParents: "Зауважень немає",
	behaviour: "відмінне",
	diaryRecords:[
			{
		subjectName:"Українська мова",
		marks: {
			'2.09':10,
			'5.09':12,
			'6.09':10,
			'8.09':11,
			'10.09':10,
			'11.09':12,
			'12.09':10,
			'13.09':12,
			'14.09':11,
				}
			},
			{
		subjectName:"Українська література",
		marks: {
			'2.09':12,
			'7.09':10,
			'9.09':12,
			'10.09':10,
			'12.09':12,
			'13.09':10,
			'14.09':12
				}
			},
			{
		subjectName:"Математика",
		marks: {
			'2.09':10,
			'5.09':11,
			'6.09':10,
			'9.09':11,
			'11.09':10,
			'13.09':11,
			'14.09':12
				}
			}
		]
	},
	{
	id:1113,
	fullName: "Гулеватої Вероніки",
	className: "5-B",
	recordsForParents: "05.10. Розмовляла на уроку",
	behaviour: "добре",
	diaryRecords:[
			{
		subjectName:"Українська мова",
		marks: {
			'1.09':5,
			'3.09':4,
			'6.09':9,
			'9.09':10,
			'11.09':12,
			'12.09':9,
			'13.09':12,
			'14.09':11,
				}
			},
			{
		subjectName:"Українська література",
		marks: {
			'3.09':12,
			'7.09':10,
			'10.09':12,
			'12.09':10,
			'14.09':12
				}
			}
		]
	}
];

function fillDate(studentId) {
	var studentData = null;
	for (var i = 0; i < data.length; i++) {
		if (data[i].id == studentId) {
			studentData = data[i];
		}
	}

	console.log("student foun by id",studentData);
	if (studentData == null) {
		window.location.href = 'entrance.html?error';
	}

	var el = document.getElementById('studentName');
	el.innerText = studentData.fullName;

	el = document.getElementById("className");
	el.innerText = studentData.className;

	el = document.getElementById("recordsForParents");
	el.innerText = studentData.recordsForParents;

	el = document.getElementById("behaviour");
	el.innerText = studentData.behaviour;

	var tableEl = document.getElementById('diaryTable');
	var tableBodyEl = tableEl.getElementsByTagName("tbody") [0];
	console.log(tableBodyEl);

	for (var j=0; j<studentData.diaryRecords.length; j++) {
	var rowElement = document.createElement("tr");
	tableBodyEl.appendChild(rowElement);
	console.log(rowElement);

	var rowNumberCell = document.createElement("tr");
	rowNumberCell.setAttribute("scope","row");
	var textnode = document.createTextNode(j+1);
	rowNumberCell.appendChild(textnode);
	rowElement.appendChild(rowNumberCell);

	var tableCell = document.createElement("td");
	textnode = document.createTextNode(studentData.diaryRecords[j].subjectName);
	tableCell.appendChild(textnode);
	rowElement.appendChild(tableCell);

	var startDay = 1;
	var startMouth = 9;
	var totalDays = 14;

	for (var dayIndex = 0; dayIndex < totalDays; dayIndex++) {
		var day= startDay + dayIndex;
		var dateString = day.toString()+'.'+(startMouth< 10 ? '0' + startMouth:startMouth);
		console.log('date string for index'+ dayIndex +':'+dateString);

		tableCell = document.createElement("td");
		if(
			studentData.diaryRecords[j].marks[dateString] !== undefined 
			&& studentData.diaryRecords[j].marks[dateString] !=='' )
			{
				textnode = document.createTextNode(studentData.diaryRecords[j].marks[dateString]);
				tableCell.appendChild(textnode);
			}
				rowElement.appendChild(tableCell);
			} 


			// textnode = document.createTextNode(studentData.diaryRecords[j].subjectName);
			tableCell.appendChild(textnode);
			rowElement.appendChild(tableCell);
	}
	// }

}
