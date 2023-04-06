"use strict";
(() => {
var exports = {};
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 7938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3721);
/* harmony import */ var _modules_common_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7391);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AccountInfo = ({ label , currentInfo , isLoading , isSuccess , isError , clearState , errorMessage ="An error occurred, please try again" , children  })=>{
    const { state , close , toggle  } = (0,_lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const handleToggle = ()=>{
        clearState();
        setTimeout(()=>toggle(), 100);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (isSuccess) {
            close();
        }
    }, [
        isSuccess,
        close
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-small-regular",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-end justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "uppercase text-gray-700",
                                children: label
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center flex-1 basis-0 justify-end gap-x-4",
                                children: typeof currentInfo === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-semibold",
                                    children: currentInfo
                                }) : currentInfo
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            variant: "secondary",
                            className: "w-[100px] min-h-[25px] py-1",
                            onClick: handleToggle,
                            type: state ? "reset" : "button",
                            children: state ? "Cancel" : "Edit"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                    static: true,
                    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden", {
                        "max-h-[1000px] opacity-100": isSuccess,
                        "max-h-0 opacity-0": !isSuccess
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-green-100 text-green-500 p-4 my-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                label,
                                " updated succesfully"
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                    static: true,
                    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden", {
                        "max-h-[1000px] opacity-100": isError,
                        "max-h-0 opacity-0": !isError
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-rose-100 text-rose-500 p-4 mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: errorMessage
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                    static: true,
                    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden", {
                        "max-h-[1000px] opacity-100": state,
                        "max-h-0 opacity-0": !state
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-y-2 py-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: children
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-end mt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    isLoading: isLoading,
                                    className: "w-full small:max-w-[140px]",
                                    type: "submit",
                                    children: "Save changes"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6993);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1642);
