
const News =[
{
    "headline": "Trickle-down workaholism in startups",
    "articledata": "May 30,2017 / 12:30pm,",
    "label" : "Fintech, technology",
    "author": "Toni Ndiritu",
    "authoravatar":"https://miro.medium.com/fit/c/96/96/1*mrN5nAFvr3pUR7cTbdIaVg.jpeg",
    "photo" : "https://images.unsplash.com/photo-1492633342445-8408e4c17712?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    
  },

  {
    "headline": "Yaguara nabs $7.2M seed to help better",
    "articledata": "May 30,2017 / 12:30pm,",
    "label" : "Fintech, technology",
    "author": "Toni Ndiritu",
    "authoravatar":"https://miro.medium.com/fit/c/96/96/1*mrN5nAFvr3pUR7cTbdIaVg.jpeg",
    "photo" : "https://images.unsplash.com/photo-1492633342445-8408e4c17712?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    
  },


  {
    "headline": "Airbnb to provide free or subsidized housing for.. healthcare workers",
    "articledata": "May 30,2017 / 12:30pm,",
    "label" : ["Tech", "politics", "celery"],
    "author": "Toni Ndiritu",
    "authoravatar":"https://miro.medium.com/fit/c/96/96/1*mrN5nAFvr3pUR7cTbdIaVg.jpeg",
    "photo" : "https://images.unsplash.com/photo-1492633342445-8408e4c17712?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    
  },

];



function newstemplate (newz){
    return `
    <div class="card">
        <img class="thumb"src="${newz.photo}"alt="">
                            <h1 class="headline"> ${newz.headline}</h1>
                            <div class="author">
                                <div class="hold-img"><img class="avatar" src="${newz.authoravatar} " alt=""></div>
                                <div class="author-info">
                                    <h3 class="name">${newz.author} </h3>
                                    <div class="minor">
                                        <p class="date">${newz.articledata}<span class="lable">${newz.label}</span></p>
                                    </div>
                                </div>
                            </div>
    </div>
    
    `;
}

function newstemplate (newz){
    return `
    <div class="card">
        <img class="thumb"src="${newz.photo}"alt="">
                            <h1 class="headline"> ${newz.headline}</h1>
                            <div class="author">
                                <div class="hold-img"><img class="avatar" src="${newz.authoravatar} " alt=""></div>
                                <div class="author-info">
                                    <h3 class="name">${newz.author} </h3>
                                    <div class="minor">
                                        <p class="date">${newz.articledata}<span class="lable">${newz.label}</span></p>
                                    </div>
                                </div>
                            </div>
    </div>
    
    `;
}



document.getElementById("news").innerHTML =`
${News.map (newstemplate).join ("")}
`;

document.getElementById("newss").innerHTML =`
${News.map (newstemplate).join ("")}
`;