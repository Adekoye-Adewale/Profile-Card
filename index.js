document.querySelector('.share-button').addEventListener('click', function() {
    if(navigator.share) {
        navigator.share({
            title: 'Adekoye Adewale',
            text: 'I am a Software Engineer and WordPress Developer based in Lagos, Nigeria.',
            url: 'https://adekoyeadewale.com'
})
.then(() => console.log('Share complete'))
.error((error) => console.error('Could not share at this time', error))
}
});