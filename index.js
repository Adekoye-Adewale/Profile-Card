document.querySelector('.share-button').addEventListener('click', function() {
    if(navigator.share) {
        navigator.share({
            title: 'Adekoye Adewale',
            text: 'I am a Software Engineer, WordPress Developer, and Digital Marketing Strategist based in Lagos, Nigeria.',
            url: 'https://adekoye.netlify.app/'
})
.then(() => console.log('Share complete'))
.error((error) => console.error('Could not share at this time', error))
}
});