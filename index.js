document.querySelector('.share-button').addEventListener('click', function() {
    if(navigator.share) {
        navigator.share({
            title: 'AKANDA.DEV',
            text: 'Akanda is passionate about building accessible website, web apps, and mobile applications that users love and solve their problems.',
            url: 'https://akanda.dev/'
})
.then(() => alert('Share complete'))
.error((error) => console.error('Could not share at this time', error))
}
});

