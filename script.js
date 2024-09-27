// العناصر
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const toolsList = document.getElementById('tools-list');
const addToolButton = document.getElementById('add-button');
const toolNameInput = document.getElementById('tool-name');
const toolUrlInput = document.getElementById('tool-url');
const searchResultsContainer = document.getElementById('search-results-container');
const apiKey = 'AIzaSyDskUYjH09dyzwv1d7H_SeTbH8_WmqXzuw'; // استبدل بمفتاح API الخاص بك
const searchEngineId = '86ab2ac97164c4956'; // استبدل بمعرف محرك البحث الخاص بك

// الوظيفة لإضافة أداة جديدة
addToolButton.addEventListener('click', () => {
    const toolName = toolNameInput.value.trim();
    const toolUrl = toolUrlInput.value.trim();

    if (toolName && toolUrl) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${toolName}</td><td><a href="${toolUrl}" target="_blank">زيارة الموقع</a></td>`;
        toolsList.appendChild(newRow);
        toolNameInput.value = '';
        toolUrlInput.value = '';
    } else {
        alert('يرجى إدخال اسم الأداة ورابطها.');
    }
});

// الوظيفة للبحث عن الأداة
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    searchResultsContainer.innerHTML = ''; // مسح نتائج البحث السابقة

    if (query) {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.items) {
                    data.items.forEach(item => {
                        const resultItem = document.createElement('div');
                        resultItem.classList.add('result-item');
                        resultItem.innerHTML = `
                            <h3>${item.title}</h3>
                            <a href="${item.link}" target="_blank">زيارة الموقع</a>
                            <img src="${item.pagemap?.cse_image ? item.pagemap.cse_image[0].src : ''}" alt="${item.title}">
                        `;
                        searchResultsContainer.appendChild(resultItem);
                    });
                } else {
                    searchResultsContainer.innerHTML = '<p>لا توجد نتائج مطابقة.</p>';
                }
            })
            .catch(error => {
                console.error('حدث خطأ:', error);
                searchResultsContainer.innerHTML = '<p>حدث خطأ أثناء البحث. حاول مرة أخرى.</p>';
            });
    } else {
        alert('يرجى إدخال استعلام البحث.');
    }
});
