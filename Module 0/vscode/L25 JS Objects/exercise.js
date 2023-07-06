// Create an object with one of each data type including at least 1 method.
// Call the method to make it execute.
    // The method must use the keyword "this" to reference some part of the object.

  var Me = {
    Name: "Adam",
    Age: 38,
    Hobbies: ["Gaming","Coding","Lifting","Relaxing"],
    Address: {
        Street: '140 Mazon Street',
        City: 'Dwight',
        State: 'Illinois',
        County: 'Livingston',
    },
        Studying: "VSchool",
        Studies: function(){
            console.log(this.Studying)
        
    }
  }  

//   console.log(Me)
  Me.Studies()