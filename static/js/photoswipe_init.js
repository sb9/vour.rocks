var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'https://farm5.staticflickr.com/4337/36314080051_b249c9a91a_o.jpg',
        w: 600,
        h: 400
    },
    {
        src: 'https://farm5.staticflickr.com/4395/36405464486_b2dd4c9830_o.jpg',
        w: 1200,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

var pswpGallery = null;
var firstGallery = true;

function openPhotoSwipe(index)
{
  console.log("open " + index);
  var curIndex = 0;

  var pswpOptions = {
    index : parseInt(index, 10)
  };

  var pswpItems = new Array;


  var items = $(".vour-gallery-item", ".vour-gallery");

  for(curIndex = 0 ; curIndex < items.length ; curIndex++) {
    var thisPic = $("a", items[curIndex]).attr("data-picture");
    pswpItems.push({
      src: thisPic,
      w  : 1200,
      h  : 800
    });
  }

  if(pswpGallery) {
    try {
      pswpGallery.close();
    //  pswpGallery.destroy();
      pswpGallery = null;
      console.log("closed");
    } catch(e) {
      console.log("close except " + e);
    }
  }

  pswpGallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, pswpItems, pswpOptions);
  pswpGallery.init();
//  if(!firstGallery) {
//    pswpGallery.goTo(index);
//  }
//  firstGallery = false;
  return(false);
}

function bindPhotoSwipe()
{
  var index = 0;
  $(".vour-gallery-item", ".vour-gallery").each(function() {
//    var index = $("a", $(this)).attr("data-index");
    var curIndex = index;
    $(this).on("click", function() {
                          openPhotoSwipe(curIndex)
                        });
    index++;
  });

}

// Initializes and opens PhotoSwipe
//var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
//gallery.init();
bindPhotoSwipe();
