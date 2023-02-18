// Kaydet düğmesi tıklandığında çalışacak işlev
function saveData() {
	// Ad, soyad ve e-posta adresini alma
	var firstName = document.getElementById('first-name').value;
	var lastName = document.getElementById('last-name').value;
	var email = document.getElementById('email').value;

	// Yeni bir JSON nesnesi oluşturma
	var data = {
		'first_name': firstName,
		'last_name': lastName,
		'email': email
	};

	// Kayıt işlemi için bir XMLHttpRequest nesnesi oluşturma
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'save.php', true);
	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xhr.send(JSON.stringify(data));

	// Kullanıcı bilgilerinin başarıyla kaydedildiğine dair bir mesaj görüntüleme
	alert('Kullanıcı bilgileriniz başarıyla kaydedildi.');
}

// Kaydet düğmesine tıklama işlevi ekleme
document.getElementById('save-button').addEventListener('click', saveData);