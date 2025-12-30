const container = document.getElementById("blog-container");
const response = fetch("../../assets/data/blog.json");

fetch("../../assets/data/blog.json")
    .then(response => response.json());
    // .then(blogs => {
    //     blogs.sort((a,b) =>
    //         new Date(b.date) - new Date(a.date));  // Sort by date
    

        for(let blog in response){
            const article = document.createElement("article");
            article.innerHTML = `
                <h2 class="blogTitle">${blog.title}</h2>
                <h3 class="blogDate">${blog.date}</h3>
                <p class="blogContent">${blog.content}</p>`;
            container.appendChild(article);
        }

        // blogs.forEach(blog => {
            // const article = document.createElement("article");

            
                

        
        // });
    // });