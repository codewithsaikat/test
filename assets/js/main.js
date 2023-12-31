/* eslint-disable */
(function ($) {
  // Preloader
  window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
  });


  /* Replace all SVG images with inline SVG */
  $('img.svg').each((i, e) => {

    const $img = $(e);

    const imgID = $img.attr('id');

    const imgClass = $img.attr('class');

    const imgURL = $img.attr('src');

    $.get(imgURL, (data) => {
      // Get the SVG tag, ignore the rest
      let $svg = $(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', `${imgClass} replaced-svg`);
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
      }

      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

  // Select-2

  $("#status").select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Status",
    allowClear: true,
  });

  $(".dm-select .header-drop-select").select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Status",
    allowClear: true,
    dropdownCssClass: "header-drop-select-down"
  });

  $("#status").select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Status",
    allowClear: true,
  });

  $(".atbd-select .header-drop-select").select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Status",
    allowClear: true,
    dropdownCssClass: "header-drop-select-down"
  });



  // /* datepicker active */ calender
  // $(".date-picker__calendar").datepicker(
  //   {
  //     dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  //     yearRange: "2021:2025"
  //   }
  // );

    // /* clock  */
    $('#clock').countdown('2030/10/10', function (event) {
      var $this = $(this).html(event.strftime('' +
        '<span class="number">%d<span class="text">days</span></span> ' +
        '<span class="number">%H<span class="text">hours</span></span> ' +
        '<span class="number">%M<span class="text">minutes</span></span> ' +
        '<span class="number">%S<span class="text">seconds</span></span> '));
    });


  /* sidebar collapse  */
  $('body').on("click", function (e) {
    if (window.matchMedia('(max-width: 1151px)').matches) {
      if ($(e.target).is(".sidebar__menu-group *") == false &&
        $(e.target).is('.header-top *') == false) {
        $(".sidebar").addClass("collapsed");
        $(".contents").addClass("expanded");
        $(".footer-wrapper").addClass("expanded");
      }
    }
  });

  /* sidebar collapse  */
  const sidebarToggle = document.querySelector(".sidebar-toggle");

  function sidebarCollapse(e) {
    e.preventDefault();
    $('.overlay-dark-sidebar').toggleClass('show');
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".logo-area").classList.toggle("logo-area-collapsed");
    document.querySelector(".sidebar").classList.toggle("collapsed");
    document.querySelector(".contents").classList.toggle("expanded");
    document.querySelector(".footer-wrapper").classList.toggle("expanded");
  }
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", sidebarCollapse);
  }

  /* sidebar nav events */
  $(".sidebar_nav .has-child ul").hide();
  $(".sidebar_nav .has-child.open ul").show();
  $(".sidebar_nav .has-child >a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().next("has-child").slideUp();
    $(this).parent().parent().children(".has-child").children("ul").slideUp();
    $(this).parent().parent().children(".has-child").removeClass("open");
    console.log($(this).next());
    if ($(this).next().is(":visible")) {
      $(this).parent().removeClass("open");
    } else {
      $(this).parent().addClass("open");
      $(this).next().slideDown();
    }
  });

  // /* Header mobile view */
  $(window)
    .bind("resize", function () {
      var screenSize = window.innerWidth;
      if ($(this).width() <= 767.98) {
        $(".navbar-right__menu").appendTo(".mobile-author-actions");
        // $(".search-form").appendTo(".mobile-search");
        $(".contents").addClass("expanded");
        $(".sidebar ").addClass("collapsed");
      } else {
        $(".navbar-right__menu").appendTo(".navbar-right");
      }
    })
    .trigger("resize");
  $(window)
    .bind("resize", function () {
      var screenSize = window.innerWidth;
      if ($(this).width() <= 991) {
        $(".sidebar").addClass("collapsed");
        $(".sidebar-toggle").on("click", function () {
          $(".overlay-dark-sidebar").toggleClass("show");
        });
        $(".overlay-dark-sidebar").on("click", function () {
          console.log($(this));
          $(this).removeClass("show");
          $(".sidebar").addClass("collapsed");
        });
      }
    })
    .trigger("resize");

  // /* Mobile Menu */
  $(".btn-search").on("click", function () {
    $(this).toggleClass("search-active");
    $(".mobile-search").toggleClass("show");
    $(".mobile-author-actions").removeClass("show");
  });

  $(".btn-author-action").on("click", function () {
    $(".mobile-author-actions").toggleClass("show");
    $(".mobile-search").removeClass("show");
    $(".btn-search").removeClass("search-active");
  });

  $(".menu-mob-trigger").on("click", function (e) {
    e.preventDefault();
    $(".mobile-nav-wrapper").toggleClass("show");
  });

  $(".nav-close").on("click", function (e) {
    e.preventDefault();
    $(".mobile-nav-wrapper").removeClass("show");
  });

  // /* Input password toggle */
  // function eye_pass() {
  //   $(".toggle-password2").click(function () {
  //     $(this).toggleClass("uil-eye");
  //     input = $(this).parent().find("#password-field");
  //     if (input.attr("type") == "password") {
  //       input.attr("type", "text");
  //     } else {
  //       input.attr("type", "password");
  //     }
  //   });
  // }
  // eye_pass();

  // /* Slider Basic */
  // let initialValue = 20;
  // let sliderTooltip = function (event, ui) {
  //   var curValue = ui.value || initialValue;
  //   var target = ui.handle || $(".ui-slider-handle");
  //   var tooltip = `<span class="tooltip-text">${curValue}</span>`;

  //   $(target).html(tooltip);
  // };


  // /* Indeterminate */
  // $('.bd-example-indeterminate [type="checkbox"]').prop("indeterminate", true);

  // /* Collapsable Menu */
  function mobileMenu(dropDownTrigger, dropDown) {
    $(".menu-wrapper .menu-collapsable " + dropDown).slideUp();

    $(".menu-wrapper " + dropDownTrigger).on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      $(this)
        .toggleClass("open")
        .siblings(dropDown)
        .slideToggle()
        .parent()
        .siblings(".sub-menu")
        .children(dropDown)
        .slideUp()
        .siblings(dropDownTrigger)
        .removeClass("open");
    });
  }
  mobileMenu(".menu-collapsable .dm-menu__link", ".dm-submenu");

  function selectTwo() {
    $(".dm-select .header-drop-select").select2({
      minimumResultsForSearch: Infinity,
      placeholder: "Status",
      allowClear: true,
      dropdownCssClass: "header-drop-select-down"
    });
  };
  selectTwo()

  /* Sidebar Change */
  const layoutChangeBtns = document.querySelectorAll("[data-layout]");

  function changeLayout(e) {
    e.preventDefault();
    if (this.dataset.layout === "light") {
      $('ul.l_sidebar li a,.l_sidebar a').removeClass('active');
      $(this).addClass("active");
      $("body").removeClass("layout-dark");
      $("body").addClass("layout-light");
    } else if (this.dataset.layout === "dark") {
      $('ul.l_sidebar li a,.l_sidebar a').removeClass('active');
      $(this).addClass("active");
      $("body").removeClass("layout-light");
      $("body").addClass("layout-dark");
    } else if (this.dataset.layout === "side") {
      $('ul.l_navbar li a,.l_navbar a').removeClass('active');
      $(this).addClass("active");
      $("body").removeClass("top-menu");
      $("body").addClass("side-menu");
    } else if (this.dataset.layout === "top") {
      $('ul.l_navbar li a,.l_navbar a').removeClass('active');
      $(this).addClass("active");
      $("body").removeClass("side-menu");
      $("body").addClass("top-menu");
    }
  }

  if (layoutChangeBtns) {
    layoutChangeBtns.forEach((layoutChangeBtn) =>
      layoutChangeBtn.addEventListener("click", changeLayout)
    );
    layoutChangeBtns.forEach((layoutChangeBtn) =>
      layoutChangeBtn.addEventListener("click", closeCustomizer)
    );
  }

  /* Customizing */
  const customizerBtn = document.querySelector(".customizer-trigger");
  const customizer = document.querySelector(".customizer-wrapper");
  const customizerClose = document.querySelector(".customizer-close");
  const customizerOverlay = document.querySelector(".customizer-overlay");


  function toggleCustomizer(e) {
    e.preventDefault();
    this.classList.toggle("show");
    customizer.classList.toggle("show");
    $('.customizer-overlay').addClass('show');
  }

  function closeCustomizer(e) {
    e.preventDefault();
    customizer.classList.remove("show");
    customizerBtn.classList.remove("show");
    customizerOverlay.classList.remove("show");
  }

  if (customizerBtn) {
    customizerBtn.addEventListener("click", toggleCustomizer);
  }

  if (customizerClose && customizerOverlay) {
    customizerClose.addEventListener("click", closeCustomizer);
    customizerOverlay.addEventListener("click", closeCustomizer);
  }

  /* Mail Compose Rich-text*/
  $('#mail-message, #mail-reply-message')
  .trumbowyg({
    svgPath: typeof env !== "undefined" && env.editorIconUrl ? env.editorIconUrl : '../assets/img/ui/icons.svg',
    btns: [
      ['viewHTML'],
      ['formatting'],
      ['strong', 'em', 'del'],
      ['superscript', 'subscript'],
      ['link'],
      ['image'], // Our fresh created dropdown
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
      ['unorderedList', 'orderedList'],
      ['horizontalRule'],
      ['removeformat'],
      ['fullscreen']
    ]
  });

  /* Mail Compose Rich-text*/
  $("#mail-reply-message2,#mail-reply-message3").trumbowyg({
    svgPath: typeof env !== "undefined" && env.editorIconUrl ? env.editorIconUrl : 'img/ui/icons.svg',
    btns: [
      ["formatting", "strong", "em", "superscript", "subscript", "link"],
      ["unorderedList", "orderedList"],
    ],
  });



  /* Submenu position relative to it's parent */
  let submenus = document.querySelectorAll('.sidebar li.has-child');
  let direction = document.querySelector('html').getAttribute('dir');
  submenus.forEach(item => {
    item.addEventListener('mouseover', function () {
      let menuItem = this;
      let menuItemRect = menuItem.getBoundingClientRect()
      let submenuWrapper = menuItem.querySelector('ul');
      submenuWrapper.style.top = `${menuItemRect.top}px`;
      if (direction === 'ltr') {
        submenuWrapper.style.left = `${menuItemRect.left + Math.round(menuItem.offsetWidth * 0.75) + 10}px`;
      } else if (direction === 'rtl') {
        submenuWrapper.style.right = `${Math.round(menuItem.offsetWidth * 0.75) + 10}px`;
      }
    })
  });

  /* sidebar scroll to active link on page load */
  const activeLink = document.querySelector('.sidebar_nav li a.active');
  if (activeLink !== null) {
    const activeLinkOffset = activeLink.offsetTop;
    //document.querySelector('.sidebar').style.marginTop = activeLinkOffset + 'px';
    $('.sidebar').animate({
      scrollTop: activeLinkOffset - 120
    }, 'slow');
  }


  /* Active Tooltip */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  //Toggle Search
  $('.search-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav-search .search-form-topMenu').toggleClass('show')
  })


  // /* Input password toggle */
  // function eye_pass() {
  //   $(".toggle-password2").click(function () {
  //     $(this).toggleClass("uil-eye");
  //     input = $(this).parent().find("#password-field");
  //     if (input.attr("type") == "password") {
  //       input.attr("type", "text");
  //     } else {
  //       input.attr("type", "password");
  //     }
  //   });
  // }
  // eye_pass();

  $("#mail-to,#reply-to,#reply-to2").select2({
    placeholder: "",
    dropdownCssClass: "mail-to",
  });

  /* mailbar Toggle */
  $(".mailbar-toggle").on("click", function () {
    $(".dm-mail-sidebar").toggleClass("show");
  });
  $(".mailbar-cross").on("click", function (e) {
    e.preventDefault();
    $(".dm-mail-sidebar").removeClass("show");
  });

  /* Active Composer */
  const btnCompose = document.querySelector(".btn-compose");
  const btnAddLabel = document.querySelector(".btn-add-label");
  const mailComposer = document.querySelector(".dm-mailCompose");
  const lebelForm = document.querySelector(".add-lebel-from");
  const closeCompose = document.querySelector(".compose-close");
  const closelabel = document.querySelector(".label-close");

  function showBox(e) {
    e.preventDefault();
    if (this.dataset.trigger == "label") lebelForm.classList.add("show");
    else if (this.dataset.trigger == "compose")
      mailComposer.classList.add("show");

    if ($(e.target).hasClass("label-close")) lebelForm.classList.remove("show");
  }

  function removeBox(e) {
    e.preventDefault();
    if (this.dataset.trigger == "label") lebelForm.classList.remove("show");
    else if (this.dataset.trigger == "compose")
      mailComposer.classList.remove("show");
  }

  if (btnCompose !== null && closeCompose !== null) {
    btnCompose.addEventListener("click", showBox);
    btnAddLabel.addEventListener("click", showBox);
  }

  if (closeCompose !== null && closelabel !== null) {
    closeCompose.addEventListener("click", removeBox);
    closelabel.addEventListener("click", removeBox);
  }

  let start = moment().subtract(6, "days");
  let end = moment();
  // $('input[name="date-ranger"]').daterangepicker({
  //   singleDatePicker: false,
  //   startDate: start,
  //   endDate: end,
  //   autoUpdateInput: false,
  //   ranges: {
  //     Today: [moment(), moment()],
  //     Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
  //     "Last 7 Days": [moment().subtract(6, "days"), moment()],
  //     "This Month": [moment().startOf("month"), moment().endOf("month")],
  //     "Last Month": [
  //       moment().subtract(1, "month").startOf("month"),
  //       moment().subtract(1, "month").endOf("month"),
  //     ],
  //   },
  // });

  /* Date compared */
  function compareDates(startDate, endDate, format) {
    var temp, dateStart, dateEnd;
    try {
      dateStart = $.datepicker.parseDate(format, startDate);
      dateEnd = $.datepicker.parseDate(format, endDate);
      if (dateEnd < dateStart) {
        temp = startDate;
        startDate = endDate;
        endDate = temp;
      }
    } catch (ex) {}
    return {
      start: startDate,
      end: endDate
    };
  }

  $.fn.dateRangePicker = function (options) {
    options = $.extend({
      "changeMonth": false,
      "changeYear": false,
      "numberOfMonths": 2,
      "rangeSeparator": " - ",
      "useHiddenAltFields": false
    }, options || {});

    var myDateRangeTarget = $(this);
    var onSelect = options.onSelect || $.noop;
    var onClose = options.onClose || $.noop;
    var beforeShow = options.beforeShow || $.noop;
    var beforeShowDay = options.beforeShowDay;
    var lastDateRange;

    function storePreviousDateRange(dateText, dateFormat) {
      var start, end;
      dateText = dateText.split(options.rangeSeparator);
      if (dateText.length > 0) {
        start = $.datepicker.parseDate(dateFormat, dateText[0]);
        if (dateText.length > 1) {
          end = $.datepicker.parseDate(dateFormat, dateText[1]);
        }
        lastDateRange = {
          start: start,
          end: end
        };
      } else {
        lastDateRange = null;
      }
    }

    options.beforeShow = function (input, inst) {
      var dateFormat = myDateRangeTarget.datepicker("option", "dateFormat");
      storePreviousDateRange($(input).val(), dateFormat);
      beforeShow.apply(myDateRangeTarget, arguments);
    };

    options.beforeShowDay = function (date) {
      var out = [true, ""],
        extraOut;
      if (lastDateRange && lastDateRange.start <= date) {
        if (lastDateRange.end && date <= lastDateRange.end) {
          out[1] = "ui-datepicker-range";
        }
      }

      if (beforeShowDay) {
        extraOut = beforeShowDay.apply(myDateRangeTarget, arguments);
        out[0] = out[0] && extraOut[0];
        out[1] = out[1] + " " + extraOut[1];
        out[2] = extraOut[2];
      }
      return out;
    };

    options.onSelect = function (dateText, inst) {
      var textStart;
      if (!inst.rangeStart) {
        inst.inline = true;
        inst.rangeStart = dateText;
      } else {
        inst.inline = false;
        textStart = inst.rangeStart;
        if (textStart !== dateText) {
          var dateFormat = myDateRangeTarget.datepicker("option", "dateFormat");
          var dateRange = compareDates(textStart, dateText, dateFormat);
          myDateRangeTarget.val(dateRange.start + options.rangeSeparator + dateRange.end);
          inst.rangeStart = null;
          if (options.useHiddenAltFields) {
            var myToField = myDateRangeTarget.attr("data-to-field");
            var myFromField = myDateRangeTarget.attr("data-from-field");
            $("#" + myFromField).val(dateRange.start);
            $("#" + myToField).val(dateRange.end);
          }
        }
      }
      onSelect.apply(myDateRangeTarget, arguments);
    };

    options.onClose = function (dateText, inst) {
      inst.rangeStart = null;
      inst.inline = false;
      onClose.apply(myDateRangeTarget, arguments);
    };

    return this.each(function () {
      if (myDateRangeTarget.is("input")) {
        myDateRangeTarget.datepicker(options);
      }
      myDateRangeTarget.wrap("<div class=\"dateRangeWrapper\"></div>");
    });
  };
  /* Range */
  $(document).ready(function () {
    $("#txtDateRange").dateRangePicker({
      showOn: "focus",
      rangeSeparator: " - ",
      dateFormat: "dd/mm/yy",
      useHiddenAltFields: true,
      constrainInput: true
    });
  });

  // //Total Counter
  // function progress() {
  //   const counters = document.querySelectorAll(".total-percent");

  //   counters.forEach((counter) => {
  //     counter.innerText = "0";
  //     const updateCounter = () => {
  //       const target = +counter.getAttribute("data-target");
  //       const count = +counter.innerText;
  //       const increment = target / 200;
  //       if (count < target) {
  //         counter.innerText = `${Math.ceil(count + increment)}`;
  //         setTimeout(updateCounter, 1);
  //       } else counter.innerText = target + "%";
  //     };
  //     updateCounter();
  //   });
  // };
  // progress();

})(jQuery);


