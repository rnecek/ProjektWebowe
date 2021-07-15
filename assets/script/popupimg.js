const galleryimg = document.createElement('div')
galleryimg.id = 'gallery'
document.body.appendChild(galleryimg)

const images = document.querySelectorAll('.display img')

images.forEach(image => {
    image.addEventListener('click', e => {
        galleryimg.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (galleryimg.firstChild) {
            galleryimg.removeChild(galleryimg.firstChild)
        }
        galleryimg.appendChild(img)
    })
})

galleryimg.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    galleryimg.classList.remove('active')
})
