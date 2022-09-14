function messageIframe(data) {
  var iframe = document.getElementById("stadium");
  iframe.contentWindow.postMessage(data, 'http://stadium.com');
}

function registerLoginEvent() {
  var button = document.getElementById("login");
  button.addEventListener("click", function() {
    messageIframe('login')
  })
}

function registerLogoutEvent() {
  var button = document.getElementById("logout");
  button.addEventListener("click", function() {
    messageIframe('logout')
  })
}

window.addEventListener("load", function() {
  console.log('- Snacks loaded -');
  registerLoginEvent();
  registerLogoutEvent();
  messageIframe('ready');
})

window.addEventListener("message", function(event) {
  console.log('- Snacks received message -');
  console.log('Event: ', event)

  if(event.data.session) {
    document.getElementById("login").classList.add('d-none');
    document.getElementById("logout").classList.remove('d-none');
  } else {
    document.getElementById("logout").classList.add('d-none');
    document.getElementById("login").classList.remove('d-none');
  }
});
