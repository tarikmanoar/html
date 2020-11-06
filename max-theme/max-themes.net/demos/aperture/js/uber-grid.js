(function(jQuery) {
	var $;
	if (!jQuery) {
		alert("Message from UberGrid: jQuery not found!");
	} else if (parseInt(jQuery().jquery.replace(/\./g, "")) < 172) {
		alert("Message from UberGrid You have jQuery < 1.7.2. Please upgrade your jQuery or enable \"Force new jQuery version\" option at UberGrid settings page.");
	} else {
		if (!Packery) {
			alert("Message from UberGrid: Packery library is not loaded. Please contact UberGrid developer for help.");
		} else {
			$ = jQuery;
			var LightboxAdapter,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };

LightboxAdapter = (function() {
    function LightboxAdapter(grid, $el) {
        this.onPrevSlide = __bind(this.onPrevSlide, this);
        this.onNextSlide = __bind(this.onNextSlide, this);
        this.onAfterClose = __bind(this.onAfterClose, this);
        this.onKeyUp = __bind(this.onKeyUp, this);
        this.onDeeplinkOpened = __bind(this.onDeeplinkOpened, this);
        this.setHash = __bind(this.setHash, this);
        this.getSlug = __bind(this.getSlug, this);
        this.getId = __bind(this.getId, this);
        this.getLightboxImageHeight = __bind(this.getLightboxImageHeight, this);
        this.getLightboxImageWidth = __bind(this.getLightboxImageWidth, this);
        this.getLightboxImageTitle = __bind(this.getLightboxImageTitle, this);
        this.getLightboxImageCaption = __bind(this.getLightboxImageCaption, this);
        this.getLightboxImageThumbnailUrl = __bind(this.getLightboxImageThumbnailUrl, this);
        this.getLightboxImageUrl = __bind(this.getLightboxImageUrl, this);
        this.onImageClicked = __bind(this.onImageClicked, this);
        this.getLightboxLinks = __bind(this.getLightboxLinks, this);
        this.getLightboxImages = __bind(this.getLightboxImages, this);
        this.reset = __bind(this.reset, this);
        this.addImages = __bind(this.addImages, this);
        this.clickImage = __bind(this.clickImage, this);
        this.loadDeepLink = __bind(this.loadDeepLink, this);
        this.checkForDeeplink = __bind(this.checkForDeeplink, this);
        this.grid = grid;
        this.$el = $el;
        this.reset();
        this.checkForDeeplink();
    }

    LightboxAdapter.prototype.checkForDeeplink = function() {
        var gridId, image;
        if (location.hash.match(/^#\d+\-/)) {
            gridId = location.hash.replace(/^#/, '').replace(/[^\d]+.*$/, '');
            if (gridId !== this.getId()) {
                return;
            }
            image = location.hash.replace(/^.*\//, '');
            this.loadDeepLink(image);
            return delete this.prevHash;
        }
    };

    LightboxAdapter.prototype.loadDeepLink = function(image) {
        return this.clickImage(image);
    };

    LightboxAdapter.prototype.clickImage = function(image) {
        var cell, _i, _len, _ref;
        _ref = this.getLightboxLinks().closest('.uber-grid-cell');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            cell = _ref[_i];
            if (jQuery(cell).attr('data-slug') === image) {
                jQuery(cell).find('a.uber-grid-lightbox').click();
                return;
            }
        }
    };

    LightboxAdapter.prototype.addImages = function(images) {};

    LightboxAdapter.prototype.reset = function() {
        this.getLightboxLinks().off('click');
        return this.getLightboxLinks().on('click', this.onImageClicked);
    };

    LightboxAdapter.prototype.imageSelector = '.uber-grid-visible.uber-grid-cell:has(a.uber-grid-cell-wrapper.uber-grid-lightbox), .uber-grid-visible.uber-grid-cell:has(a.uber-grid-hover.uber-grid-lightbox)';

    LightboxAdapter.prototype.linkSelector = '.uber-grid-visible.uber-grid-cell a.uber-grid-cell-wrapper.uber-grid-lightbox, .uber-grid-visible.uber-grid-cell a.uber-grid-hover.uber-grid-lightbox';

    LightboxAdapter.prototype.getLightboxImages = function() {
        return this.$el.find(this.imageSelector);
    };

    LightboxAdapter.prototype.getLightboxLinks = function() {
        return this.$el.find(this.linkSelector);
    };

    LightboxAdapter.prototype.onImageClicked = function(event) {
        var cell;
        event.stopPropagation();
        event.preventDefault();
        cell = jQuery(event.target).closest('.uber-grid-cell');
        this.scrollTop = jQuery(document).scrollTop();
        return this.setHash(cell);
    };

    LightboxAdapter.prototype.getLightboxImageUrl = function(el) {
        return jQuery(el).find('a.uber-grid-cell-wrapper, a.uber-grid-hover').attr('href');
    };

    LightboxAdapter.prototype.getLightboxImageThumbnailUrl = function(el) {
        return jQuery(el).find('img.uber-grid-cell-image').attr('src');
    };

    LightboxAdapter.prototype.getLightboxImageCaption = function(el) {
        return jQuery(el).find('.uber-grid-lightbox-content div').html();
    };

    LightboxAdapter.prototype.getLightboxImageTitle = function(el) {
        return jQuery(el).find('.uber-grid-lightbox-content h3').html();
    };

    LightboxAdapter.prototype.getLightboxImageWidth = function(el) {
        return jQuery(el).find('img.uber-grid-image').data('lightbox-width');
    };

    LightboxAdapter.prototype.getLightboxImageHeight = function(el) {
        return jQuery(el).find('img.uber-grid-image').data('lightbox-width');
    };

    LightboxAdapter.prototype.getId = function() {
        return this.$el.attr('id').replace('uber-grid-', '');
    };

    LightboxAdapter.prototype.getSlug = function() {
        return this.$el.closest('.uber-grid-wrapper').attr('data-slug');
    };

    LightboxAdapter.prototype.setHash = function(cell) {
        var id, slug;
        slug = cell.attr('data-slug');
        id = this.getId();
        this.prevHash = location.hash;
        return location.hash = "" + id + "-" + (this.getSlug()) + "/" + slug;
    };

    LightboxAdapter.prototype.resetHash = function() {
        var e;
        if (this.prevHash) {
            try {
                location.hash = this.prevHash;
            } catch (_error) {
                e = _error;
            }
            delete this.prevHash;
        } else {
            location.hash = '#';
        }
        try {
            if (this.scrollTop && this.scrollTop > 0) {
                return jQuery(document).scrollTop(this.scrollTop);
            }
        } catch (_error) {}
    };

    LightboxAdapter.prototype.onDeeplinkOpened = function() {};

    LightboxAdapter.prototype.onKeyUp = function(event) {
        if (event.keyCode === 37) {
            return this.onPrevSlide();
        } else if (event.keyCode === 39) {
            return this.onNextSlide();
        } else if (event.keyCode === 27) {
            return this.onAfterClose();
        }
    };

    LightboxAdapter.prototype.onAfterClose = function() {
        jQuery(window).off('keyup', this.onKeyup);
        return this.resetHash();
    };

    LightboxAdapter.prototype.onNextSlide = function() {
        var lightboxLinks;
        this.currentIndex += 1;
        lightboxLinks = this.getLightboxLinks();
        if (this.currentIndex === lightboxLinks.length) {
            this.currentIndex = lightboxLinks.length - 1;
        }
        return this.setHash(this.getLightboxLinks().eq(this.currentIndex).closest('.uber-grid-cell'));
    };

    LightboxAdapter.prototype.onPrevSlide = function() {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
        }
        return this.setHash(this.getLightboxLinks().eq(this.currentIndex).closest('.uber-grid-cell'));
    };

    return LightboxAdapter;

})();

var FooBoxAdapter,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

FooBoxAdapter = (function(_super) {
    __extends(FooBoxAdapter, _super);

    function FooBoxAdapter(grid, $el) {
        this.reset = __bind(this.reset, this);
        if (!$el.foobox) {
            alert("Foobox is not detected!");
            return;
        }
        FooBoxAdapter.__super__.constructor.call(this, grid, $el);
        this.reset();
    }

    FooBoxAdapter.prototype.reset = function() {
        var fooboxOptions, image, images, _i, _len, _ref;
        FooBoxAdapter.__super__.reset.call(this);
        _ref = images = this.getLightboxImages();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            image = _ref[_i];
            image = jQuery(image);
            image.find('.uber-grid-hover').data({
                width: this.getLightboxImageWidth(image),
                height: this.getLightboxImageHeight(image)
            });
            image.attr('title', this.getLightboxImageCaption(image));
            image.find('img').attr('alt', this.getLightboxImageTitle(image));
        }
        fooboxOptions = {
            selector: this.imageSelector
        };
        if (window.FOOBOX.o) {
            fooboxOptions = jQuery.extend(window.FOOBOX.o, {
                deeplinking: false,
                affiliate: false,
                slideshow: {
                    enabled: true
                },
                selector: this.linkSelector
            });
        }
        return this.$el.foobox(fooboxOptions).on('foobox.afterLoad', (function(_this) {
            return function(event) {
                return _this.setHash(images.eq(event.fb.item.index).closest('.uber-grid-cell'));
            };
        })(this)).on('foobox.close', (function(_this) {
            return function() {
                return _this.resetHash();
            };
        })(this));
    };

    return FooBoxAdapter;

})(LightboxAdapter);

var iLightboxAdapter,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

iLightboxAdapter = (function(_super) {
    __extends(iLightboxAdapter, _super);

    function iLightboxAdapter(grid, $el, lightboxOptions) {
        this.onImageClicked = __bind(this.onImageClicked, this);
        if (!jQuery.iLightBox) {
            alert('iLightbox not detected. Please install end enable iLightbox plugin.');
        }
        iLightboxAdapter.__super__.constructor.call(this, grid, $el);
        this.options = lightboxOptions;
    }

    iLightboxAdapter.prototype.onImageClicked = function(event) {
        var elements, index, lightboxImages, options;
        iLightboxAdapter.__super__.onImageClicked.call(this, event);
        event.preventDefault();
        elements = this.getLightboxImages();
        lightboxImages = jQuery.map(elements, (function(_this) {
            return function(el) {
                return {
                    title: _this.getLightboxImageTitle(el),
                    url: _this.getLightboxImageUrl(el),
                    caption: _this.getLightboxImageCaption(el),
                    thumbnail: _this.getLightboxImageThumbnailUrl(el)
                };
            };
        })(this));
        this.currentIndex = index = elements.index(jQuery(event.target).closest('.uber-grid-cell'));
        options = jQuery.extend(this.options, ILIGHTBOX.options && eval("(" + rawurldecode(ILIGHTBOX.options) + ")") || {});
        return jQuery.iLightBox(lightboxImages, jQuery.extend({
            startFrom: index,
            callback: {
                onAfterChange: (function(_this) {
                    return function(instance) {
                        _this.currentIndex = instance.currentItem;
                        return _this.setHash(elements.eq(_this.currentIndex).closest('.uber-grid-cell'));
                    };
                })(this),
                onHide: (function(_this) {
                    return function() {
                        return _this.resetHash();
                    };
                })(this)
            }
        }, options));
    };

    return iLightboxAdapter;

})(LightboxAdapter);

var JetpackAdapter,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

JetpackAdapter = (function(_super) {
    __extends(JetpackAdapter, _super);

    function JetpackAdapter(grid, $el) {
        this.onPrevSlide = __bind(this.onPrevSlide, this);
        this.onNextSlide = __bind(this.onNextSlide, this);
        this.onAfterClose = __bind(this.onAfterClose, this);
        this.setHashFromCurrentIndex = __bind(this.setHashFromCurrentIndex, this);
        this.onImageClicked = __bind(this.onImageClicked, this);
        this.reset = __bind(this.reset, this);
        JetpackAdapter.__super__.constructor.call(this, grid, $el);
        this.$el.data('carousel-extra', {
            blog_id: 1,
            permalink: 'http://awesome-gallery.dev'
        });
    }

    JetpackAdapter.prototype.reset = function() {
        var image, image_id, img, link, _i, _len, _ref, _results;
        JetpackAdapter.__super__.reset.apply(this, arguments);
        _ref = this.getLightboxImages().addClass('tiled-gallery-item');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            image = _ref[_i];
            image = jQuery(image);
            img = image.find('img.uber-grid-cell-image');
            link = image.closest('.uber-grid-cell').find('a.uber-grid-hover, a.uber-grid-cell-content, a.uber-grid-lightbox');
            image_id = link.data('lightbox-image-id');
            _results.push(img.data({
                'orig-file': link.attr('href'),
                'orig-size': img.data('lightbox-width') + "," + img.data('lightbox-height'),
                'large-file': link.attr('href'),
                'medium-file': link.attr('href'),
                'small-file': link.attr('href'),
                'image-title': image.find('.uber-grid-lightbox-content h3').html(),
                'image-description': image.find('.uber-grid-lightbox-content div').html(),
                'image-meta': {},
                'attachment-id': image_id ? image_id : 'asg-hack',
                'comments-opened': image_id ? 1 : null
            }));
        }
        return _results;
    };

    JetpackAdapter.prototype.onImageClicked = function(event) {
        JetpackAdapter.__super__.onImageClicked.call(this, event);
        event.preventDefault();
        this.currentIndex = this.getLightboxImages().index(jQuery(event.target).closest('.uber-grid-cell'));
        if (this.$el.jp_carousel) {
            this.$el.jp_carousel({
                start_index: this.currentIndex,
                'items_selector': ".tiled-gallery-item img.uber-grid-cell-image"
            });
            return setTimeout(this.setHashFromCurrentIndex, 400);
        } else {
            return jQuery(document).ready((function(_this) {
                return function() {
                    return setTimeout((function() {
                        return _this.$el.jp_carousel({
                            start_index: _this.currentIndex,
                            'items_selector': ".tiled-gallery-item img.uber-grid-cell-image"
                        });
                    }), setTimeout(_this.setHashFromCurrentIndex, 600), 500);
                };
            })(this));
        }
    };

    JetpackAdapter.prototype.setHashFromCurrentIndex = function() {
        this.setHash(this.getLightboxLinks().eq(this.currentIndex).closest('.uber-grid-cell'));
        jQuery(document).on('click', '.jp-carousel-next-button', this.onNextSlide);
        jQuery(document).on('click', '.jp-carousel-previous-button', this.onPrevSlide);
        jQuery(document).on('keyup', this.onKeyUp);
        return jQuery(document).on('click', '.jp-carousel-close-hint', this.onAfterClose);
    };

    JetpackAdapter.prototype.onAfterClose = function() {
        JetpackAdapter.__super__.onAfterClose.apply(this, arguments);
        return jQuery(document).off('keyup', this.onKeyUp);
    };

    JetpackAdapter.prototype.onNextSlide = function() {
        var lightboxLinks;
        this.currentIndex += 1;
        lightboxLinks = this.getLightboxLinks();
        if (this.currentIndex === lightboxLinks.length) {
            this.currentIndex = 0;
        }
        return setTimeout(((function(_this) {
            return function() {
                return _this.setHash(_this.getLightboxLinks().eq(_this.currentIndex).closest('.uber-grid-cell'));
            };
        })(this)), 400);
    };

    JetpackAdapter.prototype.onPrevSlide = function() {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = this.getLightboxLinks().size() - 1;
        }
        return this.setHash(this.getLightboxLinks().eq(this.currentIndex).closest('.uber-grid-cell'));
    };

    return JetpackAdapter;

})(LightboxAdapter);

var MagnificPopupAdapter,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

MagnificPopupAdapter = (function(_super) {
    __extends(MagnificPopupAdapter, _super);

    function MagnificPopupAdapter(grid, $el) {
        this.onImageClicked = __bind(this.onImageClicked, this);
        MagnificPopupAdapter.__super__.constructor.call(this, grid, $el);
    }

    MagnificPopupAdapter.prototype.onImageClicked = function(event) {
        var index, items, masterPopupSettings, settings, _this;
        _this = this;
        MagnificPopupAdapter.__super__.onImageClicked.call(this, event);
        event.preventDefault();
        event.stopPropagation();
        masterPopupSettings = {
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [1, 1]
            },
            closeBtnInside: true,
            mainClass: 'mfp-fade',
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
        };
        items = this.getLightboxLinks();
        index = items.index(jQuery(event.target).closest('a.uber-grid-lightbox'));
        settings = jQuery.extend(masterPopupSettings, {
            items: jQuery.map(items, function(item) {
                var isImage, isInline;
                isImage = function() {
                    return item.attr('href').match(/(\.jpe?g|\.png|\.gif)$/i);
                };
                isInline = function() {
                    return item.attr('href').match(/^#/);
                };
                item = jQuery(item);
                settings = {
                    src: item.attr('href')
                };
                if (isInline()) {
                    settings.type = 'inline';
                    if (settings.src === '#') {
                        settings.src = jQuery(item.closest('div.uber-grid-cell').find('.uber-grid-lightbox-content-wrapper').html());
                    }
                } else if (isImage()) {
                    settings.type = 'image';
                } else {
                    settings.type = 'iframe';
                }
                settings.ubergridCell = item.closest('div.uber-grid-cell');
                return settings;
            }),
            image: {
                titleSrc: function() {
                    if (this.currItem.data.ubergridCell.find('.uber-grid-lightbox-content-wrapper').size()) {
                        return this.currItem.data.ubergridCell.find('.uber-grid-lightbox-content-wrapper').html();
                    }
                    return '';
                },
                markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<div class="mfp-uber-grid-border"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>'
            },
            callbacks: {
                open: (function() {
                    jQuery('.mfp-wrap').addClass('mfp-uber-grid');
                    return this._lastFocusedEl = null;
                }),
                markupParse: (function(template) {
                    return template.find('.mfp-counter').remove();
                }),
                afterClose: (function(_this) {
                    return function() {
                        _this.resetHash();
                        return _this.enableSetHash = false;
                    };
                })(this),
                afterChange: function() {
                    if (!UberGrid.isTouchDevice()) {
                        jQuery('.mfp-bottom-bar').addClass('uber-grid-visible').height();
                        setTimeout((function() {
                            return jQuery('.mfp-bottom-bar').removeClass('uber-grid-visible');
                        }), 1500);
                    }
                    if (_this.enableSetHash) {
                        _this.setHash(this.currItem.data.ubergridCell);
                    }
                    return _this.enableSetHash = true;
                }
            }
        });
        jQuery.magnificPopup.open(settings, index);
        return jQuery('.mfp-bottom-bar').addClass('uber-grid-visible').height();
    };

    return MagnificPopupAdapter;

})(LightboxAdapter);

var PrettyPhotoAdapter,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

PrettyPhotoAdapter = (function(_super) {
    __extends(PrettyPhotoAdapter, _super);

    function PrettyPhotoAdapter(grid, $el, lightboxOptions) {
        this.onPrevSlide = __bind(this.onPrevSlide, this);
        this.onNextSlide = __bind(this.onNextSlide, this);
        this.onImageClicked = __bind(this.onImageClicked, this);
        this.onKeyUp = __bind(this.onKeyUp, this);
        this.reset = __bind(this.reset, this);
        if (!jQuery.fn.prettyPhoto) {
            alert('PrettyPhoto is not detected. Please check if your theme loads a custom jQuery.');
            return;
        }
        this.options = lightboxOptions;
        PrettyPhotoAdapter.__super__.constructor.call(this, grid, $el);
    }

    PrettyPhotoAdapter.prototype.reset = function() {
        var cell, image, link, _i, _len, _ref, _results;
        PrettyPhotoAdapter.__super__.reset.apply(this, arguments);
        this.getLightboxLinks().prettyPhoto({
            hook: 'data-lightbox',
            deeplinking: false
        });
        jQuery(document).bind('keydown.prettyphoto', this.onKeyUp);
        _ref = this.getLightboxLinks();
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            link = _ref[_i];
            link = jQuery(link);
            cell = link.closest('.uber-grid-cell');
            image = cell.find('img.uber-grid-cell-image');
            if (link.is('.uber-grid-hover')) {
                image = image.clone().css('display', 'none');
                link.append(image);
            }
            _results.push(image.attr('alt', cell.find('.uber-grid-lightbox-content h3').html()).attr('title', cell.find('.uber-grid-lightbox-content div').html()));
        }
        return _results;
    };

    PrettyPhotoAdapter.prototype.onKeyUp = function(event) {
        if (event.keyCode === 37) {
            return this.onPrevSlide();
        } else if (event.keyCode === 39) {
            return this.onNextSlide();
        } else if (event.keyCode === 27) {
            return this.resetHash();
        }
    };

    PrettyPhotoAdapter.prototype.onImageClicked = function(event) {
        this.currentIndex = this.getLightboxLinks().index(jQuery(event.target));
        jQuery(window).on('click', '.pp_previous', this.onPrevSlide);
        jQuery(window).on('click', '.pp_next', this.onNextSlide);
        return PrettyPhotoAdapter.__super__.onImageClicked.call(this, event);
    };

    PrettyPhotoAdapter.prototype.onNextSlide = function() {
        var lightboxLinks;
        this.currentIndex += 1;
        lightboxLinks = this.getLightboxLinks();
        if (this.currentIndex === lightboxLinks.length) {
            this.currentIndex = lightboxLinks.length - 1;
        }
        return this.setHash(this.getLightboxLinks().eq(this.currentIndex).closest('.uber-grid-cell'));
    };

    PrettyPhotoAdapter.prototype.onPrevSlide = function() {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
        }
        return this.setHash(this.getLightboxLinks().eq(this.currentIndex).closest('.uber-grid-cell'));
    };

    return PrettyPhotoAdapter;

})(LightboxAdapter);

