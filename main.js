(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dragonkingvv\Desktop\Ongoing\KY-anime-list\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_anime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/anime.service */ "UX7N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _component_anime_window_anime_window_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/anime-window/anime-window.component */ "GNOd");








function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "More Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.fateAnime.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.fateAnime.synopsis);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "anime/", ctx_r0.fateAnime.mal_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.infoIcon);
} }
function HomeComponent_carousel_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-anime-window", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("anime", anime_r8);
} }
function HomeComponent_carousel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "carousel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_carousel_8_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 280)("margin", 27)("freeScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.todayReleaseAnimes);
} }
function HomeComponent_carousel_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-anime-window", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("anime", anime_r10);
} }
function HomeComponent_carousel_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "carousel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_carousel_14_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 280)("margin", 27)("freeScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.nowAiringAnimes.results);
} }
function HomeComponent_carousel_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-anime-window", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("anime", anime_r12);
} }
function HomeComponent_carousel_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "carousel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_carousel_18_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 280)("margin", 27)("freeScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.announcedAnimes);
} }
function HomeComponent_carousel_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-anime-window", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("anime", anime_r14);
} }
function HomeComponent_carousel_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "carousel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_carousel_24_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 280)("margin", 27)("freeScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.completedAnimes.results);
} }
function HomeComponent_carousel_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-anime-window", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("anime", anime_r16);
} }
function HomeComponent_carousel_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "carousel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_carousel_30_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 280)("margin", 27)("freeScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.topAnimes.results);
} }
function HomeComponent_carousel_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-anime-window", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("anime", anime_r18);
} }
function HomeComponent_carousel_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "carousel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_carousel_36_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 280)("margin", 27)("freeScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.upcomingAnimes.results);
} }
class HomeComponent {
    constructor(animeService, router) {
        this.animeService = animeService;
        this.router = router;
        this.daysName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        this.fatesId = [356, 22297, 25537, 11741];
        this.infoIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faInfoCircle"];
    }
    redirect(pagename, queryParam) {
        this.router.navigate(['/' + pagename], { queryParams: queryParam });
    }
    ngOnInit() {
        this.animeService.getTodayAnime().subscribe(data => {
            this.todayReleaseAnimes = data[this.daysName[new Date().getDay()]];
        });
        this.animeService.getAnimeInfo(this.fatesId[Math.floor(Math.random() * this.fatesId.length)]).subscribe(data => {
            // console.log(data)
            this.fateAnime = data;
        });
        this.animeService.getAnimeList({ q: "", sort: "desc", status: "airing", order_by: "score", genre: 12, genre_exclude: "0" }).subscribe(data => {
            this.nowAiringAnimes = data;
        });
        this.animeService.getAnimeList({ q: "", sort: "desc", status: "completed", order_by: "score", genre: 12, genre_exclude: "0" }).subscribe(data => {
            this.completedAnimes = data;
        });
        this.animeService.getAnimeList({ q: "", sort: "desc", order_by: "score", genre: 12, genre_exclude: "0" }).subscribe(data => {
            this.topAnimes = data;
        });
        this.animeService.getAnimeList({ q: "", sort: "desc", status: "tba", order_by: "score", genre: 12, genre_exclude: "0" }).subscribe(data => {
            this.upcomingAnimes = data;
        });
        this.animeService.getNextSeasonAnime().subscribe(data => {
            this.announcedAnimes = data.anime;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_anime_service__WEBPACK_IMPORTED_MODULE_2__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 37, vars: 7, consts: [[1, "jumbotron"], [1, "overlay"], [1, "background"], ["class", "text-content", 4, "ngIf"], [2, "padding", "0 5%"], [1, "heading", "flex-justify-between", "flex-align-flex-end"], [3, "height", "margin", "freeScroll", 4, "ngIf"], ["href", "search?status=airing&order_by=score&sort=desc"], ["href", "search?status=completed&order_by=score&sort=desc"], ["href", "search?order_by=score&sort=desc"], ["href", "search?status=upcoming&order_by=score&sort=desc"], [1, "text-content"], [1, "title"], [1, "synopsis"], [3, "href"], [1, "flex-center"], [1, "margin-5px", 3, "icon"], [3, "height", "margin", "freeScroll"], ["class", "carousel-cell", 4, "ngFor", "ngForOf"], [1, "carousel-cell"], [3, "anime"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Today Releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_carousel_8_Template, 2, 4, "carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Airing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "view more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomeComponent_carousel_14_Template, 2, 4, "carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Announced");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomeComponent_carousel_18_Template, 2, 4, "carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "view more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HomeComponent_carousel_24_Template, 2, 4, "carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "view more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HomeComponent_carousel_30_Template, 2, 4, "carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Upcoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "view more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, HomeComponent_carousel_36_Template, 2, 4, "carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fateAnime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todayReleaseAnimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nowAiringAnimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.announcedAnimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.completedAnimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.topAnimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.upcomingAnimes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _component_anime_window_anime_window_component__WEBPACK_IMPORTED_MODULE_7__["AnimeWindowComponent"]], styles: [".page[_ngcontent-%COMP%]{\r\n  background-color: #050511;\r\n  padding-bottom: 20px;\r\n  \r\n}\r\n\r\n.carousel-container[_ngcontent-%COMP%]{\r\n  overflow: visible !important;\r\n  background-color: red !important;\r\n}\r\n\r\n.carousel-cell[_ngcontent-%COMP%]{\r\n  overflow: visible !important;\r\n  z-index: -1;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]{\r\n  height: 800px;\r\n  position: relative;\r\n  background-size: cover;\r\n  width: 100%;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-image: url('jumbotron.png');\r\n  background-position: center;\r\n  \r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  background-image: linear-gradient(40deg, #050511 25%,  rgb(184, 217, 241, 0.1));\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  color: #b8d9f1;\r\n  top: 200px;\r\n  left: 50px;\r\n  max-width: 30vw;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  font-size: 2em;\r\n  font-weight: bolder;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.synopsis[_ngcontent-%COMP%]{\r\n  font-size: 1.5em;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 10;\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  padding: 2px 5px;\r\n  color: #b8d9f1;\r\n  border: 1px solid #b8d9f1;\r\n  background: transparent;\r\n  cursor: pointer;\r\n  font-weight: bolder;\r\n}\r\n\r\n.text-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  height: 50px;\r\n  width: 150px;\r\n  font-size: 1.2em;\r\n  transition: 0.5s all;\r\n  border-top-right-radius: 30px;\r\n  border-bottom-left-radius: 30px;\r\n  outline: none;\r\n}\r\n\r\n.text-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n  background-color: #b8d9f1;\r\n  color: black;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n  color: #b8d9f1;\r\n  font-size: 2em;\r\n  font-weight: bolder;\r\n  margin: 15px 0px 5px 0px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #b8d9f1;\r\n  font-size: 0.5em;\r\n  transition: 0.5s all;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: #58b7fa;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNDQUFzRDtFQUN0RCwyQkFBMkI7RUFDM0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsK0VBQStFO0FBQ2pGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MTE7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgKi9cclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRhaW5lcntcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2VsbHtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5cclxuLmp1bWJvdHJvbntcclxuICBoZWlnaHQ6IDgwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uanVtYm90cm9uIC5iYWNrZ3JvdW5ke1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2p1bWJvdHJvbi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLyogYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgKi9cclxufVxyXG5cclxuLmp1bWJvdHJvbiAub3ZlcmxheXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzA1MDUxMSAyNSUsICByZ2IoMTg0LCAyMTcsIDI0MSwgMC4xKSk7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24gLnRleHQtY29udGVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICNiOGQ5ZjE7XHJcbiAgdG9wOiAyMDBweDtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIG1heC13aWR0aDogMzB2dztcclxufVxyXG5cclxuXHJcbi50aXRsZXtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zeW5vcHNpc3tcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxMDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBjb2xvcjogI2I4ZDlmMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhkOWYxO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4udGV4dC1jb250ZW50IGJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRlbnQgYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGQ5ZjE7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmhlYWRpbmd7XHJcbiAgY29sb3I6ICNiOGQ5ZjE7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW46IDE1cHggMHB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nIGF7XHJcbiAgY29sb3I6ICNiOGQ5ZjE7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG5cclxuXHJcbi5oZWFkaW5nIGE6aG92ZXJ7XHJcbiAgY29sb3I6ICM1OGI3ZmE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backendUrl: "https://api.jikan.moe/v3",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GNOd":
/*!******************************************************************!*\
  !*** ./src/app/component/anime-window/anime-window.component.ts ***!
  \******************************************************************/
/*! exports provided: AnimeWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeWindowComponent", function() { return AnimeWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AnimeWindowComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnimeWindowComponent.ɵfac = function AnimeWindowComponent_Factory(t) { return new (t || AnimeWindowComponent)(); };
AnimeWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeWindowComponent, selectors: [["app-anime-window"]], inputs: { anime: "anime" }, decls: 6, vars: 3, consts: [["target", "_blank", 3, "href"], [1, "window-container"], [3, "src"], [1, "window-name"], [1, "name"]], template: function AnimeWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/anime/", ctx.anime.mal_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.anime.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.anime.title);
    } }, styles: [".window-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  height: 250px;\r\n  width: 180px;\r\n  transition: 0.2s all;\r\n  border: 2px solid #07154e;\r\n  border-radius: 5px;\r\n  z-index: 2;\r\n}\r\n\r\n.window-container[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 3px 3px rgba(183, 216, 241, 0.7);\r\n}\r\n\r\n.window-container[_ngcontent-%COMP%]:hover   .synopsis[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.window-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.window-name[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  \r\n  background-image: linear-gradient(0, rgba(0, 0, 0, 0.8) 45% , rgba(0, 0, 0, 0.5),  transparent);\r\n  color: white;\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 3px 0;\r\n  bottom: 0;\r\n}\r\n\r\n.window-name[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{\r\n  margin-left: 5px;\r\n  width: calc(100% - 5px - 5px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1lLXdpbmRvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLCtGQUErRjtFQUMvRixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJhbmltZS13aW5kb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aW5kb3ctY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAxODBweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDcxNTRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ud2luZG93LWNvbnRhaW5lcjpob3ZlcntcclxuICBib3gtc2hhZG93OiAzcHggM3B4IHJnYmEoMTgzLCAyMTYsIDI0MSwgMC43KTtcclxufVxyXG5cclxuLndpbmRvdy1jb250YWluZXI6aG92ZXIgLnN5bm9wc2lze1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi53aW5kb3ctY29udGFpbmVyIGltZ3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcblxyXG4ud2luZG93LW5hbWV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMCwgcmdiYSgwLCAwLCAwLCAwLjgpIDQ1JSAsIHJnYmEoMCwgMCwgMCwgMC41KSwgIHRyYW5zcGFyZW50KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi53aW5kb3ctbmFtZSAubmFtZXtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHggLSA1cHgpO1xyXG59Il19 */"] });


/***/ }),

/***/ "ObfR":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






const _c0 = function (a0) { return { "activeHovered": a0 }; };
const _c1 = function (a0) { return { "opacity-0": a0 }; };
class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.queryId = "";
        this.searchIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
    }
    redirect(pagename, queryParam) {
        this.router.navigate(['/' + pagename], { queryParams: queryParam });
    }
    searchbarClick(input) {
        console.log(input);
        if (input.length >= 3) {
            this.redirect("search", { q: input });
        }
        else
            this.redirect("search", { order_by: "title", sort: "asc" });
    }
    setCategoryHovered(bool) {
        console.log(bool);
        this.isCategoryHovered = bool;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 29, vars: 8, consts: [[1, "container", "flex-justify-between"], [1, "flex-align-center"], ["href", "/", 2, "margin", "10px 30px 0 30px"], ["src", "../../../assets/logo.png", "height", "50px"], ["href", "/about", 2, "font-size", "1.5em"], [1, "flex-center", 2, "font-size", "1.5em", "height", "100%", 3, "ngClass", "mouseover", "mouseout"], [1, "searchbar-container", "flex-center", 2, "position", "relative"], ["placeholder", "Find your anime...", 1, "searchbar", 3, "ngModel", "keydown.enter", "ngModelChange"], [1, "search-icon", "margin-5px", 3, "icon", "click"], [2, "position", "absolute", "top", "85px", "width", "100%", "background-color", "rgb(10, 11, 15, 0.8)", 3, "ngClass", "mouseover", "mouseout"], [1, "flex-justify-around", "category-container"], ["href", "search?genre=1&order_by=score&sort=desc", 2, "font-size", "1.2em"], ["href", "search?genre=2&order_by=score&sort=desc", 2, "font-size", "1.2em"], ["href", "search?genre=4&order_by=score&sort=desc", 2, "font-size", "1.2em"], ["href", "search?genre=22&order_by=score&sort=desc", 2, "font-size", "1.2em"], ["href", "search?genre=7&order_by=score&sort=desc", 2, "font-size", "1.2em"], ["href", "search?genre=10&order_by=score&sort=desc", 2, "font-size", "1.2em"], ["href", "search?genre=38&order_by=score&sort=desc", 2, "font-size", "1.2em"], ["href", "search?genre=14&order_by=score&sort=desc", 2, "font-size", "1.2em"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function NavbarComponent_Template_a_mouseover_6_listener() { return ctx.setCategoryHovered(true); })("mouseout", function NavbarComponent_Template_a_mouseout_6_listener() { return ctx.setCategoryHovered(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function NavbarComponent_Template_input_keydown_enter_9_listener() { return ctx.searchbarClick(ctx.queryId); })("ngModelChange", function NavbarComponent_Template_input_ngModelChange_9_listener($event) { return ctx.queryId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_10_listener() { return ctx.searchbarClick(ctx.queryId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function NavbarComponent_Template_div_mouseover_11_listener() { return ctx.setCategoryHovered(true); })("mouseout", function NavbarComponent_Template_div_mouseout_11_listener() { return ctx.setCategoryHovered(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Adventure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Comedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Romance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Mystery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Fantasy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Military");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Horror");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.isCategoryHovered));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.queryId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.searchIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, !ctx.isCategoryHovered));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n  background-color: rgb(10, 11, 15, 0.8);\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  transition: 0.5s all;\r\n  color: #b8d9f1;\r\n  margin: 0 10px;\r\n  padding: 10px 0;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n  color: #239ef6;\r\n}\r\n\r\n.searchbar-container[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  position: relative;\r\n}\r\n\r\n.searchbar[_ngcontent-%COMP%]{\r\n  padding: 5px 40px 5px 20px;\r\n  width: 290px;\r\n  background-color: rgba(255, 255, 255, 0.95);\r\n  border: 4px solid #b8d9f1;\r\n  border-radius: 100px;\r\n  font-size: 1.2em;\r\n  transition: 0.2s all;\r\n  outline: none;\r\n}\r\n\r\n.category-container[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n  transition: 1s all;\r\n}\r\n\r\n.searchbar[_ngcontent-%COMP%]:focus{\r\n  background-color: white;\r\n  border: 4px solid #239ef6;\r\n}\r\n\r\n.searchbar[_ngcontent-%COMP%]:focus    + .search-icon[_ngcontent-%COMP%]{\r\n  color: #239ef6;\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%]{\r\n  color: #b8d9f1;\r\n  position: absolute;\r\n  top: 24%;\r\n  right: 8%;\r\n  font-size: 1.2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.category-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding: 15px 5px;\r\n}\r\n\r\n.activeHovered[_ngcontent-%COMP%]{\r\n  color: #239ef6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDExLCAxNSwgMC44KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgY29sb3I6ICNiOGQ5ZjE7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gIGNvbG9yOiAjMjM5ZWY2O1xyXG59XHJcblxyXG4uc2VhcmNoYmFyLWNvbnRhaW5lcntcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VhcmNoYmFye1xyXG4gIHBhZGRpbmc6IDVweCA0MHB4IDVweCAyMHB4O1xyXG4gIHdpZHRoOiAyOTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNiOGQ5ZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY29udGFpbmVye1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogMXMgYWxsO1xyXG59XHJcblxyXG4uc2VhcmNoYmFyOmZvY3Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICMyMzllZjY7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXI6Zm9jdXMgKyAuc2VhcmNoLWljb257XHJcbiAgY29sb3I6ICMyMzllZjY7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbntcclxuICBjb2xvcjogI2I4ZDlmMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNCU7XHJcbiAgcmlnaHQ6IDglO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY29udGFpbmVyIGF7XHJcbiAgcGFkZGluZzogMTVweCA1cHg7XHJcbn1cclxuXHJcbi5hY3RpdmVIb3ZlcmVke1xyXG4gIGNvbG9yOiAjMjM5ZWY2O1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'KY-anime-list';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UX7N":
/*!*******************************************!*\
  !*** ./src/app/services/anime.service.ts ***!
  \*******************************************/
/*! exports provided: AnimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeService", function() { return AnimeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AnimeService {
    constructor(http) {
        this.http = http;
    }
    getAnimeList(queryParam) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        for (let key in queryParam) {
            let value = queryParam[key];
            params = params.append(key, value);
            // Use `key` and `value`
        }
        var link = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl}/search/anime`;
        return this.http.get(link, { params });
    }
    getAnimeInfo(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl}/anime/${id}`);
    }
    getAnimePictures(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl}/anime/${id}/pictures`);
    }
    getTodayAnime() {
        return this.http.get(`https://api.jikan.moe/v3/schedule`);
    }
    getNextSeasonAnime() {
        return this.http.get(`https://api.jikan.moe/v3/season/later`);
    }
}
AnimeService.ɵfac = function AnimeService_Factory(t) { return new (t || AnimeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AnimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AnimeService, factory: AnimeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YQc0":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_anime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/anime.service */ "UX7N");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_anime_window_anime_window_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/anime-window/anime-window.component */ "GNOd");








function SearchComponent_div_160_app_anime_window_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-anime-window", 75);
} if (rf & 2) {
    const anime_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("anime", anime_r3);
} }
function SearchComponent_div_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_div_160_app_anime_window_1_Template, 1, 1, "app-anime-window", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.searchResult.results);
} }
function SearchComponent_ng_container_162_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_ng_container_162_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.handlePage(page_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", page_r4, " ");
} }
function SearchComponent_ng_container_162_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r4);
} }
function SearchComponent_ng_container_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_162_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchComponent_ng_container_162_div_2_Template, 2, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", page_r4 !== ctx_r1.pageValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", page_r4 === ctx_r1.pageValue);
} }
class SearchComponent {
    constructor(activatedRoute, animeService, router) {
        this.activatedRoute = activatedRoute;
        this.animeService = animeService;
        this.router = router;
        this.filterIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFilter"];
        this.searchIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.resultIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faClipboardList"];
        this.activatedRoute.queryParams.subscribe(params => {
            this.usedParams = params;
            this.usedParams.page ? this.pageValue = this.usedParams.page : this.pageValue = 1;
            this.usedParams.order_by ? null : this.usedParams = Object.assign(Object.assign({}, this.usedParams), { order_by: "score" });
            this.paramContent = this.usedParams;
            this.animeService.getAnimeList(this.usedParams).subscribe(data => {
                this.searchResult = data;
                this.pages = Array(data.last_page).fill(0).map((x, i) => { return i + 1; });
            });
        });
    }
    redirect(pagename, queryParam) {
        this.router.navigate(['/' + pagename], { queryParams: queryParam });
    }
    //filter handler
    handleGenre(event) {
        this.paramContent = Object.assign(Object.assign({}, this.paramContent), { genre: event });
        // console.log(this.paramContent)
    }
    handleSort(event) {
        this.paramContent = Object.assign(Object.assign({}, this.paramContent), { sort: event });
        // console.log(this.paramContent)
    }
    handleOrder(event) {
        this.paramContent = Object.assign(Object.assign({}, this.paramContent), { order_by: event });
        // console.log(this.paramContent)
    }
    handleStatus(event) {
        this.paramContent = Object.assign(Object.assign({}, this.paramContent), { status: event });
        // console.log(this.paramContent)
    }
    handleType(event) {
        this.paramContent = Object.assign(Object.assign({}, this.paramContent), { type: event });
        // console.log(this.paramContent)
    }
    handleTitle(event) {
        this.paramContent = Object.assign(Object.assign({}, this.paramContent), { q: event });
        // console.log(this.paramContent)
    }
    handlePage(event) {
        this.paramContent = Object.assign(Object.assign({}, this.paramContent), { page: event });
        this.redirect('search', this.paramContent);
    }
    searchWithFilter() {
        if (this.paramContent == this.usedParams)
            return;
        this.usedParams = Object.assign(Object.assign({}, this.paramContent), { page: 1 });
        this.redirect('/search', this.usedParams);
    }
    ngOnInit() {
        this.animeService.getAnimeList(this.usedParams).subscribe(data => {
            this.searchResult = data;
            this.pages = Array(data.last_page).fill(0).map((x, i) => { return i + 1; });
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_anime_service__WEBPACK_IMPORTED_MODULE_3__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 163, vars: 11, consts: [[2, "height", "90px", "width", "100%", "background-color", "#050511", "border-bottom", "2px solid #b8d9f1"], [2, "padding", "0 15vw"], [2, "margin", "25px 0"], [1, "margin-5px-vertical", "sub-title"], [1, "margin-5px", 3, "icon"], [1, "h-line"], [1, "filter-container"], [3, "ngModel", "ngModelChange"], ["value", "undefined"], ["value", "tv"], ["value", "ova"], ["value", "movie"], ["value", "special"], ["value", "ona"], ["value", "music"], ["value", "airing"], ["value", "completed"], ["value", "upcoming"], ["value", "title"], ["value", "score"], ["value", "type"], ["value", "members"], ["value", "rating"], ["value", "desc"], ["value", "asc"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "30"], ["value", "31"], ["value", "32"], ["value", "33"], ["value", "34"], ["value", "35"], ["value", "36"], ["value", "37"], ["value", "38"], ["value", "39"], ["value", "40"], ["value", "41"], ["value", "42"], ["value", "43"], ["placeholder", "title", 3, "ngModel", "ngModelChange"], [1, "search-icon", "margin-5px", 3, "icon", "click"], ["class", "flex-wrap", 4, "ngIf"], [1, "flex", 2, "padding", "5px 3% 15px 3%"], [4, "ngFor", "ngForOf"], [1, "flex-wrap"], ["style", "margin: 15px 3%;", 3, "anime", 4, "ngFor", "ngForOf"], [2, "margin", "15px 3%", 3, "anime"], ["class", "page-button", "style", "margin: 0 5px", 3, "click", 4, "ngIf"], ["class", "page-button activated", "style", "margin: 0 5px", 4, "ngIf"], [1, "page-button", 2, "margin", "0 5px", 3, "click"], [1, "page-button", "activated", 2, "margin", "0 5px"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_12_listener($event) { return ctx.handleType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ova");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Special");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Ona");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_30_listener($event) { return ctx.handleStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Airing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Upcoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Order by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_42_listener($event) { return ctx.handleOrder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sort:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_56_listener($event) { return ctx.handleSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Descending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Ascending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Genre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_64_listener($event) { return ctx.handleGenre($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Adventure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Cars");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Comedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Dementia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Demons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Mystery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Drama");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Ecchi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Fantasy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Hentai");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Historical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Horror");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Kids");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Magic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "MartialArts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Mecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Parody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Samurai");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Romance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "SciFi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Shoujo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "ShoujoAi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Shounen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "ShounenAi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "SuperPower");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Vampire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Yaoi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Yuri");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Harem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "SliceOfLife");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Supernatural");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Military");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Police");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Psychological");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Thriller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Seinen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Josei");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_153_listener($event) { return ctx.handleTitle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "fa-icon", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_fa_icon_click_154_listener() { return ctx.searchWithFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Search Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](160, SearchComponent_div_160_Template, 2, 1, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](162, SearchComponent_ng_container_162_Template, 3, 2, "ng-container", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.filterIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paramContent.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paramContent.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paramContent.order_by);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paramContent.sort ? ctx.paramContent.sort : "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paramContent.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paramContent.q ? ctx.paramContent.q : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.searchIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.resultIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _component_anime_window_anime_window_component__WEBPACK_IMPORTED_MODULE_7__["AnimeWindowComponent"]], styles: [".filter-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n  color: #b8d9f1;\r\n}\r\n\r\n.filter-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color: #b8d9f1;\r\n}\r\n\r\n.filter-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  margin: 0 10px;\r\n}\r\n\r\n.filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\r\n  background-color: transparent;\r\n  border: 1px solid #b8d9f1;\r\n  min-width: 100px;\r\n  margin: 5px;\r\n  font-size: 1.2em;\r\n  color: #b8d9f1;\r\n}\r\n\r\n.filter-container[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n}\r\n\r\n.filter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  padding: 0 0 2px 5px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%]{\r\n  padding: 0 10px;\r\n  background-color: #b8d9f1;\r\n  color: black;\r\n  cursor: pointer;\r\n  transition: 0.5s all;\r\n  font-size: 1.5em;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  box-shadow: 0 0 1px 1px #b8d9f1;\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%]:hover{\r\n  background-color: #58b7fa;\r\n  box-shadow: 0 0 1px 1px #58b7fa;\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%]:active{\r\n  box-shadow: none;\r\n}\r\n\r\n.page-button[_ngcontent-%COMP%]{\r\n  color: #b8d9f1;\r\n  border: 1px solid #b8d9f1;\r\n  padding: 2px 5px;\r\n  min-width: 20px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: 0.5s all;\r\n}\r\n\r\n.page-button[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n  background-color: #b8d9f1;\r\n}\r\n\r\n.page-button.activated[_ngcontent-%COMP%]{\r\n  color: black;\r\n  background-color: #b8d9f1;\r\n  cursor: context-menu;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBjb2xvcjogI2I4ZDlmMTtcclxufVxyXG5cclxuLmZpbHRlci1jb250YWluZXIgc3BhbntcclxuICBjb2xvcjogI2I4ZDlmMTtcclxufVxyXG5cclxuLmZpbHRlci1jb250YWluZXIgZGl2e1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWNvbnRhaW5lciBpbnB1dCwgc2VsZWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGQ5ZjE7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGNvbG9yOiAjYjhkOWYxO1xyXG59XHJcblxyXG4uZmlsdGVyLWNvbnRhaW5lciBvcHRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5maWx0ZXItY29udGFpbmVyIGlucHV0e1xyXG4gIHBhZGRpbmc6IDAgMCAycHggNXB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnNlYXJjaC1pY29ue1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkOWYxO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNiOGQ5ZjE7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNThiN2ZhO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICM1OGI3ZmE7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbjphY3RpdmV7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnBhZ2UtYnV0dG9ue1xyXG4gIGNvbG9yOiAjYjhkOWYxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGQ5ZjE7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG5cclxuLnBhZ2UtYnV0dG9uOmhvdmVye1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkOWYxO1xyXG59XHJcblxyXG4ucGFnZS1idXR0b24uYWN0aXZhdGVke1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkOWYxO1xyXG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xyXG59Il19 */"] });


