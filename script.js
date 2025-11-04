document.addEventListener('DOMContentLoaded', () => {
  const downloadForm = document.getElementById('downloadForm');
  const mediaUrlInput = document.getElementById('mediaUrl');
  const platformCards = document.querySelectorAll('.platform-card');
  const resultsSection = document.getElementById('results');
  const qualityOptions = document.getElementById('qualityOptions');
  
  let selectedPlatform = null;
  
  // Platform selection
  platformCards.forEach(card => {
    card.addEventListener('click', () => {
      platformCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedPlatform = card.dataset.platform;
    });
  });
  
  // Form submission
  downloadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const url = mediaUrlInput.value.trim();
    if (!url) {
      alert('Please enter a valid URL');
      return;
    }
    
    if (!selectedPlatform) {
      alert('Please select a platform');
      return;
    }
    
    // In a real app, you would call your backend API here
    // This is just a simulation
    simulateFetchOptions(url, selectedPlatform);
  });
  
  function simulateFetchOptions(url, platform) {
    // Simulate API call delay
    setTimeout(() => {
      const mockOptions = {
        youtube: [
          { quality: '1080p', type: 'video/mp4' },
          { quality: '720p', type: 'video/mp4' },
          { quality: 'Audio only', type: 'audio/mp3' }
        ],
        tiktok: [
          { quality: 'HD', type: 'video/mp4' },
          { quality: 'With watermark', type: 'video/mp4' },
          { quality: 'Audio only', type: 'audio/mp3' }
        ],
        instagram: [
          { quality: 'High quality', type: 'video/mp4' },
          { quality: 'Image only', type: 'image/jpeg' }
        ],
        facebook: [
          { quality: 'HD', type: 'video/mp4' },
          { quality: 'SD', type: 'video/mp4' }
        ],
        twitter: [
          { quality: 'Highest quality', type: 'video/mp4' },
          { quality: 'GIF', type: 'image/gif' }
        ]
      };
      
      qualityOptions.innerHTML = '';
      mockOptions[platform].forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'download-option';
        optionElement.innerHTML = `
                    <h3>${option.quality}</h3>
                    <p class="text-gray-600 mb-3">${option.type}</p>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                        Download
                    </button>
                `;
        qualityOptions.appendChild(optionElement);
      });
      
      resultsSection.classList.remove('hidden');
    }, 1000);
  }
});