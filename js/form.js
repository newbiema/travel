        document.getElementById('bookButton').addEventListener('click', function() {
            // Ambil nilai dari form
            const selectedDate = document.getElementById('selectedDate').value;
            const guestCount = document.getElementById('guestCount').value;
            const customerName = document.getElementById('customerName').value;
            const whatsappNumber = document.getElementById('whatsappNumber').value;
            
            // Validasi form
            if (!selectedDate || !customerName || !whatsappNumber) {
                alert('Harap lengkapi semua data yang diperlukan!');
                return;
            }
            
            // Format nomor WhatsApp (hapus karakter non-digit)
            const formattedNumber = whatsappNumber.replace(/\D/g, '');
            
            // Format pesan
            const message = `Halo, saya ingin memesan dengan detail sebagai berikut:
            
            Nama: ${customerName}
            Tanggal: ${selectedDate}
            Jumlah Orang: ${guestCount} orang

            Apakah masih tersedia untuk tanggal tersebut?`;
            
            // Encode pesan untuk URL
            const encodedMessage = encodeURIComponent(message);
            
            // Buat URL WhatsApp
            const whatsappURL = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
            
            // Buka WhatsApp
            window.open(whatsappURL, '_blank');
        });
        
        // Set tanggal minimum ke hari ini
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('selectedDate').setAttribute('min', today);
        
        // Set tanggal default ke hari ini
        document.getElementById('selectedDate').value = today;