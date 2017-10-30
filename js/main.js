if ('serviceWorker' in navigator) {
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('sw.js').then(function(reg) {
   console.log(':^)', reg);
   // TODO
   
	var title = 'Simple Title';
	var options = {
	  body: 'Simple piece of body text.\nSecond line of body text :)'
	};
	reg.showNotification(title, options);   
 }).catch(function(err) {
   console.log(':^(', err);
 });
}