"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 3687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9594);
/* harmony import */ var _lib_hooks_use_previews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3088);
/* harmony import */ var _lib_util_get_number_of_skeletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(217);
/* harmony import */ var _lib_util_repeat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1692);
/* harmony import */ var _modules_products_components_product_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8948);
/* harmony import */ var _modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5986);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4009);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_data__WEBPACK_IMPORTED_MODULE_1__, _lib_hooks_use_previews__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__]);
([_lib_data__WEBPACK_IMPORTED_MODULE_1__, _lib_hooks_use_previews__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const InfiniteProducts = ({ params  })=>{
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useCart)();
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView)();
    const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        const p = {};
        if (cart?.id) {
            p.cart_id = cart.id;
        }
        p.is_giftcard = false;
        return {
            ...p,
            ...params
        };
    }, [
        cart?.id,
        params
    ]);
    const { data , hasNextPage , fetchNextPage , isLoading , isFetchingNextPage  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useInfiniteQuery)([
        `infinite-products-store`,
        queryParams,
        cart
    ], ({ pageParam  })=>(0,_lib_data__WEBPACK_IMPORTED_MODULE_1__/* .fetchProductsList */ ._q)({
            pageParam,
            queryParams
        }), {
        getNextPageParam: (lastPage)=>lastPage.nextPage
    });
    const previews = (0,_lib_hooks_use_previews__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        pages: data?.pages,
        region: cart?.region
    });
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        inView,
        hasNextPage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-1 content-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8 flex-1",
                children: [
                    previews.map((p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_products_components_product_preview__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                ...p
                            })
                        }, p.id)),
                    isLoading && !previews.length && (0,_lib_util_repeat__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(8).map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        }, index)),
                    isFetchingNextPage && (0,_lib_util_repeat__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((0,_lib_util_get_number_of_skeletons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(data?.pages)).map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        }, index))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-16 flex justify-center items-center text-small-regular text-gray-700",
                ref: ref,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    ref: ref
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([medusa_react__WEBPACK_IMPORTED_MODULE_1__]);
medusa_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const RefinementList = ({ refinementList , setRefinementList  })=>{
    const { collections , isLoading  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_1__.useCollections)();
    const handleCollectionChange = (e, id)=>{
        const { checked  } = e.target;
        const collectionIds = refinementList.collection_id || [];
        const exists = collectionIds.includes(id);
        if (checked && !exists) {
            setRefinementList({
                ...refinementList,
                collection_id: [
                    ...collectionIds,
                    id
                ]
            });
            return;
        }
        if (!checked && exists) {
            setRefinementList({
                ...refinementList,
                collection_id: collectionIds.filter((c)=>c !== id)
            });
            return;
        }
        return;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "px-8 py-4 small:pr-0 small:pl-8 small:min-w-[250px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-x-3 small:flex-col small:gap-y-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-base-semi",
                        children: "Collections"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "text-base-regular flex items-center gap-x-4 small:grid small:grid-cols-1 small:gap-y-2",
                        children: collections?.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "flex items-center gap-x-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "checkbox",
                                            defaultChecked: refinementList.collection_id?.includes(c.id),
                                            onChange: (e)=>handleCollectionChange(e, c.id),
                                            className: "accent-amber-200"
                                        }),
                                        c.title
                                    ]
                                })
                            }, c.id))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefinementList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_common_components_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3269);
/* harmony import */ var _modules_layout_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7688);
/* harmony import */ var _modules_products_components_infinite_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3687);
/* harmony import */ var _modules_store_components_refinement_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8555);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_layout_templates__WEBPACK_IMPORTED_MODULE_2__, _modules_products_components_infinite_products__WEBPACK_IMPORTED_MODULE_3__, _modules_store_components_refinement_list__WEBPACK_IMPORTED_MODULE_4__]);
([_modules_layout_templates__WEBPACK_IMPORTED_MODULE_2__, _modules_products_components_infinite_products__WEBPACK_IMPORTED_MODULE_3__, _modules_store_components_refinement_list__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Store = ()=>{
    const { 0: params , 1: setParams  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Store",
                description: "Explore all of our products."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col small:flex-row small:items-start py-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_store_components_refinement_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        refinementList: params,
                        setRefinementList: setParams
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_products_components_infinite_products__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        params: params
                    })
                ]
            })
        ]
    });
};
Store.getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_templates__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: page
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6335:
/***/ ((module) => {

module.exports = require("@meilisearch/instant-meilisearch");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5534:
/***/ ((module) => {

module.exports = require("react-country-flag");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1035:
/***/ ((module) => {

module.exports = import("@medusajs/medusa-js");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 5756:
/***/ ((module) => {

module.exports = import("medusa-react");;

/***/ }),

/***/ 6269:
/***/ ((module) => {

module.exports = import("react-instantsearch-hooks-web");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,571,788,300,688,338,594], () => (__webpack_exec__(4330)));
module.exports = __webpack_exports__;

})();