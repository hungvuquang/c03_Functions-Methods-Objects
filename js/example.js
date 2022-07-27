(function () {

    var hotel = {
        name: 'Park',
        roomsRate: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomsRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    hotelRate.textContent = '$' + hotel.nameRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();

}())