var SwipeboxAdapter,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

SwipeboxAdapter = (function(_super) {
    __extends(SwipeboxAdapter, _super);

    function SwipeboxAdapter(grid, $el) {
        this.onImageClicked = __bind(this.onImageClicked, this);
        SwipeboxAdapter.__super__.constructor.call(this, grid, $el);
    }

    SwipeboxAdapter.prototype.onImageClicked = function(event) {
        var elements, lightboxImages;
        SwipeboxAdapter.__super__.onImageClicked.call(this, event);
        event.preventDefault();
        lightboxImages = jQuery.map(elements = this.getLightboxImages(), (function(_this) {
            return function(image) {
                image = jQuery(image);
                return {
                    href: image.find('a.uber-grid-cell-wrapper, a.uber-grid-hover').attr('href'),
                    title: function() {
                        return image.find('.uber-grid-lightbox-content').html();
                    }
                };
            };
        })(this));
        this.currentIndex = elements.index(jQuery(event.target).closest('.uber-grid-cell'));
        jQuery.swipebox(lightboxImages, {
            initialIndexOnArray: this.currentIndex,
            afterClose: this.onAfterClose
        });
        jQuery('#swipebox-next').click(this.onNextSlide);
        jQuery('#swipebox-prev').click(this.onPrevSlide);
        return jQuery(window).on('keyup', this.onKeyUp);
    };

    return SwipeboxAdapter;

})(LightboxAdapter);

