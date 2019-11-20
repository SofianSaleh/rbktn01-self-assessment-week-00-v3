// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:

var familyTree = {
  firstName: 'Beth',
  lastName: 'Johnson',
  location: 'San Francisco',
  children: [
    {
      firstName: 'Beth Jr.',
      lastName: 'Johnson',
      location: 'Berkeley',
     children: [
        {
          firstName: 'Smitty',
          lastName: 'Won',
          location: 'Beijing',
          children: []
        }
      ]
    },
    {
      firstName: 'Joshie',
      lastName: 'Wyattson',
      location: 'Berkeley',
      children: []
    }
  ]
};


var livesInBerkeley = function (familyMember) {
  return familyMember['location'] === 'Berkeley';
}
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];


// var filterFamilyMembers = function (familyTree, truthTest) {
//   // All your code in this function body
//   if(!Array.isArray(familyTree)) {
//   	var arr = [];
//   	for(var key in familyTree) {
//   		arr.push(familyTree[key])
//   }
//   arr.slice(1,8)
//   for(var i = 0; i <= 0; i++){
//   	//console.log(familyTree['children'].length)
//   	for(var keys in familyTree['children'][0]) {
//   		if(familyTree['children'][0] !== []){
  		
//   		arr.push(familyTree['children'][0][keys])
  			
//   		}
//   	}
//   	}//console.log(familyTree['children'][0]['children'])
//   	for(var i = 0; i = 0; i++){
//   	//console.log(familyTree['children'].length)
//   	for(var keyss in familyTree['children'][0]['children']) {
  		
  		
//   		arr.push( familyTree['children'][0]['children'][keyss])
  			
  		
//   	}
//   	}
//   }
//   var tr = truthTest
//   console.log(tr)
// //   if(truthTest === arr[0]) {
// //   	var array = [];
// //   	array.push[0,1]
// //   }
  
// //   //console.log(arr)
// //  return filterFamilyMembers(arr.splice(1), truthTest)
// };


//using for loops
var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
  var arr = []
  x = 'Berkeley'
  for(var key in familyTree) {
  	if(x === familyTree[key]){
  		arr.push(familyTree['firstName'])
  		console.log(familyTree['firstName'])
  	}
  }
  for(var keys in familyTree[key]) {
  	if(x === familyTree[key][keys]['location'])
  		arr.push(familyTree[key][keys]['firstName'])
  	}

  		//console.log(familyTree[key][0]['children'])
  	for(var i = 0; i < familyTree[key][0]['children']; i++){
  	for (var keys in familyTreefamilyTree[key][0]['children']){

  	if(x === familyTreefamilyTree[key][0]['children']['location'])
  		arr.push(familyTreefamilyTree[key][0]['children']['firstName'])
  		}
  	}
  return arr
  }

filterFamilyMembers(familyTree, livesInBerkeley)


// i tried to use recursion but i could'nt figure it out
//    MY GRADE 'Significant progress'