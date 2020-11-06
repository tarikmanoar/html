;(function($) {//Protect it from other jQuery instances

    $(window).ready(function(){

        //console.log(aamrg_vars);

        var cWidth = aamrg_vars.columnWidth;
        if( cWidth == 'auto' ){
            //do nothing
        }else{
            cWidth = parseInt(aamrg_vars.columnWidth);
        }

      	$('.AutoAlbums').autoAlbums({
            imagesOrder: aamrg_vars.imgOrder, //byDate, byDateReverse, byName, byNameReverse, random
            albumsOrder: 'none', //byDate, byDateReverse, byName, byNameReverse, random, none
            folderCoverRandom: aamrg_vars.folderCoverRandom, //If there is no folderCover image then get a random image from that folder to use it as cover folder
            foldersAtTop: aamrg_vars.foldersAtTop, //If you want the folders to be always first and then the images, if not they will be as you ordered above
            showNumFolder: aamrg_vars.showNumFolder, //If you want to show the number of folders inside a folder
            showNumImages: aamrg_vars.showNumImages, //If you want to show the number of images inside a folder
            autoHideNumFolder: aamrg_vars.autoHideNumFolder, //If there is no folders inside a folder then don't show the number of folders
            autoHideNumImages: aamrg_vars.autoHideNumImage, //If there is no images inside a folder then don't show the number of images
            isFitWidth: true, //Nedded to be true if you wish to center the gallery to its container
            lazyLoad: aamrg_vars.lazyLoad, //If you wish to load more images when it reach the bottom of the page
            showNavBar: aamrg_vars.showNavBar, //Show the navigation bar?
            imagesToLoadStart: parseInt(aamrg_vars.imagesToLoadStart), //The number of images to load when it first loads the grid
            imagesToLoad: parseInt(aamrg_vars.imagesToLoad), //The number of images to load when you click the load more button
            horizontalSpaceBetweenThumbnails: parseInt(aamrg_vars.horizontalSpace), //The space between images horizontally
            verticalSpaceBetweenThumbnails: parseInt(aamrg_vars.verticalSpace), //The space between images vertically
            columnWidth: cWidth, //The width of each columns, if you set it to 'auto' it will use the columns instead
            columns: parseInt(aamrg_vars.columns), //The number of columns when you set columnWidth to 'auto'
            columnMinWidth: parseInt(aamrg_vars.columnMinWidth), //The minimum width of each column when you set columnWidth to 'auto'
            isAnimated: aamrg_vars.isAnimated, //Animation when resizing or filtering with the nav bar
            caption: aamrg_vars.caption, //Show the caption in mouse over
            captionType: aamrg_vars.captionType, // 'grid', 'grid-fade', 'classic' the type of caption effect
            lightBox: aamrg_vars.lightbox, //Do you want the lightbox?
            lightboxKeyboardNav: aamrg_vars.lightboxKeyboardNav, //Keyboard navigation of the next and prev image
            lightBoxSpeedFx: parseInt(aamrg_vars.lightBoxSpeedFx), //The speed of the lightbox effects
            lightBoxZoomAnim: aamrg_vars.lightboxZoom, //Do you want the zoom effect of the images in the lightbox?
            lightBoxText: aamrg_vars.lightBoxText, //If you wish to show the text in the lightbox
            lightboxPlayBtn: aamrg_vars.lightboxPlayBtn, //Show the play button?
            lightBoxAutoPlay: aamrg_vars.lightBoxAutoPlay, //The first time you open the lightbox it start playing the images
            lightBoxPlayInterval: parseInt(aamrg_vars.lightBoxPlayInterval), //The interval in the auto play mode 
            lightBoxShowTimer: aamrg_vars.lightBoxShowTimer, //If you wish to show the timer in auto play mode
            lightBoxStopPlayOnClose: aamrg_vars.lightBoxStopPlayOnClose, //Stop the auto play mode when you close the lightbox?
            hashTag: aamrg_vars.hashTag,
            swipeSupport: false,

            hiddenStyle: { opacity: 0, scale: 0.001 },
            visibleStyle: { opacity: 1, scale: 1 },

        });
    });

})(jQuery);