var UberboxAdapter,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

UberboxAdapter = (function(_super) {
    __extends(UberboxAdapter, _super);

    function UberboxAdapter() {
        return UberboxAdapter.__super__.constructor.apply(this, arguments);
    }

    UberboxAdapter.prototype.onImageClicked = function(e) {
        var box, hasThumbnails, havingThumbnails, index, items;
        UberboxAdapter.__super__.onImageClicked.call(this, e);
        items = this.getLightboxLinks();
        index = items.index(jQuery(e.target).closest('a.uber-grid-lightbox'));
        havingThumbnails = _.filter(this.getItems(), (function(_this) {
            return function(item) {
                return !!item.thumbnail;
            };
        })(this));
        hasThumbnails = havingThumbnails.length > items.length / 2;
        box = Uberbox.show(this.getItems(), {
            orientation: 'horizontal',
            current: index,
            carousel: true
        });
        return box.on('close', (function(_this) {
            return function() {
                box.off('close');
                return _this.resetHash();
            };
        })(this));
    };

    UberboxAdapter.prototype.getItems = function() {
        var items, thumbnailCount;
        items = this.grid.cells.filter(function(cell) {
            return cell.$el.find('>a, a.uber-grid-hover').hasClass('uber-grid-lightbox') && cell.$el.hasClass('uber-grid-visible');
        });
        thumbnailCount = 0;
        items = items.map((function(_this) {
            return function(cell) {
                var config, id, url;
                config = {
                    url: cell.model.get('image_url'),
                    thumbnail: cell.model.get('thumbnail_url'),
                    title: cell.model.get('title'),
                    description: cell.model.get('description'),
                    description_style: cell.model.get('description_style'),
                    download_url: cell.model.get('download_url'),
                    share: true
                };
                url = cell.model.get('image_url');
                if (id = cell.model.get('grid_id')) {
                    config.type = "ajax";
                    config.url = "" + _this.grid.options.ajaxurl + "?action=uber_grid_render_grid&id=" + id;
                    config.ajax = true;
                    delete config.title;
                    delete config.description;
                    config.description_style = 'none';
                } else {
                    if (cell.$el.find('.uber-grid-cell-content').data('iframe')) {
                        config.type = "iframe";
                        config.url = url;
                        delete config.title;
                        delete config.description;
                        config.description_style = 'none';
                    }
                }
                return config;
            };
        })(this));
        return items;
    };

    return UberboxAdapter;

})(LightboxAdapter);

