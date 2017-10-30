Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

if ('serviceWorker' in navigator) {
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('sw.js').then(function(reg) {
   console.log(':^)', reg);
   // TODO
	displayNotification();
 }).catch(function(err) {
   console.log(':^(', err);
 });
}

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'À¥¾Û Çª½Ã Å×½ºÆ® ÁßÀÔ´Ï´Ù.!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'explore', title: 'Explore this new world',
            icon: 'images/checkmark.png'},
          {action: 'close', title: 'Close notification',
            icon: 'images/xmark.png'},
        ]
      };
      reg.showNotification('À¥¾Û Çª½Ã Å×½ºÆ®!', options);
    });
  }
}