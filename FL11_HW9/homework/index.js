/* task #0 */
function getNumbers(string) {
  let numMass = [];
  for (let i of string) {
      i = +i
      if (!isNaN(i)) {
          numMass.push(i);
      }
  }
    return numMass;
}

/* task #1 */
function findTypes(...args) {
  let result = {};
  for (let i = 0; i < args.length; i++) {
      if (result[typeof args[i]] === undefined) {
          result[typeof args[i]] = 1;
      } else {
          result[typeof args[i]] += 1;
      }
  }
  return result;
}

/* task #2 */
function executeforEach(arr, fun) {
  for (let i of arr) {
    fun(i);
  }
}

/* task #3 */
function mapArray(arr, fun){
  let mass = [];
  executeforEach(arr, function (transform) {
      mass.push(fun(transform));
  });
  return mass;
}

/* task #4 */
function filterArray(arr, callback) {
  let result = [];
  executeforEach(arr, function (el) {
      if (callback(el) === true) {
          result.push(el);
      }
  });
  return result;
}

/* task #5 */
function showFormattedDate (formatDate) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  let year = formatDate.getFullYear();
  let date = formatDate.getDate();
  let month = months[formatDate.getMonth()];
  return 'Date: ' + month + ' ' + date + ' ' + year;
}

/* task #6 */
function canConvertToDate(t) {
  let date = new Date(t);
  date = date.toDateString();
  return date !== 'Invalid Date';
}

/* task #7 */
function daysBetween(date, newDate) {
  const msInDay = 86400000;
  let days = Math.round(Math.abs(newDate - date) / msInDay);
  return days;
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

/* task #8 */
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

function getAmountOfAdultPeople(dataTask) {
  let years = 18;
  let days = 365;
  let oldsData = [];
  oldsData = filterArray(dataTask, function (some) {
      if (daysBetween(Date.now(), new Date(some[' birthday '])) > years * days) {
          return true;
      }
  });
  return oldsData.length;
}

/* task #9 */
function keys (object) {
  const result = [];
  for(let obj in object) {
       if (object.hasOwnProperty(obj)) {
          result.push(obj);
      }
  }
  return result;
}

/* task #10 */
function values(object){
  let valuesArr = [];
  for(let i in object){
    if(object.hasOwnProperty(i)){
        valuesArr.push(object[i])
    }
  }
  return valuesArr;
}  