var CellCollection, CellModel, UberGridModel,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    },
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };

CellModel = (function(_super) {
    __extends(CellModel, _super);

    function CellModel() {
        return CellModel.__super__.constructor.apply(this, arguments);
    }

    CellModel.prototype.defaults = {
        visible: true
    };

    CellModel.prototype.matchesFilter = function(filter) {
        return (_.indexOf(this.get('tags'), filter.toLowerCase())) !== -1;
    };

    CellModel.prototype.show = function() {
        this.set('visible', true);
        return this.trigger('show');
    };

    CellModel.prototype.hide = function() {
        this.set('visible', false);
        return this.trigger('hide');
    };

    return CellModel;

})(Backbone.Model);

CellCollection = (function(_super) {
    __extends(CellCollection, _super);

    function CellCollection() {
        return CellCollection.__super__.constructor.apply(this, arguments);
    }

    return CellCollection;

})(Backbone.Collection);

UberGridModel = (function(_super) {
    __extends(UberGridModel, _super);

    function UberGridModel() {
        this.onCellsChanged = __bind(this.onCellsChanged, this);
        this.onFilterChanged = __bind(this.onFilterChanged, this);
        this.applyFiltering = __bind(this.applyFiltering, this);
        return UberGridModel.__super__.constructor.apply(this, arguments);
    }

    UberGridModel.prototype.defaults = {
        page: 1
    };

    UberGridModel.prototype.initialize = function() {
        this.set('cells', new CellCollection());
        this.set('all_cells', new CellCollection());
        this.on('change:filter', this.onFilterChanged);
        this.on('change:page', this.applyFiltering);
        this.on('change:cells', this.onCellsChanged);
        return this.on('change:all_cells', (function(_this) {
            return function() {
                return _this.onFilterChanged();
            };
        })(this));
    };

    UberGridModel.prototype.applyFiltering = function() {
        var cells, pagination;
        cells = this.get('all_cells');
        cells = this.getFilteredCells();
        pagination = this.get('pagination');
        if (pagination.enable && cells.length > pagination.per_page) {
            if (pagination.style === 'pagination') {
                cells = cells.slice(pagination.per_page * (this.get('page') - 1), pagination.per_page * this.get('page'));
            } else {
                if (pagination.per_page * this.get('page') >= cells.length) {
                    this.trigger('end');
                }
                cells = cells.slice(0, pagination.per_page * this.get('page'));
            }
        }
        return this.set('cells', cells);
    };

    UberGridModel.prototype.getFilteredCells = function() {
        return _.filter(this.get('all_cells'), (function(_this) {
            return function(cell) {
                var filter;
                filter = _this.get('filter');
                if (!filter || filter === "") {
                    return true;
                }
                return cell.matchesFilter(filter);
            };
        })(this));
    };

    UberGridModel.prototype.loadMore = function() {
        return this.set('page', this.get('page') + 1);
    };

    UberGridModel.prototype.calculatePages = function() {
        return this.set('pages', Math.ceil(this.getFilteredCells().length / this.get('pagination').per_page));
    };

    UberGridModel.prototype.onFilterChanged = function() {
        this.calculatePages();
        this.set('page', 1);
        return this.applyFiltering();
    };

    UberGridModel.prototype.onCellsChanged = function() {
        var cell, oldCells, toHide, toShow, _i, _j, _len, _len1, _results;
        oldCells = this.previous('cells');
        if (oldCells) {
            toShow = _.difference(this.get('cells'), oldCells);
            toHide = _.difference(oldCells, this.get('cells'));
        } else {
            toShow = this.get('cells');
            toHide = [];
        }
        for (_i = 0, _len = toShow.length; _i < _len; _i++) {
            cell = toShow[_i];
            cell.show();
        }
        _results = [];
        for (_j = 0, _len1 = toHide.length; _j < _len1; _j++) {
            cell = toHide[_j];
            _results.push(cell.hide());
        }
        return _results;
    };

    return UberGridModel;

})(Backbone.Model);

