document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const featuredContentSection = document.querySelector('.featured-content');
             // Загрузка гайдов
            const guidesSection = document.createElement('section');
            guidesSection.innerHTML = '<h2>Популярные гайды</h2>';
            const guidesList = document.createElement('div');
            guidesList.className = 'content-list';

             data.featured.guides.forEach(guide => {
                const guideItem = document.createElement('div');
                guideItem.className = 'content-item';
                 guideItem.innerHTML = `
                  <img src="" alt="${guide.title}">
                   <h3>${guide.title}</h3>
                    <p>${guide.description}</p>
                    <a href="${guide.link}" class="button">Читать</a>
                `;
                guidesList.appendChild(guideItem);
            });

            guidesSection.appendChild(guidesList);
            featuredContentSection.appendChild(guidesSection);
             //Загрузка новостей
            const newsSection = document.createElement('section');
            newsSection.innerHTML = '<h2>Последние новости</h2>';
            const newsList = document.createElement('div');
            newsList.className = 'content-list';

             data.featured.news.forEach(news => {
               const newsItem = document.createElement('div');
                newsItem.className = 'content-item';
                newsItem.innerHTML = `
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                     <a href="${news.link}" class="button">Читать</a>
                `;
                 newsList.appendChild(newsItem);
            });

            newsSection.appendChild(newsList);
            featuredContentSection.appendChild(newsSection);
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});