var hotel={
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkValidity: function (){
        return this.rooms-this.booked;
    }
};

var elName=document.getElementById('hotelName');
elName.textContent=hotel.name;

var elName=document.getElementById('rooms');
elRooms.textContent=hotel.checkValidity();