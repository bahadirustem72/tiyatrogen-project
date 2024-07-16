document.addEventListener('DOMContentLoaded', function() {
    const eventList = document.getElementById('event-list');
    const eventPoster = document.getElementById('event-poster');
    const eventName = document.getElementById('event-name');
    const eventDescription = document.getElementById('event-description');

    eventList.addEventListener('click', function(e) {
        if (e.target && e.target.matches('a.list-group-item')) {
            e.preventDefault();
            const eventId = e.target.getAttribute('data-id');
            fetch(`/api/event/${eventId}`)
                .then(response => response.json())
                .then(event => {
                    eventPoster.src = event.poster;
                    eventName.textContent = event.name;
                    eventDescription.textContent = event.description;
                })
                .catch(error => console.error('Error fetching event:', error));
        }
    });
});