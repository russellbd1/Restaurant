$(document).ready(function () {

  $('.banner_slider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5500,
    smartSpeed: 1500,
    navText: ['<i class="fa-sharp fa-solid fa-arrow-right"></i> ', '<i class="fa-sharp fa-solid fa-arrow-left"></i>'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });



  /* menu fix js */
  var shapers = $(window);

  shapers.on('scroll', function () {
    if (shapers.scrollTop() > 400) {
      $('.navbar_part').addClass('animated slideInDown fix')
    } else {
      $('.navbar_part').removeClass('animated slideInDown fix')
    }
  });


  /*isotop_part start*/
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function (itemElem) {
        var weight = $(itemElem).find('.weight').text();
        return parseFloat(weight.replace(/[\(\)]/g, ''));
      }
    }
  });
  var filterFns = {
    numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };
  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });

/*isotop_part end*/





  $('.clints_slider').owlCarousel({
    loop: true,
    slideBy: 1,
    margin: 10,
    center: true,
    nav: true,
    dots: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      }
    }

  });


















});