const idForm = document.querySelector('#id_username')
idForm.setAttribute('placeholder', 'ID')
idForm.setAttribute('class', 'form-control')
idForm.setAttribute('aria-label', 'Username')
idForm.setAttribute('aria-describedby','basic-addon1')
idForm.setAttribute('style', 'height: 60px;')

const passwordForm = document.querySelector('#id_password')
passwordForm.setAttribute('placeholder', 'Password')
passwordForm.setAttribute('class', 'form-control')
passwordForm.setAttribute('aria-label', 'Password')
passwordForm.setAttribute('aria-describedby', 'basic-addon2')
passwordForm.setAttribute('style', 'height: 60px;')