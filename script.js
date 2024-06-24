/*function cekKhadam() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    const khadams = ["Jin Batu", "Jin Air", "Jin Api", "Jin Angin", "Tuyul Merah", "Kosong", "Lembu", "Walang Sangit", "Haikk"];
    
    const animals = ["Harimau", "Gajah", "Buaya", "Elang", "Kucing", "Anjing", "Kuda", "Singa", "Ikan", "Burung"];
    const ghosts = ["Pocong", "Kuntilanak", "Genderuwo", "Tuyul", "Wewe Gombel", "Sundel Bolong", "Jenglot", "Palasik", "Babi Ngepet", "Leak"];
    const randomNames = [
        "Semut Hitam", "Naga Hijau", "Ular Putih", "Rusa Kuning", "Hantu Laut", "Kucing Belang", "Anjing Hitam", 
        "Kuda Terbang", "Singa Laut", "Ikan Emas", "Burung Hantu", "Harimau Putih", "Gajah Terbang", "Buaya Darat", 
        "Elang Merah", "Kucing Emas", "Anjing Kecil", "Kuda Besi", "Singa Emas", "Ikan Besar", "Burung Merak", 
        "Hantu Gunung", "Babi Hutan", "Rusa Emas", "Naga Hitam", "Semut Merah", "Ular Hijau", "Rusa Merah", "Hantu Angin", 
        "Kucing Biru", "Anjing Putih", "Kuda Hitam", "Singa Putih", "Ikan Merah", "Burung Elang", "Harimau Hitam", 
        "Gajah Kecil", "Buaya Besar", "Elang Putih", "Kucing Hitam", "Anjing Merah", "Kuda Perang", "Singa Merah", 
        "Ikan Kecil", "Burung Api", "Hantu Api", "Babi Merah", "Rusa Hitam", "Naga Merah",
        "Jin Hutan", "Jin Laut", "Jin Api", "Jin Tanah", "Jin Angkasa", "Jin Cahaya", "Jin Awan", "Jin Bayangan", 
        "Jin Batu", "Jin Air", "Jin Angin", "Jin Bintang", "Jin Bulan", "Jin Matahari", "Jin Salju", "Jin Es", 
        "Jin Pasir", "Jin Ombak", "Jin Badai", "Jin Pelangi", "Jin Daun", "Jin Ranting", "Jin Akar", "Jin Bunga", 
        "Jin Racun", "Jin Cacing", "Jin Nyamuk", "Jin Kumbang", "Jin Lebah", "Jin Laba-laba", "Jin Belalang", 
        "Jin Kupu-kupu", "Jin Jangkrik", "Jin Semut", "Jin Kumbang Tanduk", "Jin Ulat", "Jin Kepik", "Jin Kelelawar", 
        "Jin Tupai", "Jin Katak", "Jin Kura-kura", "Jin Bebek", "Jin Angsa", "Jin Anggur", "Jin Pisang", "Jin Pepaya", 
        "Jin Melon", "Jin Jambu", "Jin Mangga"
    ];

    for (let i = 0; i < randomNames.length; i++) {
        khadams.push(randomNames[i]);
    }

    const randomKhadam = khadams[Math.floor(Math.random() * khadams.length)];

    if (name && dob) {
        document.getElementById('result').innerText = `Kodam kamu: ${randomKhadam}`;
    } else {
        document.getElementById('result').innerText = 'ISI YANG BENER DULU.';
    }
}*/

function cekKhadam() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    const khadams = ["Jin Batu", "Jin Air", "Jin Api", "Jin Angin", "Tuyul Merah", "Kosong", "Lembu", "Walang Sangit", "Haikk"];
    
    const animals = ["Harimau", "Gajah", "Buaya", "Elang", "Kucing", "Anjing", "Kuda", "Singa", "Ikan", "Burung"];
    const ghosts = ["Pocong", "Kuntilanak", "Genderuwo", "Tuyul", "Wewe Gombel", "Sundel Bolong", "Jenglot", "Palasik", "Babi Ngepet", "Leak"];
    const randomNames = [
        "Semut Hitam", "Naga Hijau", "Ular Putih", "Rusa Kuning", "Hantu Laut", "Kucing Belang", "Anjing Hitam", 
        "Kuda Terbang", "Singa Laut", "Ikan Emas", "Burung Hantu", "Harimau Putih", "Gajah Terbang", "Buaya Darat", 
        "Elang Merah", "Kucing Emas", "Anjing Kecil", "Kuda Besi", "Singa Emas", "Ikan Besar", "Burung Merak", 
        "Hantu Gunung", "Babi Hutan", "Rusa Emas", "Naga Hitam", "Semut Merah", "Ular Hijau", "Rusa Merah", "Hantu Angin", 
        "Kucing Biru", "Anjing Putih", "Kuda Hitam", "Singa Putih", "Ikan Merah", "Burung Elang", "Harimau Hitam", 
        "Gajah Kecil", "Buaya Besar", "Elang Putih", "Kucing Hitam", "Anjing Merah", "Kuda Perang", "Singa Merah", 
        "Ikan Kecil", "Burung Api", "Hantu Api", "Babi Merah", "Rusa Hitam", "Naga Merah",
        "Jin Hutan", "Jin Laut", "Jin Api", "Jin Tanah", "Jin Angkasa", "Jin Cahaya", "Jin Awan", "Jin Bayangan", 
        "Jin Batu", "Jin Air", "Jin Angin", "Jin Bintang", "Jin Bulan", "Jin Matahari", "Jin Salju", "Jin Es", 
        "Jin Pasir", "Jin Ombak", "Jin Badai", "Jin Pelangi", "Jin Daun", "Jin Ranting", "Jin Akar", "Jin Bunga", 
        "Jin Racun", "Jin Cacing", "Jin Nyamuk", "Jin Kumbang", "Jin Lebah", "Jin Laba-laba", "Jin Belalang", 
        "Jin Kupu-kupu", "Jin Jangkrik", "Jin Semut", "Jin Kumbang Tanduk", "Jin Ulat", "Jin Kepik", "Jin Kelelawar", 
        "Jin Tupai", "Jin Katak", "Jin Kura-kura", "Jin Bebek", "Jin Angsa", "Jin Anggur", "Jin Pisang", "Jin Pepaya", 
        "Jin Melon", "Jin Jambu", "Jin Mangga"
    ];

    for (let i = 0; i < randomNames.length; i++) {
        khadams.push(randomNames[i]);
    }

    const randomKhadam = khadams[Math.floor(Math.random() * khadams.length)];

    if (name && dob) {
        document.getElementById('result').innerText = `Khadam Kamu: ${randomKhadam}`;
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields.';
    }
}




