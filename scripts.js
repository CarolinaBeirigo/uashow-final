/*abre e fecha o menu quando clicar no icone */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/*quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}


const buttonArtist = document.querySelector('.btn_artista');
const buttonCompany = document.querySelector('.btn_empresa');
const buttonUser = document.querySelector('.btn_usuario')
const artistFormWrapper = document.querySelector('.artistDataContainer');
const companyFormWrapper = document.querySelector('.companyFormWrapper');

buttonArtist.addEventListener('click', showCategoryArtistForm)
buttonCompany.addEventListener('click', showCategoryCompanyForm)
buttonUser.addEventListener('click', showUserForm)

function showCategoryArtistForm() {
    companyFormWrapper.classList.remove('active')
    artistFormWrapper.classList.add('active');
}

function showCategoryCompanyForm() {

    companyFormWrapper.classList.add('active');
    artistFormWrapper.classList.remove('active')
}

function showUserForm() {
    artistFormWrapper.classList.remove('active')
    companyFormWrapper.classList.remove('active')
}


