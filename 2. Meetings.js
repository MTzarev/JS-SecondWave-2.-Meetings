function meetings(arr){
let objMeetings = {};
for(let line of arr){
    let [day, name] = line.split(` `);
    if (!objMeetings.hasOwnProperty(day)){
        objMeetings[day]=name;
        console.log(`Sheduled for ${day}`);
    }else{
        console.log(`Conflict on ${day}`)
    }
}
for (let day in objMeetings){
    
    console.log(`${day} -> ${objMeetings[day]}`);
    
}
    console.log();
    
}
meetings(['Monday Peter',

    'Wednesday Bill',
    
    'Monday Tim',
    
    'Friday Tim']);
