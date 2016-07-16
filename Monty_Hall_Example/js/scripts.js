document.addEventListener( "DOMContentLoaded", function(){
  document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
  
  var 
    mainClass = 'box',
    boxes = document.getElementsByClassName(mainClass),
    title = document.getElementById('title'),
    arr = [],
    numOfClicks,
    trying = 0,
    success = 0,
    priseIndex;
    
  function addListeners(thisIndex) {
    boxes[thisIndex].addEventListener('click', function(e) {

      if (numOfClicks < 1) {
        this.className += ' select';
        title.className += ' select';
        numOfClicks++;
        
        delete arr[thisIndex];
    		setTimeout(function() {
    		  boxes[arr.indexOf(false)].className += ' miss';
    		}, 200);
      } else if (numOfClicks < 2) {
        numOfClicks++;
        
        trying++;
        if (thisIndex === priseIndex) {
          success++;
		  title.className += ' success';
          this.className += ' hit';
        } else {
		  title.className = ' miss';
          this.className += ' miss';
          boxes[priseIndex].className += ' hit';
        };
        
        title.innerHTML = 'You are trying ' + trying + ' times and ' + success + ' times successfuly (accurency is ' + (success / trying * 100).toFixed(2) + '%)';
        
        setTimeout(start, 1000);
      }      
    });
  }

  function start() {
    priseIndex = Math.floor(boxes.length * Math.random());
    numOfClicks = 0;
    title.className = '';
    
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].className = 'box';
      
      if (!trying) {
        addListeners(i);
      }
      
      arr[i] = priseIndex === i;
    }
    //boxes[priseIndex].className += ' prise';
  }
  
  start();

  var
    login = document.getElementById('login'),
    password = document.getElementById('password'),
    tryLogin = document.getElementById('try-login'),
    modalWindow = document.getElementsByClassName('popup-holder')[0],
    emailError = document.getElementById('err-email'),
    passwordError = document.getElementById('err-password'),
    emailRegex = /^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,6}$/,
    passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;

  tryLogin.addEventListener('click', function(event) {
    event.preventDefault();

    if (isValid()) {
      modalWindow.className += ' accepted';
      location.hash = 'accepted';
    } else {
      modalWindow.className += ' error';
    }
  });

  function isValid() {
    emailError.innerHTML = !login.value.trim() ? 'Login is required' :
                           emailRegex.test(login.value) ? '' : 'Login validation error';

    passwordError.innerHTML = !password.value.trim() ? 'Password is required' :
                              passwordRegex.test(password.value) ? '' : 'Password validation error';

    return emailRegex.test(login.value) && passwordRegex.test(password.value);
  }

  if (location.hash == '#accepted') {
    modalWindow.className += ' accepted';
  }
  
}, false );