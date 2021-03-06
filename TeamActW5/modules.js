export default class Hikes {

    constructor(){
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
    }
    
    showHikeList(hikeList,hikeListElement) {
        hikeListElement.innerHTML = '';
        this.renderHikeList(hikeList, hikeListElement);
    }

    renderHikeList(hikes, parent) {
        hikes.forEach(hike => {
            parent.appendChild(this.renderOneHike(hike));
        });
    }

    renderOneHike(hike) {
        const item = document.createElement('li');

        item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;

        return item;
    }
}