/* harmony import */ var _modules_common_components_native_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1639);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9137);
/* harmony import */ var _account_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, _modules_common_components_native_select__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _account_info__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, _modules_common_components_native_select__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _account_info__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ProfileBillingAddress = ({ customer  })=>{
    const { register , handleSubmit , reset , control , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
        defaultValues: {
            ...mapBillingAddressToFormData({
                customer
            })
        }
    });
    const { mutate: update , isLoading , isSuccess , isError , reset: clearState ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_4__.useUpdateMe)();
    const { regions  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_4__.useRegions)();
    const regionOptions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return regions?.map((region)=>{
            return region.countries.map((country)=>({
                    value: country.iso_2,
                    label: country.display_name
                }));
        }).flat() || [];
    }, [
        regions
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        reset({
            ...mapBillingAddressToFormData({
                customer
            })
        });
    }, [
        customer,
        reset
    ]);
    const { refetchCustomer  } = (0,_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
    const [firstName, lastName, company, address1, address2, city, province, postalCode, countryCode, ] = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useWatch)({
        control,
        name: [
            "billing_address.first_name",
            "billing_address.last_name",
            "billing_address.company",
            "billing_address.address_1",
            "billing_address.address_2",
            "billing_address.city",
            "billing_address.province",
            "billing_address.postal_code",
            "billing_address.country_code", 
        ]
    });
    const updateBillingAddress = (data)=>{
        return update({
            id: customer.id,
            ...data
        }, {
            onSuccess: ()=>{
                refetchCustomer();
            }
        });
    };
    const currentInfo = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (!customer.billing_address) {
            return "No billing address";
        }
        const country = regionOptions?.find((country)=>country.value === customer.billing_address.country_code)?.label || customer.billing_address.country_code?.toUpperCase();
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col font-semibold",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        customer.billing_address.first_name,
                        " ",
                        customer.billing_address.last_name
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: customer.billing_address.company
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        customer.billing_address.address_1,
                        customer.billing_address.address_2 ? `, ${customer.billing_address.address_2}` : ""
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        customer.billing_address.postal_code,
                        ",",
                        " ",
                        customer.billing_address.city
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: country
                })
            ]
        });
    }, [
        customer,
        regionOptions
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(updateBillingAddress),
        onReset: ()=>reset(mapBillingAddressToFormData({
                customer
            })),
        className: "w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            label: "Billing address",
            currentInfo: currentInfo,
            isLoading: isLoading,
            isSuccess: isSuccess,
            isError: isError,
            clearState: clearState,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 gap-y-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 gap-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "First name",
                                ...register("billing_address.first_name", {
                                    required: true
                                }),
                                defaultValue: firstName,
                                errors: errors
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Last name",
                                ...register("billing_address.last_name", {
                                    required: true
                                }),
                                defaultValue: lastName,
                                errors: errors
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Company",
                        ...register("billing_address.company"),
                        defaultValue: company,
                        errors: errors
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Address",
                        ...register("billing_address.address_1", {
                            required: true
                        }),
                        defaultValue: address1,
                        errors: errors
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Apartment, suite, etc.",
                        ...register("billing_address.address_2"),
                        defaultValue: address2,
                        errors: errors
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-[144px_1fr] gap-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Postal code",
                                ...register("billing_address.postal_code", {
                                    required: true
                                }),
                                defaultValue: postalCode,
                                errors: errors
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "City",
                                ...register("billing_address.city", {
                                    required: true
                                }),
                                defaultValue: city,
                                errors: errors
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Province",
                        ...register("billing_address.province"),
                        defaultValue: province,
                        errors: errors
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_common_components_native_select__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ...register("billing_address.country_code", {
                            required: true
                        }),
                        defaultValue: countryCode,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "",
                                children: "-"
                            }),
                            regionOptions.map((option, i)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: option.value,
                                    children: option.label
                                }, i);
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const mapBillingAddressToFormData = ({ customer  })=>{
    return {
        billing_address: {
            first_name: customer.billing_address?.first_name || undefined,
            last_name: customer.billing_address?.last_name || undefined,
            company: customer.billing_address?.company || undefined,
            address_1: customer.billing_address?.address_1 || undefined,
            address_2: customer.billing_address?.address_2 || undefined,
            city: customer.billing_address?.city || undefined,
            province: customer.billing_address?.province || undefined,
            postal_code: customer.billing_address?.postal_code || undefined,
            country_code: customer.billing_address?.country_code || undefined
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileBillingAddress);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6993);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1642);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9137);
/* harmony import */ var _account_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _account_info__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _account_info__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ProfileEmail = ({ customer  })=>{
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(undefined);
    const { register , handleSubmit , reset , control , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        defaultValues: {
            email: customer.email
        }
    });
    const { refetchCustomer  } = (0,_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
    const { mutate: update , isLoading , isSuccess , isError , reset: clearState ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_3__.useUpdateMe)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        reset({
            email: customer.email
        });
    }, [
        customer,
        reset
    ]);
    const email = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useWatch)({
        control,
        name: "email"
    });
    const updateEmail = (data)=>{
        return update({
            id: customer.id,
            ...data
        }, {
            onSuccess: ()=>{
                refetchCustomer();
            },
            onError: ()=>{
                setErrorMessage("Email already in use");
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(updateEmail),
        className: "w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_info__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            label: "Email",
            currentInfo: `${customer.email}`,
            isLoading: isLoading,
            isSuccess: isSuccess,
            isError: isError,
            errorMessage: errorMessage,
            clearState: clearState,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 gap-y-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    label: "Email",
                    ...register("email", {
                        required: true
                    }),
                    defaultValue: email,
                    errors: errors
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileEmail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6993);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1642);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9137);
/* harmony import */ var _account_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _account_info__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _account_info__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ProfileName = ({ customer  })=>{
    const { register , handleSubmit , reset , control , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        defaultValues: {
            first_name: customer.first_name,
            last_name: customer.last_name
        }
    });
    const { refetchCustomer  } = (0,_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
    const { mutate: update , isLoading , isSuccess , isError , reset: clearState ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_3__.useUpdateMe)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        reset({
            first_name: customer.first_name,
            last_name: customer.last_name
        });
    }, [
        customer,
        reset
    ]);
    const firstName = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useWatch)({
        control,
        name: "first_name"
    });
    const lastName = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useWatch)({
        control,
        name: "last_name"
    });
    const updateName = (data)=>{
        return update({
            id: customer.id,
            ...data
        }, {
            onSuccess: ()=>{
                refetchCustomer();
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(updateName),
        className: "w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_info__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            label: "Name",
            currentInfo: `${customer.first_name} ${customer.last_name}`,
            isLoading: isLoading,
            isSuccess: isSuccess,
            isError: isError,
            clearState: clearState,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-2 gap-x-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "First name",
                        ...register("first_name", {
                            required: true
                        }),
                        defaultValue: firstName,
                        errors: errors
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Last name",
                        ...register("last_name", {
                            required: true
                        }),
                        defaultValue: lastName,
                        errors: errors
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileName);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7590);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1642);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9137);
/* harmony import */ var _account_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _account_info__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _account_info__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ProfileName = ({ customer  })=>{
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(undefined);
    const { register , handleSubmit , reset , formState: { errors  } , setError ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    const { mutate: update , isLoading , isSuccess , isError , reset: clearState ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_3__.useUpdateMe)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        reset();
    }, [
        customer,
        reset
    ]);
    const updatePassword = async (data)=>{
        const isValid = await _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .medusaClient.auth.authenticate */ .pZ.auth.authenticate({
            email: customer.email,
            password: data.old_password
        }).then(()=>true).catch(()=>false);
        if (!isValid) {
            setError("old_password", {
                type: "validate",
                message: "Old password is incorrect"
            });
            setErrorMessage("Old password is incorrect");
            return;
        }
        if (data.new_password !== data.confirm_password) {
            setError("confirm_password", {
                type: "validate",
                message: "Passwords do not match"
            });
            setErrorMessage("Passwords do not match");
            return;
        }
        return update({
            id: customer.id,
            password: data.new_password
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(updatePassword),
        onReset: ()=>reset(),
        className: "w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_info__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            label: "Password",
            currentInfo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "The password is not shown for security reasons"
            }),
            isLoading: isLoading,
            isSuccess: isSuccess,
            isError: isError,
            errorMessage: errorMessage,
            clearState: clearState,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Old password",
                        ...register("old_password", {
                            required: true
                        }),
                        type: "password",
                        errors: errors
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "New password",
                        type: "password",
                        ...register("new_password", {
                            required: true
                        }),
                        errors: errors
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Confirm password",
                        type: "password",
                        ...register("confirm_password", {
                            required: true
                        }),
                        errors: errors
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileName);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6993);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1642);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9137);
/* harmony import */ var _account_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _account_info__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _account_info__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ProfilePhone = ({ customer  })=>{
    const { register , handleSubmit , reset , control , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        defaultValues: {
            phone: customer.phone
        }
    });
    const { refetchCustomer  } = (0,_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
    const { mutate: update , isLoading , isSuccess , isError , reset: clearState ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_3__.useUpdateMe)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        reset({
            phone: customer.phone
        });
    }, [
        customer,
        reset
    ]);
    const phone = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useWatch)({
        control,
        name: "phone"
    });
    const updatePhone = (data)=>{
        return update({
            id: customer.id,
            ...data
        }, {
            onSuccess: ()=>{
                refetchCustomer();
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(updatePhone),
        className: "w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_info__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            label: "Phone",
            currentInfo: `${customer.phone}`,
            isLoading: isLoading,
            isSuccess: isSuccess,
            isError: isError,
            clearState: clearState,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 gap-y-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    label: "Phone",
                    ...register("phone", {
                        required: true
                    }),
                    defaultValue: phone,
                    errors: errors
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePhone);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6993);
/* harmony import */ var _modules_account_components_profile_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1966);
/* harmony import */ var _modules_account_components_profile_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(330);
/* harmony import */ var _modules_account_components_profile_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2718);
/* harmony import */ var _components_profile_billing_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5229);
/* harmony import */ var _components_profile_phone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8711);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_account_components_profile_email__WEBPACK_IMPORTED_MODULE_2__, _modules_account_components_profile_name__WEBPACK_IMPORTED_MODULE_3__, _modules_account_components_profile_password__WEBPACK_IMPORTED_MODULE_4__, _components_profile_billing_address__WEBPACK_IMPORTED_MODULE_5__, _components_profile_phone__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__, _modules_account_components_profile_email__WEBPACK_IMPORTED_MODULE_2__, _modules_account_components_profile_name__WEBPACK_IMPORTED_MODULE_3__, _modules_account_components_profile_password__WEBPACK_IMPORTED_MODULE_4__, _components_profile_billing_address__WEBPACK_IMPORTED_MODULE_5__, _components_profile_phone__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ProfileTemplate = ()=>{
    const { customer , retrievingCustomer , refetchCustomer  } = (0,_lib_context_account_context__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
    if (retrievingCustomer || !customer) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-8 flex flex-col gap-y-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl-semi",
                        children: "Profile"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-base-regular",
                        children: "View and update your profile information, including your name, email, and phone number. You can also update your billing address, or change your password."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-y-8 w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_account_components_profile_name__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        customer: customer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_account_components_profile_email__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        customer: customer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_phone__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        customer: customer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_account_components_profile_password__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        customer: customer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_billing_address__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        customer: customer
                    })
                ]
            })
        ]
    });
};
const Divider = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-px bg-gray-200"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_account_templates_account_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2317);
/* harmony import */ var _modules_account_templates_profile_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9538);
/* harmony import */ var _modules_common_components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3269);
/* harmony import */ var _modules_layout_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7688);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_account_templates_account_layout__WEBPACK_IMPORTED_MODULE_1__, _modules_account_templates_profile_template__WEBPACK_IMPORTED_MODULE_2__, _modules_layout_templates__WEBPACK_IMPORTED_MODULE_4__]);
([_modules_account_templates_account_layout__WEBPACK_IMPORTED_MODULE_1__, _modules_account_templates_profile_template__WEBPACK_IMPORTED_MODULE_2__, _modules_layout_templates__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Profile = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_head__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "Profile",
                description: "View and edit your ACME profile."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_account_templates_profile_template__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
Profile.getLayout = (page)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_templates__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_account_templates_account_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: page
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3218:
/***/ ((module) => {

module.exports = require("@hookform/error-message");

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

/***/ 9137:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 6269:
/***/ ((module) => {

module.exports = import("react-instantsearch-hooks-web");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,571,788,300,688,993,642,317,639], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();