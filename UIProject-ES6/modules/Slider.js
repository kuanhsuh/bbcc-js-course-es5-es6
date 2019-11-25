import "./import-jquery";
import "owl.carousel";

class Slider {
  constructor() {
    // this.events()
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      })
    })
  }

  events() {

  }


}

export default Slider;
