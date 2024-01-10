function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 4) Define the mondayWork function expression
  const mondayWork = function(activity) {
    if (activity === undefined) {
      return "This Monday, I will go to the office.";
    } else {
      return `This Monday, I will work from home.`;
    }
  }
  
  // 7) Define the wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Export the functions if needed
  // module.exports = { saturdayFun, mondayWork, wrapAdjective };