var UberGridCell,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

UberGridCell = (function(_super) {
    __extends(UberGridCell, _super);

    function UberGridCell() {
        this.onLinkClicked = __bind(this.onLinkClicked, this);
        return UberGridCell.__super__.constructor.apply(this, arguments);
    }

    UberGridCell.prototype.events = {
        'click a.uber-grid-hover, a.uber-grid-cell-wrapper': 'onLinkClicked'
    };

    UberGridCell.prototype.initialize = function(el) {
        this.$el.data('uber-grid-cell', this);
        this.model.set(this.readAttributes());
        this.listenTo(this.model, 'show', (function(_this) {
            return function() {
                return _this.show();
            };
        })(this));
        this.listenTo(this.model, 'hide', (function(_this) {
            return function() {
                return _this.hide();
            };
        })(this));
        if (this.model.get('has_hover')) {
            this.$el.mouseleave((function(_this) {
                return function() {
                    return _this.$el.removeClass('uber-grid-hover-active');
                };
            })(this));
        }
        if (window.devicePixelRatio !== undefined && window.devicePixelRatio > 1 && this.$el.not(".uber-grid-photon")) {
            return this.$el.find(".uber-grid-cell-image").each(function(index, image) {
                var src2x;
                src2x = jQuery(image).attr("src") + "&zoom=" + window.devicePixelRatio;
                return jQuery(image).attr("src", src2x).attr('data-at2x', src2x);
            });
        }
    };

    UberGridCell.prototype.readAttributes = function() {
        var attr;
        return attr = {
            description: this.$('.uber-grid-lightbox-content-wrapper').html(),
            description_style: this.getDescriptionStyle(),
            has_hover: this.$('.uber-grid-hover').size > 0,
            has_link: this.$('a.uber-grid-hover, a.uber-grid-cell-wrapper').size() > 0,
            thumbnail_url: this.getThumbnailUrl(),
            image_url: this.$('a.uber-grid-cell-wrapper, a.uber-grid-hover').attr('href'),
            download_url: this.getDownloadUrl(),
            title: this.$('.uber-grid-lightbox-content-wrapper h3.uber-grid-lightbox-title').html(),
            tags: this.getTags(),
            grid_id: this.getGridId()
        };
    };

    UberGridCell.prototype.getTags = function() {
        var tags;
        tags = this.$el.attr('data-tags');
        if (!tags) {
            return [];
        }
        return _.compact(tags.split(',')).map((function(_this) {
            return function(tag) {
                return tag.trim().toLowerCase();
            };
        })(this));
    };

    UberGridCell.prototype.onLinkClicked = function(event) {
        if (!UberGrid.isTouchDevice()) {
            return;
        }
        if (!this.$el.closest('.uber-grid').hasClass('uber-grid-mobile-hover')) {
            return;
        }
        if (this.$el.hasClass('uber-grid-hover-active')) {
            return;
        }
        this.$el.addClass('uber-grid-hover-active');
        event.preventDefault();
        return event.stopPropagation();
    };

    UberGridCell.prototype.show = function() {
        return this.$el.addClass('uber-grid-visible');
    };

    UberGridCell.prototype.hide = function() {
        return this.$el.removeClass('uber-grid-visible');
    };

    UberGridCell.prototype.getGridId = function() {
        return this.$('.uber-grid-cell-content').attr('data-lightbox-grid-id');
    };

    UberGridCell.prototype.getThumbnailUrl = function() {
        var image;
        image = this.$('.uber-grid-cell-image');
        if (image.length > 0) {
            return image.attr('src');
        }
        return this.$('.uber-grid-cell-content').attr('data-lightbox-thumbnail');
    };

    UberGridCell.prototype.getImageUrl = function() {
        return this.$('a.uber-grid-cell-wrapper, a.uber-grid-hover').attr('href');
    };

    UberGridCell.prototype.getDownloadUrl = function() {
        return this.$('.uber-grid-cell-content').attr('data-lightbox-download-url');
    };

    UberGridCell.prototype.getDescriptionStyle = function() {
        var style;
        if (style = this.$('.uber-grid-lightbox-content-wrapper').attr('data-style')) {
            return style;
        }
        return void 0;
    };

    return UberGridCell;

})(Backbone.View);

