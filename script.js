// قائمة أدوات الذكاء الاصطناعي للعلوم الهندسية والتعليم الجامعي
const aiTools = [
    { name: "Wolfram Alpha", url: "https://www.wolframalpha.com/" },
    { name: "MATLAB Online", url: "https://matlab.mathworks.com/" },
    { name: "Google Scholar", url: "https://scholar.google.com/" },
    { name: "Coursera AI Courses", url: "https://www.coursera.org/courses?query=artificial%20intelligence" },
    { name: "Khan Academy", url: "https://www.khanacademy.org/" },
    { name: "Google Colab", url: "https://colab.research.google.com/" },
    { name: "Overleaf", url: "https://www.overleaf.com/" }, // لإعداد التقارير والأبحاث
    { name: "IEEE Xplore", url: "https://ieeexplore.ieee.org/" }, // مكتبة للأبحاث الهندسية
    { name: "TensorFlow", url: "https://www.tensorflow.org/" }, // منصة تعليمية لأدوات تعلم الآلة
    { name: "GitHub", url: "https://github.com/" }, // لإدارة المشاريع البرمجية والتعاون الأكاديمي
    { name: "Hugging Face", url: "https://huggingface.co/" }, // مكتبة لنماذج تعلم الآلة مفتوحة المصدر
    { name: "DeepL Translator", url: "https://www.deepl.com/translator" }, // لترجمة النصوص الأكاديمية بدقة
    { name: "Project Euler", url: "https://projecteuler.net/" }, // مسائل رياضيات وبرمجة متقدمة
    { name: "Simulink Online", url: "https://matlab.mathworks.com/products/simulink.html" }, // نمذجة ومحاكاة للأنظمة الهندسية
];

// تحديد عنصر قائمة الأدوات في الـ HTML
const toolList = document.getElementById("tool-list");

// وظيفة لعرض الأدوات في الجدول
function displayTools() {
    aiTools.forEach(tool => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const linkCell = document.createElement("td");

        nameCell.textContent = tool.name;

        const link = document.createElement("a");
        link.href = tool.url;
        link.target = "_blank"; // يفتح الرابط في تبويب جديد
        link.textContent = "رابط الأداة";
        link.style.color = "rgb(34, 193, 195)"; // لون النص للرابط
        linkCell.appendChild(link);

        row.appendChild(nameCell);
        row.appendChild(linkCell);
        toolList.appendChild(row);
    });
}

// استدعاء الوظيفة لعرض الأدوات
displayTools();
