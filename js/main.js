(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const pageParams = new URLSearchParams(window.location.search);
    const numberOfPageFromPageParams = Number(pageParams.get('page'));
    const titleDescr = document.querySelector('#titleDescr');

    async function getPostsData() {
      const response = await fetch(
        `https://gorest.co.in/public-api/posts?page=${numberOfPageFromPageParams}`
      );
      const data = await response.json();
      return data;
    }

    function setDefaultPageNumber(paginationInfo) {
      if(numberOfPageFromPageParams <= 0 || numberOfPageFromPageParams > paginationInfo.pages) window.location.replace('index.html?page=1');
    }

    function setTitleDescr(paginationInfo) {
      titleDescr.innerText = `${paginationInfo.pages} pages of ${paginationInfo.limit} posts each with random text, plus comments (or not)`;
    }

    function createCardsList(list) {
      const cardsList = document.createElement('ul');
      cardsList.classList.add('list-unstyled');

      list.forEach(el => {
        const cardsListItemElement = document.createElement('li');

        cardsListItemElement.innerHTML ='';
        cardsListItemElement.innerHTML =`
          <div class="card mb-1" style="width: 965px;">
            <div class="card-body">
              <a href="post.html?page=${numberOfPageFromPageParams}&id=${el.id}" class="card-title text-dark"><h3>${el.title}</h3></a>
              <p class="mb-0">${el.body.substring(0, 250) + '...'}</p>
            </div>
          </div>
        `;
        cardsList.append(cardsListItemElement);
      });
      titleDescr.after(cardsList);
    }

    async function createPagination(paginationInfo) {
      let numberOfPageForPagination = numberOfPageFromPageParams;

      document.querySelector('#lastPageLink').href = `index.html?page=${paginationInfo.pages}`;
      document.querySelector('#prevPageLink').href = `index.html?page=${numberOfPageFromPageParams - 1}`;
      document.querySelector('#nextPageLink').href = `index.html?page=${numberOfPageFromPageParams + 1}`;

      document.querySelectorAll('.page-link-number').forEach(el => {
        if(numberOfPageFromPageParams <= 1) {
          document.querySelector('#firstPage').classList.toggle('disabled');
          document.querySelector('#prevPage').classList.toggle('disabled');
        }
        if(numberOfPageFromPageParams >= paginationInfo.pages) {
          document.querySelector('#lastPage').classList.toggle('disabled');
          document.querySelector('#nextPage').classList.toggle('disabled');
        }

        if(numberOfPageFromPageParams <= 2) {
          el.href = `index.html?page=${numberOfPageForPagination}`;
          el.innerText = `${numberOfPageForPagination}`;
        }
        if(numberOfPageFromPageParams == 2) {
          el.href = `index.html?page=${numberOfPageForPagination - 1}`;
          el.innerText = `${(numberOfPageForPagination - 1)}`;
        }
        if(numberOfPageFromPageParams > 2) {
          el.href = `index.html?page=${numberOfPageForPagination - 2}`;
          el.innerText = `${(numberOfPageForPagination - 2)}`;
        }
        if(numberOfPageFromPageParams >= paginationInfo.pages - 4) {
          el.href = `index.html?page=${numberOfPageForPagination - 4}`;
          el.innerText = `${numberOfPageForPagination - 4}`;
        }
        numberOfPageForPagination++;

        document.querySelector("#pageInfo").innerText = `page ${numberOfPageFromPageParams} from ${paginationInfo.pages}`;

        if(el.innerText == numberOfPageFromPageParams) el.parentElement.classList.toggle('disabled');
      });
    }

    async function renderCards() {
      const data = await getPostsData();
      setDefaultPageNumber(data.meta.pagination);
      setTitleDescr(data.meta.pagination);
      createCardsList(data.data);
      createPagination(data.meta.pagination);
    }
    renderCards();
  });
})();
