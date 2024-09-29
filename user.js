{
    fetch('userProfiles.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Fetch error: ' + response.status);
        } else {
        return response.json();
        }
    })
    .then(json => {
        const profilesContainer = document.getElementById('profiles');
        json.userProfiles.forEach(profile => {
          const profileDiv = document.createElement('div');
          profileDiv.innerHTML = `
              <h2>${profile.firstName}${profile.lastName}</h2>
              <p>email: ${profile.email}</p>
              <p>dateOfBirth: ${profile.dateOfBirth}</p>
              <p>address: ${profile.address.street},${profile.address.city}, ${profile.address.state},${profile.address.zipCode}</p>
              <p>theme: ${profile.preference.theme}</p>
              <p>language: ${profile.preference.language}</p>
              <p>notification: ${profile.preference.notifications ? 'On' : 'Off'}</p>
              <p>subscription: ${profile.preference.subscription ? 'Yes' : 'No'}</p>`;
          profilesContainer.appendChild(profileDiv);
        });
    })
    .catch(error => {
       console.error('There has been a problem with your fetch operation:', error);
    });
};