/***/ }),

/***/ "Z2+D":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/detail/detail.component */ "erBs");
/* harmony import */ var _component_anime_window_anime_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/anime-window/anime-window.component */ "GNOd");
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-splide */ "rUIk");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-starrating */ "oaav");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./safe.pipe */ "Z2+D");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/search/search.component */ "YQc0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_splide__WEBPACK_IMPORTED_MODULE_7__["NgxSplideModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_11__["RatingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"],
        _component_anime_window_anime_window_component__WEBPACK_IMPORTED_MODULE_6__["AnimeWindowComponent"],
        _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _safe_pipe__WEBPACK_IMPORTED_MODULE_12__["SafePipe"],
        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_splide__WEBPACK_IMPORTED_MODULE_7__["NgxSplideModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
        ng_starrating__WEBPACK_IMPORTED_MODULE_11__["RatingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();


/***/ }),

/***/ "erBs":
/*!**************************************************!*\
  !*** ./src/app/pages/detail/detail.component.ts ***!
  \**************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_anime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/anime.service */ "UX7N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-starrating */ "oaav");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../safe.pipe */ "Z2+D");










function DetailComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](title_r23);
} }
function DetailComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Synonims: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DetailComponent_div_16_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.anime.title_synonyms);
} }
function DetailComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Type: ", ctx_r1.anime.type, " ");
} }
function DetailComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Episodes: ", ctx_r2.anime.episodes, " ");
} }
function DetailComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Aired: ", ctx_r3.anime.aired.string, " ");
} }
function DetailComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Status: ", ctx_r4.anime.status, " ");
} }
function DetailComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Source: ", ctx_r5.anime.source, " ");
} }
function DetailComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Broadcast: ", ctx_r6.anime.broadcast, " ");
} }
function DetailComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Duration: ", ctx_r7.anime.duration, " ");
} }
function DetailComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Premiered: ", ctx_r8.anime.premiered, " ");
} }
function DetailComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Rating: ", ctx_r9.anime.rating, " ");
} }
function DetailComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" score: ", ctx_r10.anime.score, " (scored by ", ctx_r10.anime.scored_by, " users) ");
} }
function DetailComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ranked: #", ctx_r11.anime.rank, " ");
} }
function DetailComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" popularity: #", ctx_r12.anime.popularity, " ");
} }
function DetailComponent_div_43_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "/search?genre=", genre_r25.mal_id, "&order_by=score&sort=desc", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](genre_r25.name);
} }
function DetailComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailComponent_div_43_a_1_Template, 2, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r13.anime.genres);
} }
function DetailComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "here is ignored");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r16.anime.trailer_url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
function DetailComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "No Trailer available :(");
} }
function DetailComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opening_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/results?search_query=", opening_r26.link, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](opening_r26.title);
} }
function DetailComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ending_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/results?search_query=", ending_r27.link, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ending_r27.title);
} }
function DetailComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", picture_r28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class DetailComponent {
    constructor(animeService, route, router) {
        this.animeService = animeService;
        this.route = route;
        this.router = router;
        this.mappingGenre = {
            Action: "1",
            Adventure: "2",
            Cars: "3",
            Comedy: "4",
            Dementia: "5",
            Demons: "6",
            Mystery: "7",
            Drama: "8",
            Ecchi: "9",
            Fantasy: "10",
            Game: "11",
            Hentai: "12",
            Historical: "13",
            Horror: "14",
            Kids: "15",
            Magic: "16",
            MartialArts: "17",
            Mecha: "18",
            Music: "19",
            Parody: "20",
            Samurai: "21",
            Romance: "22",
            School: "23",
            SciFi: "24",
            Shoujo: "25",
            ShoujoAi: "26",
            Shounen: "27",
            ShounenAi: "28",
            Space: "29",
            Sports: "30",
            SuperPower: "31",
            Vampire: "32",
            Yaoi: "33",
            Yuri: "34",
            Harem: "35",
            SliceOfLife: "36",
            Supernatural: "37",
            Military: "38",
            Police: "39",
            Psychological: "40",
            Thriller: "41",
            Seinen: "42",
            Josei: "43",
        };
        this.signatureIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignature"];
        this.infoIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faInfoCircle"];
        this.chartIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChartPie"];
        this.imagesIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faImages"];
        this.soundIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMusic"];
        this.youtubeIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"];
    }
    redirect(pagename, queryParam) {
        this.router.navigate(['/' + pagename], { queryParams: queryParam });
    }
    ngOnInit() {
        this.animeId = this.route.snapshot.paramMap.get("id");
        this.animeService.getAnimePictures(this.animeId).subscribe(data => {
            this.animeImages = data.pictures.map((picture) => {
                return picture.small;
            });
        });
        this.animeService.getAnimeInfo(this.animeId).subscribe(data => {
            this.anime = data;
            this.openingThemes = data.opening_themes.map((opening) => {
                var tempLink = opening.split("by")[0];
                tempLink = tempLink[0] === '#' ? tempLink.substring(3) : tempLink;
                console.log("before: " + tempLink);
                tempLink = tempLink.replace(/['"]+/g, '');
                console.log("after:" + tempLink);
                return {
                    title: opening,
                    link: tempLink
                };
            });
            this.endingThemes = data.ending_themes.map((ending) => {
                var tempLink = ending.split("by")[0];
                tempLink = tempLink[0] === '#' ? tempLink.substring(3) : tempLink;
                tempLink = tempLink.replace(/['"]+/g, '');
                return {
                    title: ending,
                    link: tempLink
                };
            });
            console.log(this.anime);
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_anime_service__WEBPACK_IMPORTED_MODULE_3__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 83, vars: 42, consts: [[2, "height", "90px", "width", "100%", "background-color", "#050511", "border-bottom", "2px solid #b8d9f1"], [2, "padding", "0 15vw"], [1, "flex", "margin-10px-vertical"], [1, "margin-10px-horizontal", 2, "max-width", "300px"], ["width", "300px", "height", "400px", 2, "margin-top", "15px", "border", "2px solid #b8d9f1", 3, "src"], [1, "margin-5px-vertical"], [1, "margin-5px-vertical", "sub-title"], [1, "margin-5px", 3, "icon"], [1, "h-line"], [4, "ngIf"], [1, "margin-10px-horizontal", 2, "max-width", "1000px"], [1, "font-size-2em"], ["class", "flex flex-wrap", "style", "margin-top:10px;", 4, "ngIf"], [1, "flex-align-center"], ["checkedcolor", "gold", "uncheckedcolor", "#b8d9f1", "size", "30px", 3, "value", "totalstars", "readonly"], [2, "margin-top", "5px"], [2, "font-size", "1.5em", "margin", "0", "text-align", "justify"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["content", ""], ["other_content", ""], ["id", "opening-ending-box", 1, "flex-justify-around", 2, "height", "500px", "overflow-y", "auto", "position", "relative"], [2, "max-height", "500px", "width", "40%"], [4, "ngFor", "ngForOf"], [1, "v-line", 2, "height", "450px", "position", "sticky", "top", "8%"], [3, "height", "width", "cellsToShow", "loop", "autoplay", "autoplayInterval", "lightDOM"], ["class", "carousel-cell", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", 2, "margin-top", "10px"], ["class", "tag", 3, "href", 4, "ngFor", "ngForOf"], [1, "tag", 3, "href"], ["width", "1000", "height", "570", "frameborder", "0", "allow", "autoplay; encrypted-media", "allowfullscreen", "", 3, "src"], ["target", "_blank", 3, "href"], [1, "carousel-cell"], ["lazy", "", 3, "src"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Alternate Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DetailComponent_div_16_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DetailComponent_div_23_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DetailComponent_div_24_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DetailComponent_div_25_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DetailComponent_div_26_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DetailComponent_div_27_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DetailComponent_div_28_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DetailComponent_div_29_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DetailComponent_div_30_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, DetailComponent_div_31_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, DetailComponent_div_37_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, DetailComponent_div_38_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, DetailComponent_div_39_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, DetailComponent_div_43_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "star-rating", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Trailer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, DetailComponent_div_56_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, DetailComponent_ng_template_57_Template, 2, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, DetailComponent_ng_template_59_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Sound");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Opening:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, DetailComponent_div_70_Template, 3, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Ending:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, DetailComponent_div_75_Template, 3, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "carousel", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, DetailComponent_div_82_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.anime.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.signatureIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("English: ", ctx.anime.title_english, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Japanese: ", ctx.anime.title_japanese, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.title_synonyms.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.infoIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.episodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.aired);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.broadcast);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.premiered);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.chartIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.score);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.rank);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.popularity);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.anime.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.genres.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.anime.score / 2)("totalstars", 5)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.anime.score ? ctx.anime.score : 0, " / 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.anime.synopsis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.youtubeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.anime.trailer_url)("ngIfThen", _r15)("ngIfElse", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.soundIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.openingThemes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.endingThemes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.imagesIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 350)("width", 1000)("cellsToShow", 3)("loop", true)("autoplay", true)("autoplayInterval", 3000)("lightDOM", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.animeImages);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_starrating__WEBPACK_IMPORTED_MODULE_7__["StarRatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"]], pipes: [_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]], styles: ["*[_ngcontent-%COMP%]{\r\n  color: #b8d9f1;\r\n}\r\n\r\n.tag[_ngcontent-%COMP%]{\r\n  padding: 1px 15px 5px 15px;\r\n  border: 3px solid #b8d9f1;\r\n  background-color: #050511;\r\n  color: #b8d9f1;\r\n  border-radius: 10px;\r\n  margin: 5px;\r\n  font-weight: bolder;\r\n  transition: 0.5s all;\r\n  cursor: pointer;\r\n}\r\n\r\n.tag[_ngcontent-%COMP%]:hover{\r\n  background-color: #b8d9f1;\r\n  color: #050511;\r\n}\r\n\r\n#opening-ending-box[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n\r\n\r\n#opening-ending-box[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: rgb(65, 65, 65);\r\n}\r\n\r\n\r\n\r\n#opening-ending-box[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #b8d9f1;\r\n  -webkit-transition: 0.5s all;\r\n  transition: 0.5s all;\r\n}\r\n\r\n\r\n\r\n#opening-ending-box[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #92cef8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLG1CQUFtQjtFQUNuQiw0QkFBb0I7RUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGNvbG9yOiAjYjhkOWYxO1xyXG59XHJcblxyXG4udGFne1xyXG4gIHBhZGRpbmc6IDFweCAxNXB4IDVweCAxNXB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNiOGQ5ZjE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDUxMTtcclxuICBjb2xvcjogI2I4ZDlmMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFnOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGQ5ZjE7XHJcbiAgY29sb3I6ICMwNTA1MTE7XHJcbn1cclxuXHJcbiNvcGVuaW5nLWVuZGluZy1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4jb3BlbmluZy1lbmRpbmctYm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDY1LCA2NSwgNjUpO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuI29wZW5pbmctZW5kaW5nLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNiOGQ5ZjE7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4jb3BlbmluZy1lbmRpbmctYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzkyY2VmODtcclxufSJdfQ== */"] });


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");



class AboutComponent {
    constructor() {
        this.githubIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"];
        this.linkedinIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLinkedin"];
        this.angularIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngular"];
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 35, vars: 3, consts: [[2, "height", "90px", "width", "100%", "background-color", "#050511", "border-bottom", "2px solid #b8d9f1"], [2, "background-image", "url('assets/about_bg.jpg')", "background-attachment", "fixed"], [1, "flex-center", "transparent-page", 2, "background-color", "#004e86af"], ["href", "https://jikan.moe/", "target", "_blank", 2, "text-decoration", "none", "color", "#b8d9f1"], ["src", "assets/jikan.logo.png", "height", "200px"], [1, "font-size-3em"], [1, "font-size-2em"], [1, "v-line", 2, "height", "70%", "margin", "50px 100px"], [2, "width", "50%", "font-size", "1.5em"], [1, "flex-center", "transparent-page", 2, "flex-direction", "column", "background-color", "#00106eaf"], [1, "flex-center"], [1, "font-size-3em", 2, "margin", "0 10px"], ["href", "https://github.com/kenny-dkvv/KY-anime-list", 2, "color", "#b8d9f1"], [1, "font-size-3em", 3, "icon"], [1, "h-line", 2, "width", "55%", "border-width", "1px"], [2, "position", "absolute", "bottom", "0", "right", "0", "padding", "20px"], ["href", "https://github.com/kenny-dkvv", 1, "font-size-2em", "info-link", 2, "display", "block"], [1, "margin-5px", 3, "icon"], ["href", "https://www.linkedin.com/in/kenny-kenny-1229011a8/", 1, "font-size-2em", "info-link", 2, "display", "block"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Jikan API");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "UNOFFICIAL MYANIMELIST API");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "KyAnimeList's data is provided by Jikan API");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Jikan (\u6642\u9593) is an open-source PHP & REST API for the \u201Cmost active online anime + manga community and database\u201D \u2014 MyAnimeList.net. It parses the website to satisfy the need for an API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "KyAnimeList");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " was made in 2021 using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "For the purpose of learning and assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "kenny-dkvv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Kenny Kenny");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.angularIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.githubIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.linkedinIcon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".transparent-page[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  height: 100vh; \r\n  color: #b8d9f1;\r\n  text-shadow: 2px 2px 2px #000000;\r\n}\r\n\r\n.info-link[_ngcontent-%COMP%]{\r\n  color: #b8d9f1;\r\n  transition: 0.5s all;\r\n}\r\n\r\n.info-link[_ngcontent-%COMP%]:hover{\r\n  color: #239ef6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUdBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zcGFyZW50LXBhZ2V7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwdmg7IFxyXG4gIGNvbG9yOiAjYjhkOWYxO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwMDAwO1xyXG59XHJcblxyXG4uaW5mby1saW5re1xyXG4gIGNvbG9yOiAjYjhkOWYxO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG59XHJcblxyXG5cclxuLmluZm8tbGluazpob3ZlcntcclxuICBjb2xvcjogIzIzOWVmNjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/detail/detail.component */ "erBs");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/search/search.component */ "YQc0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: "",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "anime/:id",
        component: _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"]
    },
    {
        path: "search",
        component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"]
    },
    {
        path: "about",
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map