var UberGridFilters,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

UberGridFilters = (function(_super) {
    __extends(UberGridFilters, _super);

    function UberGridFilters() {
        this.onFilterClicked = __bind(this.onFilterClicked, this);
        return UberGridFilters.__super__.constructor.apply(this, arguments);
    }

    UberGridFilters.prototype.events = {
        "click > div a": 'onFilterClicked'
    };

    UberGridFilters.prototype.initialize = function() {
        UberGridFilters.__super__.initialize.apply(this, arguments);
        this.listenTo(this.model, 'change:filter', this.onFilterChanged);
        return this.activateFirst();
    };

    UberGridFilters.prototype.activateFirst = function() {
        return this.$("> div:first-child").addClass("active");
    };

    UberGridFilters.prototype.deactivateAll = function() {
        return this.$("> div").removeClass("active");
    };

    UberGridFilters.prototype.getFilters = function() {
        return _.map(this.$('a'), (function(link) {
            return jQuery(link).attr('href').replace(/^#/, '').toLowerCase();
        }));
    };

    UberGridFilters.prototype.onFilterChanged = function() {
        var attr, link, _i, _len, _ref, _results;
        this.deactivateAll();
        _ref = this.$('a');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            link = _ref[_i];
            attr = jQuery(link).attr('href').toLowerCase();
            if (attr === "#" + this.model.get('filter').toLowerCase()) {
                _results.push(jQuery(link).parent().addClass('active'));
            } else {
                _results.push(void 0);
            }
        }
        return _results;
    };

    UberGridFilters.prototype.onFilterClicked = function(event) {
        var a, tag;
        event.preventDefault();
        a = jQuery(event.target);
        this.deactivateAll();
        a.parent().addClass("active");
        tag = a.attr("href").replace(/^#/, "");
        return this.model.set('filter', tag);
    };

    return UberGridFilters;

})(Backbone.View);

var UberGridPagination,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

UberGridPagination = (function(_super) {
    __extends(UberGridPagination, _super);

    function UberGridPagination() {
        this.onPageClicked = __bind(this.onPageClicked, this);
        this.onLoadMoreClicked = __bind(this.onLoadMoreClicked, this);
        this.onModelEnd = __bind(this.onModelEnd, this);
        this.render = __bind(this.render, this);
        return UberGridPagination.__super__.constructor.apply(this, arguments);
    }

    UberGridPagination.prototype.events = {
        'click .uber-grid-pagination-page:not(.uber-grid-current)': 'onPageClicked',
        'click .uber-grid-load-more': 'onLoadMoreClicked'
    };

    UberGridPagination.prototype.initialize = function(options) {
        UberGridPagination.__super__.initialize.apply(this, arguments);
        this.options = options;
        this.model.on('change:pages', this.render);
        this.listenTo(this.model, 'end', this.onModelEnd);
        return this.activateFirst();
    };

    UberGridPagination.prototype.render = function() {
        if (this.options.style === 'pagination') {
            return this.renderPagination();
        } else {
            return this.renderLoadMore();
        }
    };

    UberGridPagination.prototype.onModelEnd = function() {
        return this.$el.hide();
    };

    UberGridPagination.prototype.renderLoadMore = function() {
        if (this.model.get('pages') < 2) {
            return this.$el.hide();
        } else {
            this.$el.show();
            return this.$el.html(jQuery('<div />').append(jQuery('<a class="uber-grid-load-more" href="#load-more"></a>').text(this.options.load_more)));
        }
    };

    UberGridPagination.prototype.renderPagination = function() {
        var a, i, _i, _ref;
        console.info(this.$el);
        this.$('.uber-grid-pagination-page').remove();
        if (this.model.get('pages') < 2) {
            return this.$el.hide();
        } else {
            for (i = _i = 1, _ref = this.model.get('pages'); 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
                a = jQuery("<a />").attr('href', '#ubergrid-page-' + i).text(i);
                this.$el.append(jQuery('<div class="uber-grid-pagination-page" />').append(a));
            }
            this.activateFirst();
            return this.$el.show();
        }
    };

    UberGridPagination.prototype.activateFirst = function() {
        return this.$('.uber-grid-pagination-page').eq(0).addClass('uber-grid-current');
    };

    UberGridPagination.prototype.deactivateAll = function() {
        return this.$('.uber-grid-pagination-page').removeClass('uber-grid-current');
    };

    UberGridPagination.prototype.onLoadMoreClicked = function(e) {
        e.preventDefault();
        return this.model.loadMore();
    };

    UberGridPagination.prototype.onPageClicked = function(e) {
        var page;
        e.preventDefault();
        page = parseInt(jQuery(e.target).attr('href').replace('#ubergrid-page-', ''));
        this.deactivateAll();
        jQuery(e.target).parent().addClass('uber-grid-current');
        return this.model.set('page', parseInt(page));
    };

    return UberGridPagination;

})(Backbone.View);

var UberGrid, UberGridGrid,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    },
    __indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
            if (i in this && this[i] === item) return i;
        }
        return -1;
    };

