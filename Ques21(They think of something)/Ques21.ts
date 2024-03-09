// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface record{
    CourseName:string;
    studentName:string;
    rollNumber:number;
    distanceLearning:boolean;
    city:string;
    center:string;
    campus:string;
    Days_Time:string;
}

let record ={
    CourseName:"Cloud Applied Generative Ai",
    studentName:"Moiz Ahmed Khan",
    rollNumber:308797,
    distanceLearning:false,
    city:'Karachi',
    center:'Governor House Karachi',
    campus:'Main',
    Days_Time:"Wednesday - 02:00 PM - 05:00 PM",

}

console.log(record);
