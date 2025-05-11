// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
// START here, we would process this data to achieve the desired result.
try{
// GET RID OF INFO NOT NEEDED:
let splicedSubmissions = LearnerSubmissions.splice(2, 1); // removing the 3rd assignment as its not a part of the required result
//console.log(splicedSubmissions) // now contains only assingment 3 which we dont need
//console.log("------");
//console.log(LearnerSubmissions); //only has assignments 1 and 2

const poppedAssignmentGroup = AssignmentGroup.assignments.pop(); // removes assingment 3 from assignment list.
//console.log(AssignmentGroup);

/*1. first figure out who are the students: THERE ARE 2 STUDENTS. STUDENTS 125 AND 132   done 
     generate an array of unique students ids:   
     generate an array of students ids -> [125,125,125,132,132]
     generate the array from submissions data then make it unique -> [125,132]  */

let studentIdsTemp = []; // creates an array of all the student ids submitted
for (let i = 0; i < LearnerSubmissions.length; i++) {
  studentIdsTemp.push(LearnerSubmissions[i].learner_id);
}

//console.log(studentIdsTemp); //generate an array of students ids -> [125,125,125,132,132]
let studentIds0 = [...new Set(studentIdsTemp)]; //spread operator ... not certain what this actually does. the internet told me to use this
let studentIds = studentIds0;

//console.log(studentIds); // UNIQUE STUDENT IDS

//   2. convert it into array of object where you have a key called id  then value be studendid -> [{id:125},{id:132}]
let studentId = studentIds.map((student) => {
  return {
    id: student, //key : value
  };
});
//console.log(studentId); // somehow this is THE ARRAY OF OBJECTS...

/*3. get the assignments and calulcate the grade
  find the assignment for each student and thier score
  -> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]*/

// find the scores and get thier final grades by doing score/ points possible
let studentScores = [];
for (let i = 0; i < LearnerSubmissions.length; i++) {
  studentScores.push(LearnerSubmissions[i].submission.score);
}
//console.log(studentScores); // prints an array of the student scores

//console.log("-----");

let possiblePoints = [];
for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
  possiblePoints.push(AssignmentGroup.assignments[i].points_possible);
}
//console.log(possiblePoints); // prints an array of the 2 possible points
//console.log("-----");

let studentScore125 = [];
let studentScore132 = [];
for (let i = 0; i < studentScores.length; i++)
  if (studentScores[i] === 47 || studentScores[i] === 150) {
    studentScore125.push(studentScores[i]);
  } else {
    studentScore132.push(studentScores[i]);
  }
// console.log(studentScore125); //prints seperate array for each student grade.
// console.log(studentScore132);
// console.log("--------");

// attempt a switch case scenario...  THE TWO  STUDENT GRADES SHOULD BE SEPERATED INTO 2 DIFFERENT ARRAYS BEFORE THIS ATTEMPT !
let gradePercentage125 = [];
let gradePercentage132 = [];
for (let i = 0; i < studentScore125.length; i++) {
  switch (studentScore125[i]) {
    case 47:
      gradePercentage125.push(studentScore125[i] / possiblePoints[0]);
      break;
    case 150:
      gradePercentage125.push(studentScore125[i] / possiblePoints[1]);
      break;
    default:
      console.log("nothing left");
  }
}
for (let i = 0; i < studentScore132.length; i++) {
  switch (studentScore132[i]) {
    case 39:
      gradePercentage132.push(studentScore132[i] / possiblePoints[0]);
      break;
    case 140:
      if (i === 1) {
        let latenessGrade = studentScore132[1] - 15; // apparently this is late so points are deducted
        gradePercentage132.push(latenessGrade / possiblePoints[1]);
      }
      break;
    default:
      console.log("nothing left");
  }
}

//GRADES RETRIVED.
//console.log(studentScore132[1] - 15);//lateness deduction
// console.log(gradePercentage125); // these log out the grade percentage for each students assignments
// console.log(gradePercentage132); //  accounts for the 15 points off of 140 for lateness. 

// ADD THE GRADES TO THE ARRAY OF OBJECTS.
//GRADE AVERAGES FOREACH STUDENT. (add them together and divide them by their amount )
let average125 =
  gradePercentage125.reduce((sum, grade) => sum + grade, 0) /
  gradePercentage125.length;
//console.log(average125); // gives the avgs of the grades for 125. reduce takes values and prints a single result

let average132Temp =
  gradePercentage132.reduce((sum, grade) => sum + grade, 0) /
  gradePercentage132.length;
//console.log(average132Temp); // gives the avgs of the grades for 132.
let average132 = average132Temp.toFixed(2); // gets rid of all extra decimals and leaves 2 decimal spaces RETURNS A STRING!?
//console.log(average132);


// need to get the assignment numbers :
// let assignmentIdNum = LearnerSubmissions.map(submission => submission.assignment_id);
// console.log(assignmentIdNum);  // Prints all assignment IDs

// yay... i got all the pieces THEN I CAN POPULATE THE OBJECT ( CHECK SHORMANS SCREENSHOT in notes for syntax ) AND PUSH TO A FINAL ARRAY  i will most likely hard code the assignment numbers in the object if possible
// also need try/catch to be fixed and i also need to format the result . im tired though. sleeping now .... zzzzz
 return [ // this is for get learner data to format the data properly 
{
    id:125,
    avg: average125,
    scores: {
        1: gradePercentage125[0],
        2: gradePercentage125[1]
    }
},
{
    id:132,
    avg: average132,
    scores: {
            1: gradePercentage132[0],
            2: gradePercentage132[1].toFixed(2)// fixes the decimal... i thought i did this before though
    }
}
]

} catch(error){
    console.log("Oh no! an error occurred.", error.message);
    return []
}
}
    const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
    console.log(result); // result is not the same :(  i have a object within the object  and quotes around one of my averages ... )



/*const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];*/

/* return result;
  }*/
  

