(function () {
  const images = [1, 2, 3, 4];
  const imagesCHM = [1, 2, 3, 4, 5, 6, 7, 8];
  const sliderCH = document.getElementById("slider-can-ho");
  const sliderCHM = document.getElementById('sldier-can-ho-mau');

  images.forEach((img) => {
    const image = `/media/images/body/${img}pn.jpg`;
    const imageId = `imgage_${Math.floor(Math.random() * 99999999) + 1}`;

    const html = `<div class="img has-hover x md-x lg-x y md-y lg-y" id="${imageId}">
						<div class="img-inner dark">
							<img loading="lazy" decoding="async" width="1984" height="993"
								src="${image}"
								    class="attachment-original size-original" alt="" />
						</div>

						<style>
							#${imageId} {
								width: 100%;
							}
					    </style>
				    </div>`;
    sliderCH.insertAdjacentHTML("beforeend", html);
  });

  imagesCHM.forEach((img) => {
    const image = `/media/images/body/ch${img}.jpg`;
    const imageId = `imgage_${Math.floor(Math.random() * 99999999) + 1}`;

    const html = `<div class="img has-hover x md-x lg-x y md-y lg-y" id="${imageId}">
						<div class="img-inner dark">
							<img loading="lazy" decoding="async" width="1984" height="993"
								src="${image}"
								    class="attachment-original size-original" alt="" />
						</div>

						<style>
							#${imageId} {
								width: 100%;
							}
					    </style>
				    </div>`;
    sliderCHM.insertAdjacentHTML("beforeend", html);
  });
})();