UberGrid = (function(_super) {
    __extends(UberGrid, _super);

    function UberGrid() {
        this.initLightbox = __bind(this.initLightbox, this);
        return UberGrid.__super__.constructor.apply(this, arguments);
    }

    UberGrid.isTouchDevice = function() {
        var ua;
        ua = navigator.userAgent;
        return !!(__indexOf.call(document, 'createTouch') >= 0 || screen.width <= 699 || ua.match(/(iPhone|iPod|iPad)/) || ua.match(/BlackBerry/) || ua.match(/Android/));
    };

    UberGrid.prototype.getId = function() {
        return this.$el.attr("id").replace("uber-grid-wrapper-", "");
    };

    UberGrid.prototype.initialize = function(options) {
        var triggered, _ref;
        UberGrid.__super__.initialize.apply(this, arguments);
        this.options = options;
        this.model = new UberGridModel({
            id: this.getId(),
            pagination: this.options.pagination
        });
        this.ui = {
            pagination: this.$(".uber-grid-pagination"),
            grid: this.$('.uber-grid'),
            filters: this.$('.uber-grid-filters')
        };
        this.cells = this.buildCells();
        this.grid = new UberGridGrid(_.extend(this.options, {
            el: this.ui.grid,
            model: this.model,
            cells: this.cells
        }));
        this.filters = new UberGridFilters(_.extend(this.options, {
            el: this.ui.filters,
            model: this.model
        }));
        triggered = false;
        if (this.options.pagination.enable) {
            this.model.set({
                per_page: this.options.per_page
            });
            this.pagination = new UberGridPagination(_.extend(this.options.pagination, {
                el: this.ui.pagination,
                model: this.model
            }));
        }
        if (this.options.default_filter) {
            this.model.set({
                filter: this.options.default_filter
            });
        }
        if (_ref = window.location.hash.replace(/^#/, '').toLowerCase(), __indexOf.call(this.filters.getFilters(), _ref) >= 0) {
            this.model.set({
                filter: window.location.hash.replace(/^#/, '').toLowerCase()
            });
        }
        this.model.set('all_cells', _.pluck(this.cells, 'model'));
        this.grid.reveal();
        this.initLightbox();
        return this.model.on('change:cells', (function(_this) {
            return function() {
                if (_this.lightboxAdapter) {
                    return _this.lightboxAdapter.reset();
                }
            };
        })(this));
    };

    UberGrid.prototype.getCellElements = function() {
        return this.ui.grid.find(">div");
    };

    UberGrid.prototype.buildCells = function() {
        var cells;
        cells = [];
        this.getCellElements().each((function(_this) {
            return function(index, el) {
                return cells.push(new UberGridCell({
                    el: jQuery(el),
                    model: new CellModel
                }));
            };
        })(this));
        return cells;
    };

    UberGrid.prototype.initLightbox = function() {
        var $grid, lightbox_options;
        lightbox_options = this.options.lightbox.lightbox_options;
        $grid = this.grid.$el;
        this.lightboxAdapter = (function() {
            switch (this.options.lightbox) {
                case 'uberbox':
                    return new UberboxAdapter(this, $grid, lightbox_options);
                case 'magnific-popup':
                    return new MagnificPopupAdapter(this, $grid, lightbox_options);
                case 'swipebox':
                    return new SwipeboxAdapter(this, $grid, lightbox_options);
                case 'prettyphoto':
                    return new PrettyPhotoAdapter(this, $grid, lightbox_options);
                case 'ilightbox':
                    return new iLightboxAdapter(this, $grid, lightbox_options);
                case 'jetpack':
                    return new JetpackAdapter(this, $grid, lightbox_options);
                case 'foobox':
                    return new FooBoxAdapter(this, $grid, lightbox_options);
                default:
                    return null;
            }
        }).call(this);
        if (this.lightboxAdapter) {
            this.lightboxAdapter.reset();
        }
    };

    return UberGrid;

})(Backbone.View);

UberGridGrid = (function(_super) {
    __extends(UberGridGrid, _super);

    function UberGridGrid() {
        this.updateLayout = __bind(this.updateLayout, this);
        this.shouldBeShown = __bind(this.shouldBeShown, this);
        this.reveal = __bind(this.reveal, this);
        this.onCellsChanged = __bind(this.onCellsChanged, this);
        return UberGridGrid.__super__.constructor.apply(this, arguments);
    }

    UberGridGrid.prototype.initialize = function(options) {
        this.options = options;
        this.cellMapping = {};
        this.cells = options.cells;
        this.createMapping();
        jQuery(window).on('resize', _.debounce(this.updateLayout));
        return this.model.on('change:cells', this.onCellsChanged);
    };

    UberGridGrid.prototype.createMapping = function() {
        var cell, _i, _len, _ref, _results;
        _ref = this.cells;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            cell = _ref[_i];
            _results.push(this.cellMapping[cell.model.cid] = cell);
        }
        return _results;
    };

    UberGridGrid.prototype.onCellsChanged = function() {
        if (!this.packery) {
            this.packery = new Packery(this.$el[0], {
                transitionDuration: "0",
                gutter: parseInt(this.options.gutter),
                itemSelector: '.uber-grid-cell.uber-grid-visible'
            });
        } else {
            this.packery.reloadItems();
        }
        return this.updateLayout();
    };

    UberGridGrid.prototype.reveal = function() {
        if (!this.shouldBeShown()) {
            return setTimeout(this.reveal, 500);
        } else {
            this.model.applyFiltering();
            this.updateLayout();
            return setTimeout(((function(_this) {
                return function() {
                    _this.model.applyFiltering();
                    return _this.updateLayout();
                };
            })(this)), 400);
        }
    };

    UberGridGrid.prototype.shouldBeShown = function() {
        return this.$el.is(':visible') && this.$el.width() > 50;
    };

    UberGridGrid.prototype.updateLayout = function() {
        var baseCellWidth, border, calculatedCellHeight, cellHeight, cellWidth, columns, columnsOption, doubleCellHeight, doubleCellWidth, gutter, maxWidth, options, title, titleHeight, width, _i, _len, _ref;
        if (!this.shouldBeShown()) {
            return;
        }
        options = this.options;
        width = void 0;
        cellWidth = void 0;
        cellHeight = void 0;
        gutter = void 0;
        border = void 0;
        maxWidth = parseInt(this.options.max_width);
        width = jQuery(window).width();
        if (width > 768) {
            cellWidth = options.size.width;
            cellHeight = options.size.height;
            gutter = options.gutter;
            border = options.cell_border;
            columnsOption = options.columns;
        } else if (width > 440) {
            cellWidth = options.size768.width;
            cellHeight = options.size768.height;
            gutter = options.gutter_768;
            border = options.cell_border_768;
            columnsOption = options.columns_768;
        } else {
            cellWidth = options.size440.width;
            cellHeight = options.size440.height;
            gutter = options.gutter_440;
            border = options.cell_border_440;
            columnsOption = options.columns_440;
        }
        width = this.$el.parent().width();
        if (!isNaN(maxWidth) && maxWidth > 0 && width > maxWidth) {
            width = maxWidth;
        }
        baseCellWidth = cellWidth = parseInt(cellWidth);
        gutter = parseInt(gutter);
        border = parseInt(border);
        if (isNaN(gutter)) {
            gutter = 0;
        }
        if (isNaN(border)) {
            border = 0;
        }
        if (this.options.autosize && this.options.autosize !== "0") {
            if (!columnsOption) {
                columns = Math.ceil((width + gutter) / (cellWidth + gutter + 2 * border));
                if (columns > 2 && columns % 2 === 1 && this.$(".r1c2, .r2c2").size() > 0 && this.$(".r1c1, .r2c1").size() === 0) {
                    columns += 1;
                }
                if (columns > this.$(".r1c2, .r2c2").size() * 2 + this.$(".r1c1, .r2c1").size()) {
                    columns = this.$(".r1c2, .r2c2").size() * 2 + this.$(".r1c1, .r2c1").size();
                }
            } else {
                columns = parseInt(columnsOption);
            }
            cellWidth = Math.floor((width + gutter) / columns) - gutter - border * 2.0;
            if (cellWidth > baseCellWidth && !columnsOption) {
                cellWidth = baseCellWidth;
            }
            if (columns === 2 && cellWidth * 2 + border * 2 + gutter > width) {
                cellWidth = (width - gutter + border * 2) / 2;
            }
            calculatedCellHeight = Math.floor(cellHeight * cellWidth / baseCellWidth);
            doubleCellWidth = cellWidth * 2 + gutter + border * 2;
            doubleCellHeight = cellHeight * cellWidth / baseCellWidth * 2 + gutter + border * 2;
            this.$(".uber-grid-cells-wrapper").width(width);
            this.$(".uber-grid-cell.r1c1, .uber-grid-cell.r1c1 .uber-grid-cell-wrapper").width(cellWidth);
            this.$(".uber-grid-cell.r1c1 .uber-grid-cell-wrapper").height(calculatedCellHeight);
            this.$(".uber-grid-cell.r1c2, .uber-grid-cell.r1c2 .uber-grid-cell-wrapper").width(doubleCellWidth);
            this.$(".uber-grid-cell.r1c2 .uber-grid-cell-wrapper").height(calculatedCellHeight);
            this.$(".uber-grid-cell.r2c1, .uber-grid-cell.r2c1 .uber-grid-cell-wrapper").width(cellWidth);
            this.$(".uber-grid-cell.r2c1 .uber-grid-cell-wrapper").height(doubleCellHeight);
            this.$(".uber-grid-cell.r2c2, .uber-grid-cell.r2c2 .uber-grid-cell-wrapper").width(doubleCellWidth);
            this.$(".uber-grid-cell.r2c2 .uber-grid-cell-wrapper").height(doubleCellHeight);
            _ref = this.$('.uber-grid-cell-title-wrapper.uber-grid-title-position-center');
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                title = _ref[_i];
                titleHeight = jQuery(title).find('.uber-grid-cell-title').height() / 2;
                jQuery(title).find('.uber-grid-cell-title').css('margin-top', "-" + titleHeight.toString() + "px");
            }
            this.packery.columnWidth = cellWidth;
            this.$el.width(width);
        } else {
            if (!columnsOption) {
                columns = Math.floor((width + gutter) / (cellWidth + gutter + 2 * border));
                if (columns > 4 && columns % 2 === 1 && this.$(".r1c2, .r2c2").size() > 0 && this.$(".r1c1, .r2c1").size() === 0) {
                    columns -= 1;
                }
                if (columns > this.$(".r1c2, .r2c2").size() * 2 + this.$(".r1c1, .r2c1").size()) {
                    columns = this.$(".r1c2, .r2c2").size() * 2 + this.$(".r1c1, .r2c1").size();
                }
            } else {
                columns = parseInt(columnsOption);
            }
            width = columns * (cellWidth + border * 2) + (columns - 1) * gutter;
            this.$el.width(width);
        }
        this.packery.gutter = this.packery.options.gutter = gutter;
        return this.packery.layout();
    };

    return UberGridGrid;

})(Backbone.View);

			window.UberGrid = UberGrid;
		}
	}
})(window.uberGridjQuery || window.jQuery || window.$ || jQuery || $);
