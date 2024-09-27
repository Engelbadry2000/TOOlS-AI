const apiKey = 'AIzaSyDskUYjH09dyzwv1d7H_SeTbH8_WmqXzuw';
const searchEngineId = '86ab2ac97164c4956';
const tools = [
    { name: "Wolfram Alpha", url: "https://www.wolframalpha.com/" },
    { name: "MATLAB Online", url: "https://matlab.mathworks.com/" },
    { name: "Google Scholar", url: "https://scholar.google.com/" },
    { name: "Coursera AI Courses", url: "https://www.coursera.org/courses?query=artificial%20intelligence" },
    { name: "Khan Academy", url: "https://www.khanacademy.org/" },
    { name: "Google Colab", url: "https://colab.research.google.com/" },
    { name: "Overleaf", url: "https://www.overleaf.com/" },
    { name: "IEEE Xplore", url: "https://ieeexplore.ieee.org/" },
    { name: "TensorFlow", url: "https://www.tensorflow.org/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "Hugging Face", url: "https://huggingface.co/" },
    { name: "DeepL Translator", url: "https://www.deepl.com/translator" },
    { name: "Project Euler", url: "https://projecteuler.net/" },
    { name: "Geogebra", url: "https://www.geogebra.org/" },
    { name: "Desmos", url: "https://www.desmos.com/calculator" },
];

function displayTools() {
    const toolsTableBody = document.getElementById('tools-table-body');
    toolsTableBody.innerHTML = '';
    tools.forEach(tool => {
        const toolRow = document.createElement('tr');
        toolRow.innerHTML = `
            <td><a href="${tool.url}" target="_blank">${tool.name}</a></td>
            <td><a href="${tool.url}" target="_blank">زيارة الأداة</a></td>
        `;
        toolsTableBody.appendChild(toolRow);
    });
}

document.getElementById('add-tool-button').addEventListener('click', function() {
    const toolName = document.getElementById('tool-name').value;
    const toolUrl = document.getElementById('tool-url').value;

    if (toolName && toolUrl) {
        tools.push({ name: toolName, url: toolUrl });
        displayTools(); // تحديث عرض الأدوات
        document.getElementById('tool-name').value = ''; // مسح الحقول
        document.getElementById('tool-url').value = '';
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
});

// دمج API للبحث الذاتي
document.getElementById('search-button').addEventListener('click', async function() {
    const query = document.getElementById('search-input').value;
    const resultsContainer = document.getElementById('search-results-container');
    resultsContainer.innerHTML = ''; // مسح النتائج السابقة

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`);
    const data = await response.json();

    if (data.items) {
        data.items.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <a href="${item.link}" target="_blank">${item.title}</a>
                <p>${item.snippet}</p>
                <img src="${item.pagemap?.cse_image ? item.pagemap.cse_image[0].src : ''}" alt="Image" onerror="this.style.display='none'">
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>لا توجد نتائج.</p>';
    }
});

displayTools(); // عرض الأدوات عند تحميل الصفحة
