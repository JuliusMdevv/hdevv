fetch("../assets/data/blog.json")
    .then(response => response.json())
    .then(blogs => {
        blogs.sort((a,b) =>
            new Date(b.date) - new Date(a.date));  // Sort by date
    
        const container = document.getElementById("blog-container");

        blogs.forEach(blog => {
            const article = document.createElement("article");

            if(blog.image==""){
                article.innerHTML = `
                <h2 class="blogTitle">${blog.title}</h2>
                <h3 class="blogDate">${blog.date}</h3>
                <p class="blogContent">${blog.content}</p>
                <img class="blogImage" src="${blog.image}"/>`
            } else if(blog.image==null){
                article.innerHTML = `
                <h2 class="blogTitle">${blog.title}</h2>
                <h3 class="blogDate">${blog.date}</h3>
                <p class="blogContent">${blog.content}</p>`
            }

        container.appendChild(article);
        });
    });