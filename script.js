// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
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
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  //function getLearnerData(course, ag, submissions) {
    // START here, we would process this data to achieve the desired result.

     // GET RID OF INFO NOT NEEDED:
     let splicedSubmissions = LearnerSubmissions.splice(2, 1)// removing the 3rd assignment as its not a part of the required result  
     //console.log(splicedSubmissions) // now contains only assingment 3 which we dont need 
     console.log("------")
     console.log(LearnerSubmissions) //only has assignments 1 and 2 

     const poppedAssignmentGroup = AssignmentGroup.assignments.pop() // removes assingment 3 from assignment list.
     console.log(AssignmentGroup)

     /*1. first figure out who are the students: THERE ARE 2 STUDENTS. STUDENTS 125 AND 132   done 
     generate an array of unique students ids:   
     generate an array of students ids -> [125,125,125,132,132]
     generate the array from submissions data then make it unique -> [125,132]  */


    let studentIdsTemp = []; // creates an array of all the student ids submitted 
    for( let i = 0; i < LearnerSubmissions.length; i++){
        studentIdsTemp.push(LearnerSubmissions[i].learner_id);
    }

    console.log(studentIdsTemp) //generate an array of students ids -> [125,125,125,132,132]
    let studentIds0 = [...new Set(studentIdsTemp)] //spread operator ...
    let studentIds = studentIds0
   
    console.log(studentIds) // UNIQUE STUDENT IDS
  

 //   2. convert it into array of object where you have a key called id  then value be studendid -> [{id:125},{id:132}]
let studentId = studentIds.map((student)=>{
    return { 
        id:student //key : value
    }
})
  console.log(studentId) // somehow this is THE ARRAY OF OBJECTS...

  


  /*3. get the assignments and calulcate the grade
  find the assignment for each student and thier score
  

  -> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]

  now you have an object for each student that has score*/
//   let StudentAssignments = studentId.map(student =>{ //creating a new array Student assignments 
//   let studentHw = LearnerSubmissions.filter(submission => submission.learner_id === student.id) //go through the submisssions and get the match for each student id which is all of them? (gets the assignment?)
    
//   });
       
        // find the scores and get thier final grades by doing score/ points possible
       let studentScores = []
       for (let i = 0; i < LearnerSubmissions.length; i++){
           studentScores.push(LearnerSubmissions[i].submission.score)
       }
       console.log(studentScores)// prints an array of the student scores 

           console.log("-----")
    
        let possiblePoints = []
        for (let i = 0; i < AssignmentGroup.assignments.length; i++){
            possiblePoints.push(AssignmentGroup.assignments[i].points_possible)
        }
        console.log(possiblePoints) // prints an array of the 2 possible points 
        console.log('-----')

        let grades = []  // try to either get this to work or attempt a switch case scenario...
        let gradePercentage;
        for (i=0; i < studentScores.length; i++){
             if (possiblePoints[0] > 0){ // they all are 
             gradePercentage = studentScores[i]/ possiblePoints[0]
            } else gradePercentage = "no point"
           grades.push(gradePercentage) 
        } 
console.log(gradePercentage)
        
        //calculate the avages of the grades  (add them together and divide them by their total )




//     let hwScore = {} // making a new object to put the scores in ... 
//     studentHw.forEach(hw =>{hw.assignment_id 

//      }) 

// return {id: student.id
//         assignment_id: submission.assignment_id
         


//  }
//   } )

  
    
// looping through the learnersubmissions array to get all of the assignment ids and their scores and aligning them with th 2 ids in the unique array.  */
     
       
  

 










 // }
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
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);*/
  



    /*
  
      here, we would process this data to achieve the desired result.
  
      1. first figure out who are the students: THERE ARE 2 STUDENTS. STUDENTS 125 AND 132   done 
      generate an array of unique students ids:   
      generate an array of students ids -> [125,125,125,132,132]
      generate the array from submissions data then make it unique -> [125,132]     done 
  
      2. convert it into array of object where you have a key called id         done 
      then value be studendid -> [{id:125},{id:132}]
  
      3. get the assignments and calulcate the grade
      find the assignment for each student and thier score
      -> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]
      now you have an object for each student that has score
  
      4. we need to calculate the grade
      go every student and match assignment using id to find points points_possible
      you just divide the score by points points_possible
      -> [{id:125,1:0.94,2:1.0}]
      avg (add assignment scores together )/ (points possible)
      remove not due assignments
  
      const result = [
        {
          id: 125,
          avg: 0.985, // (47 + 150) / (50 + 150)
          1: 0.94, // 47 / 50
          2: 1.0, // 150 / 150
        },
        {
          id: 132,
          avg: 0.82, // (39 + 125) / (50 + 150)
          1: 0.78, // 39 / 50
          2: 0.833, // late: (140 - 15) / 150
        },
      ];
  
    */
   
    // let result = [];
    // write some code that makes results like that
    // for (let i = 0; i < submissions.length; i++) {
    //   //
    // }
    // result [125,125,125,32,32]
    // return result;