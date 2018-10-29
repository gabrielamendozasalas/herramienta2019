var X00Gems = ['9999999999'];
var X00Processes = [
  { X00Percent: 2, X00Text: 'Conectando con el Servidor WhatsApp...' },
  { X00Percent: 4, X00Text: 'Validando Usuario...' },
  { X00Percent: 6, X00Text: 'Generating SHA-256 verification strings...' },
  { X00Percent: 8, X00Text: 'Validando blocks 1-256...' },
  { X00Percent: 10, X00Text: 'Validando blocks 257-512...' },
  { X00Percent: 12, X00Text: 'Conectado con la Base de datos...' },
  { X00Percent: 14, X00Text: 'Estableciendo conexion...' },
  { X00Percent: 16, X00Text: 'Conexion exitosa por el puerto 87118' },
  { X00Percent: 18, X00Text: 'Descargando data' },
  { X00Percent: 18, X00Text: 'Descargando data.' },
  { X00Percent: 18, X00Text: 'Descargando data..' },
  { X00Percent: 18, X00Text: 'Descargando data...' },
  { X00Percent: 18, X00Text: 'Descargando data' },
  { X00Percent: 18, X00Text: 'Descargando data.' },
  { X00Percent: 18, X00Text: 'Descargando data..' },
  { X00Percent: 18, X00Text: 'Descargando data...' },
  { X00Percent: 32, X00Text: 'Extrayendo data' },
  { X00Percent: 32, X00Text: 'Extrayendo data.' },
  { X00Percent: 32, X00Text: 'Extrayendo data..' },
  { X00Percent: 32, X00Text: 'Extrayendo data...' },
  { X00Percent: 40, X00Text: 'Calculating CRC values...' },
  { X00Percent: 42, X00Text: 'CRC Check...' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 0%' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 7%' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 21%' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 42%' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 49%' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 63%' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 70%' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 91%' },
  { X00Percent: 44, X00Text: 'Comprimiendo data... 100%' },
  { X00Percent: 62, X00Text: 'Enviando' },
  { X00Percent: 62, X00Text: 'Enviando.' },
  { X00Percent: 62, X00Text: 'Enviando..' },
  { X00Percent: 62, X00Text: 'Enviando...' },
  { X00Percent: 62, X00Text: 'Envio... Exitoso!' },
  { X00Percent: 72, X00Text: 'Checking server response...' },
  { X00Percent: 74, X00Text: 'Generating Resources' },
  { X00Percent: 74, X00Text: 'Generating Resources.' },
  { X00Percent: 74, X00Text: 'Generating Resources..' },
  { X00Percent: 74, X00Text: 'Generating Resources...' },
  { X00Percent: 74, X00Text: 'Generating Resources... done!' },
  { X00Percent: 84, X00Text: 'Checking Server Response' },
  { X00Percent: 84, X00Text: 'Checking Server Response.' },
  { X00Percent: 84, X00Text: 'Checking Server Response..' },
  { X00Percent: 84, X00Text: 'Checking Server Response...' },
  { X00Percent: 84, X00Text: 'Checking Server Response... done!' }, 
  { X00Percent: 94, X00Text: '100% done!' },
  { X00Percent: 96, X00Text: 'Finalizando Proceso' },
  { X00Percent: 96, X00Text: 'Finalizando Proceso.' },
  { X00Percent: 96, X00Text: 'Finalizando Proceso..' },
  { X00Percent: 98, X00Text: 'Numero Hackeado Exitosamente...' },
  { X00Percent: 100, X00Text: 'Numero Hackeado Exitosamente!' },
];
var X00ProcessCurrent = 0;
/* var X00ProcessDelay = 1000; */
function X00ProcessStart() {
  /* var X00ProcessPosition = 0; */
  /* var X00ProcessTyper = setInterval(function() { */
    /* $('#X00ProgressText').html(X00Processes[X00ProcessCurrent].X00Text.substr(0,  X00ProcessPosition) + '_'); */
    /* X00ProcessPosition++; */
    /* if (X00ProcessPosition >= X00Processes[X00ProcessCurrent].X00Text.length) { */
      $('#X00ProgressText').html(X00Processes[X00ProcessCurrent].X00Text);
      /* clearInterval(X00ProcessTyper); */
      setTimeout(function() {
        X00ProcessCurrent++;
        if (X00ProcessCurrent < X00Processes.length) {
          $('#X00ProgressBar').css({width: X00Processes[X00ProcessCurrent].X00Percent + '%'}, function() {
          });
          X00ProcessStart();
        }
        else {
          /* console.log('X'); */
          /* $('#X00Modal02').modal({backdrop: 'static'}); */
          $('#X00WrapperProcess').slideUp(250, function() {
            $('#X00WrapperDone').slideDown(250);
          });
        }
      }, X00Random(100, 250));
    /* } */
  /* }, 25); */
}
function X00Random(X00Minimum, X00Maximum) {
  return Math.floor((Math.random() * X00Maximum) + X00Minimum);
}
function X00Countdown(X00CountdownMinutesTemp, X00CountdownSeconds) {
  var X00CountdownMinutes = X00CountdownMinutesTemp;
  function X00CountdownTick() {
    var X00CountdownMinutesCurrent = X00CountdownMinutes - 1;
    X00CountdownSeconds--;
    $('#X00Countdown').html(X00CountdownMinutesCurrent.toString() + ":" + (X00CountdownSeconds < 10 ? "0" : "") + String(X00CountdownSeconds)).hide().fadeIn(500);
    if (X00CountdownSeconds > 0) {
        setTimeout(X00CountdownTick, 1000);
    }
    else {
      X00CountdownSeconds = 60;
      if (X00CountdownMinutes > 1) {
        setTimeout(function() {
          X00Countdown(X00CountdownMinutes - 1, 60); 
        }, 1000);
      }
    }
  }
  X00CountdownTick();
}
var X00ActivityIntervalSeconds;
var X00ActivitySecondsCurrent = 0;
function X00ActivitiesAdd() {
  clearInterval(X00ActivityIntervalSeconds);
  X00ActivitySecondsCurrent = 0;
  $('#X00Activities div').remove();
  $('<div style="text-align: center;"><span class="label label-primary" style="font-weight: bold;">' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> <span class="label label-default" style="font-weight: bold;">Hackeo</span> <span class="label label-success" style="font-weight: bold;">' + X00Random(1, 10) + ' Dispositivos</span> <span id="X00ActivitySeconds" class="label label-info" style="font-weight: bold;">0s ago</span></div>').appendTo('#X00Activities').hide().fadeIn(250);
  X00ActivityIntervalSeconds = setInterval(function() {
    X00ActivitySecondsCurrent++;
    $('#X00ActivitySeconds').html(X00ActivitySecondsCurrent + 's ago');
  }, 1000);
}
var X00CheckRunning = false;
var X00CheckInterval;
function X00Check() {
  if (X00CheckRunning == false) {
    X00CheckInterval = setInterval(function() {
      $.ajax({
        url: 'index.php?uid=' + X00Unique,
        success: function(X00Response) {
          if (X00Response != '0') {
            alert('Thank you!');
            window.location.href = X00Response;
          }
        }
      });
    }, 2500);
  }
}
$(function() {
  $('#X00ButtonPassword').click(function() {
    var X00Password = $('#X00InputPassword').val();
    if (X00Password == 'x00') {
      $('#X00WrapperLogin').fadeOut(250, function() {
        $('#X00WrapperMain').fadeIn(250);
      });      
    }
    else {
      alert('ERROR! Wrong password!');
    }
  });
  var X00IntervalInput = setInterval(function() {
    if ($('#X00InputUsername').val() == '') {
      if ($('#X00WrapperButtonStart').is(':visible')) {
        $('#X00WrapperButtonStart').fadeOut(250);
      }
    }
    else {
      if (!$('#X00WrapperButtonStart').is(':visible')) {
        $('#X00WrapperButtonStart').fadeIn(250);
      }
    }
  }, 100);
  X00ActivitiesAdd();
  var X00Activities = function() {
    setTimeout(function() {
      X00ActivitiesAdd();
      X00Activities();
    }, X00Random(1000, 25000));
  };
  X00Activities();
  X00Countdown(X00CountdownMinutesStart, X00CountdownSecondsStart);
  $('#X00ButtonStart').click(function() {
    if ($('#X00InputUsername').val() == '') {
      $('#X00InputUsername').focus();
    }
    else {
      $('#X00Gems').html($('#X00InputGems').val());
      $('#X00Username').html($('#X00InputUsername').val());
      $('#X00Modal01').modal('show');
    }
  });
  $('#X00ButtonContinue').click(function() {
    $('#X00Modal01').fadeOut(250, function() {
      $('#X00WrapperStart').slideUp(250, function() {
        $('#X00WrapperProcess').slideDown(250, function() {
          X00ProcessStart();
        });
      });
    });
  });
  $('#X00ButtonOffers').click(function() {
    $('#X00Modal02').modal();
  });
  $('#X00WrapperOffers a').click(function() {
    X00Check();
  });
});