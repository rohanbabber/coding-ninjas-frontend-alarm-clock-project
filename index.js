var clock = document.getElementById("clock");
      var alarm = document.getElementById("alarm-input");
      var setAlarmButton = document.getElementById("set-alarm");
      var notificationBox = document.getElementById("set-notification");
      var alarmSet = false;
      var alarmHour;
      var alarmMinute;
      var alarmSecond;

      function updateTime() {
        var date = new Date();
        
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        
        // Ensuring clock doesn't show any part of time in single digit
        hours = (hours < 10) ? ('0' + hours) : hours;
        minutes = (minutes < 10) ? ('0' + minutes) : minutes;
        seconds = (seconds < 10) ? ('0' + seconds) : seconds; 
        
        clock.innerHTML = hours + ":" + minutes + ":" + seconds;
        if(alarmSet && alarmHour == new Date().getHours() && alarmMinute == new Date().getMinutes() && alarmSecond == new Date().getSeconds()){
            alert(`ALARM!!! The time is ${alarmHour}:${alarmMinute}:${alarmSecond}`);
            notificationBox.innerHTML = ``;
            document.getElementById("alarm-hour").selectedIndex = "00";
            document.getElementById("alarm-minute").selectedIndex = "00";
            document.getElementById("alarm-second").selectedIndex = "00";
        }
      }

      function setAlarm() {
        alarmSet = true;
        alarmHour = document.getElementById("alarm-hour").value;
        alarmMinute = document.getElementById("alarm-minute").value;
        alarmSecond = document.getElementById("alarm-second").value;
        notificationBox.innerHTML = `An alarm has been set for ${alarmHour}:${alarmMinute}:${alarmSecond}`;
      }
      setAlarmButton.addEventListener("click", setAlarm);
      setInterval(updateTime, 1000);