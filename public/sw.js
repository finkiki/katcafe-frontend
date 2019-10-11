self.version = '1.0';

self.addEventListener('push', event => {
    const data = event.data.json();

    console.log(data);

    self.registration.showNotification(data.title, {
        body: data.body,
        image: data.image,
        timestamp: data.timestamp,
        icon: 'https://katcafe.org/public/assets/katcafe-logo.png',
        badge: 'https://katcafe.org/public/assets/katcafe-logo.png',
    });
});