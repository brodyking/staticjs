// Easy DOM modifier function
// Stolen from my old project
function dom(id,condition,content) {
    if (id == 'body') {
      switch (condition) {
        case 'set':
          document.body.innerHTML = content;
          break;
        case 'add':
          document.body.innerHTML += content;
          break;
      }
    } else {
      switch (condition) {
        case 'set':
          document.getElementById(id).innerHTML = content;
          break;
        case 'add':
          document.getElementById(id).innerHTML += content;
          break;
      }
    }
  }