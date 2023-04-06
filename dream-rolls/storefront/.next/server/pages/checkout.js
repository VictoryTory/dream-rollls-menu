"use strict";
(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 4546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useCheckout),
/* harmony export */   "o": () => (/* binding */ CheckoutProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7590);
/* harmony import */ var _lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3721);
/* harmony import */ var _modules_checkout_components_payment_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9440);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5756);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9137);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _store_context__WEBPACK_IMPORTED_MODULE_9__]);
([_lib_config__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _store_context__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CheckoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_7__.createContext)(null);
const IDEMPOTENCY_KEY = "create_payment_session_key";
const CheckoutProvider = ({ children  })=>{
    const { cart , setCart , addShippingMethod: { mutate: setShippingMethod , isLoading: addingShippingMethod ,  } , completeCheckout: { mutate: complete , isLoading: completingCheckout  } ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useCart)();
    const { customer  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useMeCustomer)();
    const { countryCode  } = (0,_store_context__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .o)();
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        defaultValues: mapFormValues(customer, cart, countryCode),
        reValidateMode: "onChange"
    });
    const { mutate: setPaymentSessionMutation , isLoading: settingPaymentSession ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useSetPaymentSession)(cart?.id);
    const { mutate: updateCart , isLoading: updatingCart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useUpdateCart)(cart?.id);
    const { shipping_options  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useCartShippingOptions)(cart?.id, {
        enabled: !!cart?.id
    });
    const { regions  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useRegions)();
    const { resetCart , setRegion  } = (0,_store_context__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .o)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const editAddresses = (0,_lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const sameAsBilling = (0,_lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(cart?.billing_address && cart?.shipping_address ? (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEqual)(cart.billing_address, cart.shipping_address) : true);
    /**
   * Boolean that indicates if a part of the checkout is loading.
   */ const isLoading = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        return addingShippingMethod || settingPaymentSession || updatingCart || completingCheckout;
    }, [
        addingShippingMethod,
        completingCheckout,
        settingPaymentSession,
        updatingCart, 
    ]);
    /**
   * Boolean that indicates if the checkout is ready to be completed. A checkout is ready to be completed if
   * the user has supplied a email, shipping address, billing address, shipping method, and a method of payment.
   */ const readyToComplete = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        return !!cart && !!cart.email && !!cart.shipping_address && !!cart.billing_address && !!cart.payment_session && cart.shipping_methods?.length > 0;
    }, [
        cart
    ]);
    const shippingMethods = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        if (shipping_options && cart?.region) {
            return shipping_options?.map((option)=>({
                    value: option.id,
                    label: option.name,
                    price: (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.formatAmount)({
                        amount: option.amount || 0,
                        region: cart.region
                    })
                }));
        }
        return [];
    }, [
        shipping_options,
        cart
    ]);
    /**
   * Resets the form when the cart changed.
   */ (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (cart?.id) {
            methods.reset(mapFormValues(customer, cart, countryCode));
        }
    }, [
        customer,
        cart,
        methods,
        countryCode
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (!cart) {
            editAddresses.open();
            return;
        }
        if (cart?.shipping_address && cart?.billing_address) {
            editAddresses.close();
            return;
        }
        editAddresses.open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cart
    ]);
    /**
   * Method to set the selected shipping method for the cart. This is called when the user selects a shipping method, such as UPS, FedEx, etc.
   */ const setShippingOption = (soId)=>{
        if (cart) {
            setShippingMethod({
                option_id: soId
            }, {
                onSuccess: ({ cart  })=>setCart(cart)
            });
        }
    };
    /**
   * Method to create the payment sessions available for the cart. Uses a idempotency key to prevent duplicate requests.
   */ const createPaymentSession = async (cartId)=>{
        return _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .medusaClient.carts.createPaymentSessions */ .pZ.carts.createPaymentSessions(cartId, {
            "Idempotency-Key": IDEMPOTENCY_KEY
        }).then(({ cart  })=>cart).catch(()=>null);
    };
    /**
   * Method that calls the createPaymentSession method and updates the cart with the payment session.
   */ const initPayment = async ()=>{
        if (cart?.id && !cart.payment_sessions?.length && cart?.items?.length) {
            const paymentSession = await createPaymentSession(cart.id);
            if (!paymentSession) {
                setTimeout(initPayment, 500);
            } else {
                setCart(paymentSession);
                return;
            }
        }
    };
    /**
   * Method to set the selected payment session for the cart. This is called when the user selects a payment provider, such as Stripe, PayPal, etc.
   */ const setPaymentSession = (providerId)=>{
        if (cart) {
            setPaymentSessionMutation({
                provider_id: providerId
            }, {
                onSuccess: ({ cart  })=>{
                    setCart(cart);
                }
            });
        }
    };
    const prepareFinalSteps = ()=>{
        initPayment();
        if (shippingMethods) {
            setShippingOption(shippingMethods[0].value);
        }
    };
    const setSavedAddress = (address)=>{
        const setValue = methods.setValue;
        setValue("shipping_address", {
            address_1: address.address_1 || "",
            address_2: address.address_2 || "",
            city: address.city || "",
            country_code: address.country_code || "",
            first_name: address.first_name || "",
            last_name: address.last_name || "",
            phone: address.phone || "",
            postal_code: address.postal_code || "",
            province: address.province || "",
            company: address.company || ""
        });
    };
    /**
   * Method that validates if the cart's region matches the shipping address's region. If not, it will update the cart region.
   */ const validateRegion = (countryCode)=>{
        if (regions && cart) {
            const region = regions.find((r)=>r.countries.map((c)=>c.iso_2).includes(countryCode));
            if (region && region.id !== cart.region.id) {
                setRegion(region.id, countryCode);
            }
        }
    };
    /**
   * Method that sets the addresses and email on the cart.
   */ const setAddresses = (data)=>{
        const { shipping_address , billing_address , email  } = data;
        const payload = {
            shipping_address,
            email
        };
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEqual)(shipping_address, billing_address)) {
            sameAsBilling.open();
        }
        if (sameAsBilling.state) {
            payload.billing_address = shipping_address;
        } else {
            payload.billing_address = billing_address;
        }
        updateCart(payload, {
            onSuccess: ({ cart  })=>{
                setCart(cart);
                prepareFinalSteps();
            }
        });
    };
    /**
   * Method to complete the checkout process. This is called when the user clicks the "Complete Checkout" button.
   */ const onPaymentCompleted = ()=>{
        complete(undefined, {
            onSuccess: ({ data  })=>{
                resetCart();
                push(`/order/confirmed/${data.id}`);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.FormProvider, {
        ...methods,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckoutContext.Provider, {
            value: {
                cart,
                shippingMethods,
                isLoading,
                readyToComplete,
                sameAsBilling,
                editAddresses,
                initPayment,
                setAddresses,
                setSavedAddress,
                setShippingOption,
                setPaymentSession,
                onPaymentCompleted
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_checkout_components_payment_wrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                paymentSession: cart?.payment_session,
                children: children
            })
        })
    });
};
const useCheckout = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(CheckoutContext);
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useFormContext)();
    if (context === null) {
        throw new Error("useProductActionContext must be used within a ProductActionProvider");
    }
    return {
        ...context,
        ...form
    };
};
/**
 * Method to map the fields of a potential customer and the cart to the checkout form values. Information is assigned with the following priority:
 * 1. Cart information
 * 2. Customer information
 * 3. Default values - null
 */ const mapFormValues = (customer, cart, currentCountry)=>{
    const customerShippingAddress = customer?.shipping_addresses?.[0];
    const customerBillingAddress = customer?.billing_address;
    return {
        shipping_address: {
            first_name: cart?.shipping_address?.first_name || customerShippingAddress?.first_name || "",
            last_name: cart?.shipping_address?.last_name || customerShippingAddress?.last_name || "",
            address_1: cart?.shipping_address?.address_1 || customerShippingAddress?.address_1 || "",
            address_2: cart?.shipping_address?.address_2 || customerShippingAddress?.address_2 || "",
            city: cart?.shipping_address?.city || customerShippingAddress?.city || "",
            country_code: currentCountry || cart?.shipping_address?.country_code || customerShippingAddress?.country_code || "",
            province: cart?.shipping_address?.province || customerShippingAddress?.province || "",
            company: cart?.shipping_address?.company || customerShippingAddress?.company || "",
            postal_code: cart?.shipping_address?.postal_code || customerShippingAddress?.postal_code || "",
            phone: cart?.shipping_address?.phone || customerShippingAddress?.phone || ""
        },
        billing_address: {
            first_name: cart?.billing_address?.first_name || customerBillingAddress?.first_name || "",
            last_name: cart?.billing_address?.last_name || customerBillingAddress?.last_name || "",
            address_1: cart?.billing_address?.address_1 || customerBillingAddress?.address_1 || "",
            address_2: cart?.billing_address?.address_2 || customerBillingAddress?.address_2 || "",
            city: cart?.billing_address?.city || customerBillingAddress?.city || "",
            country_code: cart?.shipping_address?.country_code || customerBillingAddress?.country_code || "",
            province: cart?.shipping_address?.province || customerBillingAddress?.province || "",
            company: cart?.billing_address?.company || customerBillingAddress?.company || "",
            postal_code: cart?.billing_address?.postal_code || customerBillingAddress?.postal_code || "",
            phone: cart?.billing_address?.phone || customerBillingAddress?.phone || ""
        },
        email: cart?.email || customer?.email || ""
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A funtion that does nothing.
 */ const noop = ()=>{};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noop);


/***/ }),

/***/ 2682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ emailRegex)
/* harmony export */ });
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;


/***/ }),

/***/ 235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4546);
/* harmony import */ var _modules_common_components_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7171);
/* harmony import */ var _modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7001);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const AddressSelect = ({ addresses  })=>{
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(undefined);
    const { control , setSavedAddress  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__/* .useCheckout */ .M)();
    const handleSelect = (id)=>{
        const savedAddress = addresses.find((a)=>a.id === id);
        if (savedAddress) {
            setSavedAddress(savedAddress);
        }
        setSelected(id);
    };
    const currentShippingAddress = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useWatch)({
        control,
        name: "shipping_address"
    });
    const selectedAddress = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        for (const address of addresses){
            const checkEquality = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.isEqual)((0,lodash__WEBPACK_IMPORTED_MODULE_6__.omit)(address, [
                "id",
                "created_at",
                "updated_at",
                "country",
                "deleted_at",
                "metadata",
                "customer_id", 
            ]), currentShippingAddress);
            if (checkEquality) {
                return address;
            }
        }
    }, [
        currentShippingAddress,
        addresses
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox, {
        onChange: handleSelect,
        value: selected,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Button, {
                    className: "relative w-full flex justify-between items-center px-4 py-[10px] text-left bg-white cursor-default focus:outline-none border border-gray-200 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:ring-offset-2 focus-visible:border-gray-300 text-base-regular",
                    children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block truncate",
                                    children: selectedAddress ? selectedAddress.address_1 : "Choose an address"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    size: 16,
                                    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
                                        "transform rotate-180": open
                                    })
                                })
                            ]
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                    as: react__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Options, {
                        className: "absolute z-20 w-full overflow-auto text-small-regular bg-white border border-gray-200 border-top-0 max-h-60 focus:outline-none sm:text-sm",
                        children: addresses.map((address)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Option, {
                                value: address.id,
                                className: "cursor-default select-none relative pl-6 pr-10 hover:bg-gray-50 py-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-x-4 items-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_radio__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            checked: selected === address.id
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "text-left text-base-semi",
                                                    children: [
                                                        address.first_name,
                                                        " ",
                                                        address.last_name
                                                    ]
                                                }),
                                                address.company && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-small-regular text-gray-700",
                                                    children: address.company
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col text-left text-base-regular mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                address.address_1,
                                                                address.address_2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        ", ",
                                                                        address.address_2
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                address.postal_code,
                                                                ", ",
                                                                address.city
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                address.province && `${address.province}, `,
                                                                address.country_code?.toUpperCase()
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, address.id);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4546);
/* harmony import */ var _modules_common_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7391);
/* harmony import */ var _modules_common_components_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5095);
/* harmony import */ var _modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8000);
/* harmony import */ var _billing_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7557);
/* harmony import */ var _shipping_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__, _billing_address__WEBPACK_IMPORTED_MODULE_5__, _shipping_address__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__, _billing_address__WEBPACK_IMPORTED_MODULE_5__, _shipping_address__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Addresses = ()=>{
    const { sameAsBilling: { state: checked , toggle: onChange  } , editAddresses: { state: isEdit , toggle: setEdit  } , setAddresses , handleSubmit , cart ,  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__/* .useCheckout */ .M)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm",
                        children: "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Shipping address"
                    })
                ]
            }),
            isEdit ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-8 pb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shipping_address__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_checkbox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            label: "Same as billing address",
                            checked: checked,
                            onChange: onChange
                        })
                    }),
                    !checked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-xl-semi flex items-center gap-x-4 pb-6 pt-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center font-mono text-sm",
                                        children: "2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Billing address"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_billing_address__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        className: "max-w-[200px] mt-6",
                        onClick: handleSubmit(setAddresses),
                        children: "Continue to delivery"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-gray-50 px-8 py-6 text-small-regular",
                        children: cart && cart.shipping_address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-start gap-x-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-green-400 rounded-full min-w-[24px] h-6 flex items-center justify-center text-white text-small-regular",
                                    children: "✓"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-start justify-between w-full",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        cart.shipping_address.first_name,
                                                        " ",
                                                        cart.shipping_address.last_name
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        cart.shipping_address.address_1,
                                                        " ",
                                                        cart.shipping_address.address_2
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        cart.shipping_address.postal_code,
                                                        ",",
                                                        " ",
                                                        cart.shipping_address.city
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: cart.shipping_address.country_code?.toUpperCase()
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mt-4 flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: cart.shipping_address.phone
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: cart.email
                                                        })
                                                    ]
                                                }),
                                                checked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-x-2 mt-6",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex items-center justify-center border border-gray-700 bg-gray-100 w-4 h-4",
                                                            children: "✓"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Same as billing address"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: setEdit,
                                                children: "Edit"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        })
                    }),
                    !checked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center font-mono text-sm",
                                        children: "2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Billing address"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-gray-50 px-8 py-6 text-small-regular",
                                children: cart && cart.billing_address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-start gap-x-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-green-400 rounded-full min-w-[24px] h-6 flex items-center justify-center text-white text-small-regular",
                                            children: "✓"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-start justify-between w-full",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                cart.billing_address.first_name,
                                                                " ",
                                                                cart.billing_address.last_name
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                cart.billing_address.address_1,
                                                                " ",
                                                                cart.billing_address.address_2
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                cart.billing_address.postal_code,
                                                                ",",
                                                                " ",
                                                                cart.billing_address.city
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: cart.billing_address.country_code?.toUpperCase()
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-4 flex flex-col",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: cart.billing_address.phone
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: setEdit,
                                                        children: "Edit"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Addresses);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_common_components_connect_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7367);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1642);
/* harmony import */ var _country_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3580);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_common_components_connect_form__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, _country_select__WEBPACK_IMPORTED_MODULE_3__]);
([_modules_common_components_connect_form__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, _country_select__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const BillingAddress = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_connect_form__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: ({ register , formState: { errors , touchedFields  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 gap-y-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 gap-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "First name",
                                ...register("billing_address.first_name", {
                                    required: "First name is required"
                                }),
                                autoComplete: "given-name",
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Last name",
                                ...register("billing_address.last_name", {
                                    required: "Last name is required"
                                }),
                                autoComplete: "family-name",
                                errors: errors,
                                touched: touchedFields
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Company",
                        ...register("billing_address.company"),
                        autoComplete: "organization",
                        errors: errors,
                        touched: touchedFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Address",
                        ...register("billing_address.address_1", {
                            required: "Address is required"
                        }),
                        autoComplete: "address-line1",
                        errors: errors,
                        touched: touchedFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Apartments, suite, etc.",
                        ...register("billing_address.address_2"),
                        autoComplete: "address-line2",
                        errors: errors,
                        touched: touchedFields
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-[144px_1fr] gap-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Postal code",
                                ...register("billing_address.postal_code", {
                                    required: "Postal code is required"
                                }),
                                autoComplete: "postal-code",
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "City",
                                ...register("billing_address.city", {
                                    required: "City is required"
                                }),
                                autoComplete: "address-level2",
                                errors: errors,
                                touched: touchedFields
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_country_select__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ...register("billing_address.country_code", {
                            required: "Country is required"
                        }),
                        autoComplete: "country",
                        errors: errors,
                        touched: touchedFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "State / Province",
                        ...register("billing_address.province"),
                        autoComplete: "address-level1",
                        errors: errors,
                        touched: touchedFields
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Phone",
                        ...register("billing_address.phone"),
                        autoComplete: "tel",
                        errors: errors,
                        touched: touchedFields
                    })
                ]
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingAddress);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4546);
/* harmony import */ var _lib_util_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2654);
/* harmony import */ var _modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const CheckoutLoader = ()=>{
    const { isLoading  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__/* .useCheckout */ .M)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
        show: isLoading,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
            onClose: _lib_util_noop__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            className: "relative z-[100]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                enter: "ease-out duration-500",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-500",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        size: 24
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutLoader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_common_components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7391);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1642);
/* harmony import */ var _modules_common_icons_trash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6037);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__]);
([_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const GiftCard = ({ cart  })=>{
    const { updateCart: { mutate , isLoading  } , setCart ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_4__.useCart)();
    const { register , handleSubmit , formState: { touchedFields , errors  } , setError ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    const appliedGiftCard = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (!cart || !cart.gift_cards?.length) {
            return undefined;
        }
        return cart.gift_cards[0].code;
    }, [
        cart
    ]);
    const onSubmit = (data)=>{
        mutate({
            gift_cards: [
                {
                    code: data.gift_card_code
                }
            ]
        }, {
            onSuccess: ({ cart  })=>setCart(cart),
            onError: ()=>{
                setError("gift_card_code", {
                    message: "Code is invalid"
                }, {
                    shouldFocus: true
                });
            }
        });
    };
    const onRemove = ()=>{
        mutate({
            gift_cards: []
        }, {
            onSuccess: ({ cart  })=>setCart(cart)
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full bg-white p-6 flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-base-semi",
                    children: "Gift Card"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-small-regular",
                children: appliedGiftCard ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-gray-700",
                                    children: "Code: "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-semibold",
                                    children: appliedGiftCard
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center gap-x-2",
                                onClick: onRemove,
                                disabled: isLoading,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_trash__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        size: 16
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sr-only",
                                        children: "Remove gift card from order"
                                    })
                                ]
                            })
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    className: "w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-[1fr_80px] gap-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Code",
                                ...register("gift_card_code", {
                                    required: "Code is required"
                                }),
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    className: "!min-h-[0] h-[46px] w-[80px]",
                                    disabled: isLoading,
                                    isLoading: isLoading,
                                    children: "Apply"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GiftCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4546);
/* harmony import */ var _modules_common_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7391);
/* harmony import */ var _modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8000);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2929);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PaymentButton = ({ paymentSession  })=>{
    const { 0: notReady , 1: setNotReady  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_6__.useCart)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        setNotReady(true);
        if (!cart) {
            return;
        }
        if (!cart.shipping_address) {
            return;
        }
        if (!cart.billing_address) {
            return;
        }
        if (!cart.email) {
            return;
        }
        if (cart.shipping_methods.length < 1) {
            return;
        }
        setNotReady(false);
    }, [
        cart
    ]);
    switch(paymentSession?.provider_id){
        case "stripe":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StripePaymentButton, {
                session: paymentSession,
                notReady: notReady
            });
        case "manual":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ManualTestPaymentButton, {
                notReady: notReady
            });
        case "paypal":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PayPalPaymentButton, {
                notReady: notReady,
                session: paymentSession
            });
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                disabled: true,
                children: "Select a payment method"
            });
    }
};
const StripePaymentButton = ({ session , notReady  })=>{
    const { 0: disabled , 1: setDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: submitting , 1: setSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(undefined);
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_6__.useCart)();
    const { onPaymentCompleted  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__/* .useCheckout */ .M)();
    const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.useStripe)();
    const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.useElements)();
    const card = elements?.getElement("cardNumber");
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (!stripe || !elements) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [
        stripe,
        elements
    ]);
    const handlePayment = async ()=>{
        setSubmitting(true);
        if (!stripe || !elements || !card || !cart) {
            setSubmitting(false);
            return;
        }
        await stripe.confirmCardPayment(session.data.client_secret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: cart.billing_address.first_name + " " + cart.billing_address.last_name,
                    address: {
                        city: cart.billing_address.city ?? undefined,
                        country: cart.billing_address.country_code ?? undefined,
                        line1: cart.billing_address.address_1 ?? undefined,
                        line2: cart.billing_address.address_2 ?? undefined,
                        postal_code: cart.billing_address.postal_code ?? undefined,
                        state: cart.billing_address.province ?? undefined
                    },
                    email: cart.email,
                    phone: cart.billing_address.phone ?? undefined
                }
            }
        }).then(({ error , paymentIntent  })=>{
            if (error) {
                const pi = error.payment_intent;
                if (pi && pi.status === "requires_capture" || pi && pi.status === "succeeded") {
                    onPaymentCompleted();
                }
                setErrorMessage(error.message);
                return;
            }
            if (paymentIntent && paymentIntent.status === "requires_capture" || paymentIntent.status === "succeeded") {
                return onPaymentCompleted();
            }
            return;
        }).finally(()=>{
            setSubmitting(false);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                disabled: submitting || disabled || notReady,
                onClick: handlePayment,
                children: submitting ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : "Checkout"
            }),
            errorMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-red-500 text-small-regular mt-2",
                children: errorMessage
            })
        ]
    });
};
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const PayPalPaymentButton = ({ session , notReady  })=>{
    const { 0: submitting , 1: setSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(undefined);
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_6__.useCart)();
    const { onPaymentCompleted  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__/* .useCheckout */ .M)();
    const handlePayment = async (_data, actions)=>{
        actions?.order?.authorize().then((authorization)=>{
            if (authorization.status !== "COMPLETED") {
                setErrorMessage(`An error occurred, status: ${authorization.status}`);
                return;
            }
            onPaymentCompleted();
        }).catch(()=>{
            setErrorMessage(`An unknown error occurred, please try again.`);
        }).finally(()=>{
            setSubmitting(false);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_4__.PayPalScriptProvider, {
        options: {
            "client-id": PAYPAL_CLIENT_ID,
            currency: cart?.region.currency_code.toUpperCase(),
            intent: "authorize"
        },
        children: [
            errorMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-rose-500 mt-4",
                children: errorMessage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_4__.PayPalButtons, {
                style: {
                    layout: "horizontal"
                },
                createOrder: async ()=>session.data.id,
                onApprove: handlePayment,
                disabled: notReady || submitting
            })
        ]
    });
};
const ManualTestPaymentButton = ({ notReady  })=>{
    const { 0: submitting , 1: setSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { onPaymentCompleted  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__/* .useCheckout */ .M)();
    const handlePayment = ()=>{
        setSubmitting(true);
        onPaymentCompleted();
        setSubmitting(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        disabled: submitting || notReady,
        onClick: handlePayment,
        children: submitting ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : "Checkout"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ payment_container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/modules/common/components/radio/index.tsx
var components_radio = __webpack_require__(7171);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__(4515);
;// CONCATENATED MODULE: ./src/modules/checkout/components/payment-stripe/index.tsx



const PaymentStripe = ()=>{
    const useOptions = (0,external_react_.useMemo)(()=>{
        return {
            style: {
                base: {
                    fontFamily: "Inter, sans-serif",
                    color: "#424270",
                    padding: "10px 12px",
                    "::placeholder": {
                        color: "#CFD7E0"
                    }
                }
            }
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col relative w-full pb-6",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CardNumber, {
                    options: useOptions
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center mt-12 relative gap-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CardExpiry, {
                            options: useOptions
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CardCVC, {
                            options: useOptions
                        })
                    ]
                })
            ]
        })
    });
};
const CardNumber = ({ options  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "border-b border-gray-200 py-2 relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute -top-6 text-gray-700 text-base-regular",
                children: "Card number"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_.CardNumberElement, {
                options: options
            })
        ]
    });
};
const CardExpiry = ({ options  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "border-b border-gray-200 w-full py-2 relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute -top-6 text-gray-700 text-base-regular",
                children: "Expiration date"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_.CardExpiryElement, {
                options: options
            })
        ]
    });
};
const CardCVC = ({ options  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "border-b border-gray-200 w-full py-2 relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute -top-6 text-gray-700 text-base-regular",
                children: "CVC"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_.CardCvcElement, {
                options: {
                    ...options,
                    placeholder: "123"
                }
            })
        ]
    });
};
/* harmony default export */ const payment_stripe = (PaymentStripe);

;// CONCATENATED MODULE: ./src/modules/common/icons/alert.tsx


const alert_Alert = ({ size ="20" , color ="currentColor" , ...attributes })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...attributes,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M10 6.66669V10",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M10 13.3333H10.0088",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const icons_alert = ((/* unused pure expression or super */ null && (alert_Alert)));

;// CONCATENATED MODULE: ./src/modules/checkout/components/payment-test/index.tsx


const PaymentTest = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "flex items-center gap-x-2 bg-yellow-100 w-full p-2",
            children: [
                /*#__PURE__*/ _jsx(Alert, {
                    size: 16,
                    className: "text-yellow-700"
                }),
                /*#__PURE__*/ _jsxs("span", {
                    className: "text-small-regular text-yellow-700",
                    children: [
                        /*#__PURE__*/ _jsx("span", {
                            className: "font-semibold",
                            children: "Attention:"
                        }),
                        " For testing purposes only."
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const payment_test = ((/* unused pure expression or super */ null && (PaymentTest)));

;// CONCATENATED MODULE: ./src/modules/checkout/components/payment-container/index.tsx






const PaymentInfoMap = {
    stripe: {
        title: "Credit card",
        description: "Secure payment with credit card"
    },
    "stripe-ideal": {
        title: "iDEAL",
        description: "Secure payment with iDEAL"
    },
    paypal: {
        title: "PayPal",
        description: "Secure payment with PayPal"
    },
    manual: {
        title: "Test payment",
        description: "Test payment using medusa-payment-manual"
    }
};
const PaymentContainer = ({ paymentSession , selected , setSelected , disabled =false ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("flex flex-col gap-y-4 border-b border-gray-200 last:border-b-0", {
            "bg-gray-50": selected
        }),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            className: "grid grid-cols-[12px_1fr] gap-x-4 py-4 px-8",
            onClick: setSelected,
            disabled: disabled,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_radio/* default */.Z, {
                    checked: selected
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col text-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-base-semi leading-none text-gray-900",
                            children: PaymentInfoMap[paymentSession.provider_id].title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-gray-700 text-small-regular mt-2",
                            children: PaymentInfoMap[paymentSession.provider_id].description
                        }),
                        selected && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full mt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PaymentElement, {
                                paymentSession: paymentSession
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const PaymentElement = ({ paymentSession  })=>{
    switch(paymentSession.provider_id){
        case "stripe":
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-8 pr-7",
                children: /*#__PURE__*/ jsx_runtime_.jsx(payment_stripe, {})
            });
        case "manual":
            // We only display the test payment form if we are in a development environment
            return  false ? /*#__PURE__*/ 0 : null;
        default:
            return null;
    }
};
/* harmony default export */ const payment_container = (PaymentContainer);


/***/ }),

/***/ 9440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ payment_wrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__(4515);
;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/modules/checkout/components/payment-wrapper/index.tsx




const Wrapper = ({ paymentSession , children  })=>{
    if (!paymentSession) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: children
        });
    }
    switch(paymentSession.provider_id){
        case "stripe":
            return /*#__PURE__*/ jsx_runtime_.jsx(StripeWrapper, {
                paymentSession: paymentSession,
                children: children
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            });
    }
};
const stripePromise = (0,stripe_js_namespaceObject.loadStripe)(process.env.NEXT_PUBLIC_STRIPE_KEY || "");
const StripeWrapper = ({ paymentSession , children ,  })=>{
    const options = {
        clientSecret: paymentSession.data.client_secret
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_.Elements, {
        stripe: stripePromise,
        options: options,
        children: children
    });
};
/* harmony default export */ const payment_wrapper = (Wrapper);


/***/ }),

/***/ 9328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4546);
/* harmony import */ var _modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8000);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _payment_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8499);
/* harmony import */ var _step_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__, _step_container__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__, _step_container__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Payment = ()=>{
    const { cart , setPaymentSession , initPayment , sameAsBilling: { state: isSame  } ,  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__/* .useCheckout */ .M)();
    /**
   * Fallback if the payment session are not loaded properly we
   * retry to load them after a 5 second delay.
   */ (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        let timeout = null;
        if (cart?.shipping_address && cart?.payment_sessions) {
            timeout = setTimeout(()=>{
                initPayment();
            }, 5000);
        }
        return ()=>{
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cart
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_step_container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Payment",
        index: isSame ? 3 : 4,
        closedState: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "px-8 pb-8 text-small-regular",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Enter your address to see available payment options."
            })
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: cart?.payment_sessions?.length ? cart.payment_sessions.sort((a, b)=>{
                return a.provider_id > b.provider_id ? 1 : -1;
            }).map((paymentSession)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_payment_container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    paymentSession: paymentSession,
                    selected: cart?.payment_session?.provider_id === paymentSession.provider_id,
                    setSelected: ()=>setPaymentSession(paymentSession.provider_id)
                }, paymentSession.id);
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-center justify-center px-4 py-16 text-gray-900",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util_regex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2682);
/* harmony import */ var _modules_common_components_connect_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7367);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1642);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5756);
/* harmony import */ var _address_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(235);
/* harmony import */ var _country_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3580);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_common_components_connect_form__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, _address_select__WEBPACK_IMPORTED_MODULE_4__, _country_select__WEBPACK_IMPORTED_MODULE_5__]);
([_modules_common_components_connect_form__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__, _address_select__WEBPACK_IMPORTED_MODULE_4__, _country_select__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ShippingAddress = ()=>{
    const { customer  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_3__.useMeCustomer)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            customer && (customer.shipping_addresses?.length || 0) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-6 flex flex-col gap-y-4 bg-amber-100 p-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-small-regular",
                        children: `Hi ${customer.first_name}, do you want to use one of your saved addresses?`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_address_select__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        addresses: customer.shipping_addresses
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_connect_form__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: ({ register , formState: { errors , touchedFields  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 gap-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Email",
                                ...register("email", {
                                    required: "Email is required",
                                    pattern: _lib_util_regex__WEBPACK_IMPORTED_MODULE_6__/* .emailRegex */ .H
                                }),
                                autoComplete: "email",
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-2 gap-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        label: "First name",
                                        ...register("shipping_address.first_name", {
                                            required: "First name is required"
                                        }),
                                        autoComplete: "given-name",
                                        errors: errors,
                                        touched: touchedFields
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        label: "Last name",
                                        ...register("shipping_address.last_name", {
                                            required: "Last name is required"
                                        }),
                                        autoComplete: "family-name",
                                        errors: errors,
                                        touched: touchedFields
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Company",
                                ...register("shipping_address.company"),
                                autoComplete: "organization",
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Address",
                                ...register("shipping_address.address_1", {
                                    required: "Address is required"
                                }),
                                autoComplete: "address-line1",
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Apartments, suite, etc.",
                                ...register("shipping_address.address_2"),
                                autoComplete: "address-line2",
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-[122px_1fr] gap-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        label: "Postal code",
                                        ...register("shipping_address.postal_code", {
                                            required: "Postal code is required"
                                        }),
                                        autoComplete: "postal-code",
                                        errors: errors,
                                        touched: touchedFields
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        label: "City",
                                        ...register("shipping_address.city", {
                                            required: "City is required"
                                        }),
                                        autoComplete: "address-level2",
                                        errors: errors,
                                        touched: touchedFields
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_country_select__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                ...register("shipping_address.country_code", {
                                    required: "Country is required"
                                }),
                                autoComplete: "country",
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "State / Province",
                                ...register("shipping_address.province"),
                                autoComplete: "address-level1",
                                errors: errors,
                                touched: touchedFields
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Phone",
                                ...register("shipping_address.phone"),
                                autoComplete: "tel",
                                errors: errors,
                                touched: touchedFields
                            })
                        ]
                    })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingAddress);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _hookform_error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3218);
/* harmony import */ var _hookform_error_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hookform_error_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4546);
/* harmony import */ var _modules_common_components_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7171);
/* harmony import */ var _modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8000);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9137);
/* harmony import */ var _step_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, _step_container__WEBPACK_IMPORTED_MODULE_10__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, _step_container__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Shipping = ({ cart  })=>{
    const { addShippingMethod , setCart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_7__.useCart)();
    const { control , setError , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
        defaultValues: {
            soId: cart.shipping_methods?.[0]?.shipping_option_id
        }
    });
    // Fetch shipping options
    const { shipping_options , refetch  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_7__.useCartShippingOptions)(cart.id, {
        enabled: !!cart.id
    });
    // Any time the cart changes we need to ensure that we are displaying valid shipping options
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        const refetchShipping = async ()=>{
            await refetch();
        };
        refetchShipping();
    }, [
        cart,
        refetch
    ]);
    const submitShippingOption = (soId)=>{
        addShippingMethod.mutate({
            option_id: soId
        }, {
            onSuccess: ({ cart  })=>setCart(cart),
            onError: ()=>setError("soId", {
                    type: "validate",
                    message: "An error occurred while adding shipping. Please try again."
                }, {
                    shouldFocus: true
                })
        });
    };
    const handleChange = (value, fn)=>{
        submitShippingOption(value);
        fn(value);
    };
    // Memoized shipping method options
    const shippingMethods = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>{
        if (shipping_options && cart?.region) {
            return shipping_options?.map((option)=>({
                    value: option.id,
                    label: option.name,
                    price: (0,medusa_react__WEBPACK_IMPORTED_MODULE_7__.formatAmount)({
                        amount: option.amount || 0,
                        region: cart.region
                    })
                }));
        }
        return [];
    }, [
        shipping_options,
        cart
    ]);
    const { sameAsBilling: { state: sameBilling  } ,  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_3__/* .useCheckout */ .M)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_step_container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        index: sameBilling ? 2 : 3,
        title: "Delivery",
        closedState: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "px-8 pb-8 text-small-regular",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Enter your address to see available delivery options."
            })
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
            name: "soId",
            control: control,
            render: ({ field: { value , onChange  }  })=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup, {
                            value: value,
                            onChange: (value)=>handleChange(value, onChange),
                            children: shippingMethods && shippingMethods.length ? shippingMethods.map((option)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Option, {
                                    value: option.value,
                                    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()("flex items-center justify-between text-small-regular cursor-pointer py-4 border-b border-gray-200 last:border-b-0 px-8", {
                                        "bg-gray-50": option.value === value
                                    }),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-x-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_radio__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    checked: value === option.value
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-base-regular",
                                                    children: option.label
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "justify-self-end text-gray-700",
                                            children: option.price
                                        })
                                    ]
                                }, option.value);
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col items-center justify-center px-4 py-8 text-gray-900",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_spinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hookform_error_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
                            errors: errors,
                            name: "soId",
                            render: ({ message  })=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pt-2 text-rose-500 text-small-regular",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: message
                                    })
                                });
                            }
                        })
                    ]
                });
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shipping);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4546);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const StepContainer = ({ index , title , className , closedState , children , ...props })=>{
    const { editAddresses: { state  } ,  } = (0,_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_2__/* .useCheckout */ .M)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("bg-white", className, {
                "opacity-50 pointer-events-none select-none": state
            }),
            ...props,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm",
                            children: index
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: title
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                            static: true,
                            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden", {
                                "max-h-[9999px] opacity-100": !state,
                                "max-h-0 opacity-0": state
                            }),
                            children: children
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                            static: true,
                            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden", {
                                "max-h-[9999px] opacity-100": state,
                                "max-h-0 opacity-0": !state
                            }),
                            children: closedState
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_checkout_components_addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2583);
/* harmony import */ var _modules_checkout_components_payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9328);
/* harmony import */ var _modules_checkout_components_shipping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4270);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_checkout_components_addresses__WEBPACK_IMPORTED_MODULE_1__, _modules_checkout_components_payment__WEBPACK_IMPORTED_MODULE_2__, _modules_checkout_components_shipping__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_4__]);
([_modules_checkout_components_addresses__WEBPACK_IMPORTED_MODULE_1__, _modules_checkout_components_payment__WEBPACK_IMPORTED_MODULE_2__, _modules_checkout_components_shipping__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const CheckoutForm = ()=>{
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_4__.useCart)();
    if (!cart?.id) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full grid grid-cols-1 gap-y-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_checkout_components_addresses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_checkout_components_shipping__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        cart: cart
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_checkout_components_payment__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_checkout_components_discount_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9787);
/* harmony import */ var _modules_checkout_components_gift_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6828);
/* harmony import */ var _modules_checkout_components_payment_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3064);
/* harmony import */ var _modules_common_components_cart_totals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9581);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_checkout_components_discount_code__WEBPACK_IMPORTED_MODULE_1__, _modules_checkout_components_gift_card__WEBPACK_IMPORTED_MODULE_2__, _modules_checkout_components_payment_button__WEBPACK_IMPORTED_MODULE_3__, _modules_common_components_cart_totals__WEBPACK_IMPORTED_MODULE_4__, medusa_react__WEBPACK_IMPORTED_MODULE_5__]);
([_modules_checkout_components_discount_code__WEBPACK_IMPORTED_MODULE_1__, _modules_checkout_components_gift_card__WEBPACK_IMPORTED_MODULE_2__, _modules_checkout_components_payment_button__WEBPACK_IMPORTED_MODULE_3__, _modules_common_components_cart_totals__WEBPACK_IMPORTED_MODULE_4__, medusa_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CheckoutSummary = ()=>{
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useCart)();
    if (!cart?.id) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sticky top-0 flex flex-col-reverse small:flex-col gap-y-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full bg-white p-6 flex flex-col gap-y-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_cart_totals__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        cart: cart
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_checkout_components_payment_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        paymentSession: cart?.payment_session
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-6 bg-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_checkout_components_discount_code__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    cart: cart
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_checkout_components_gift_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                cart: cart
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutSummary);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4546);
/* harmony import */ var _modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7001);
/* harmony import */ var _modules_layout_components_medusa_cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1436);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_checkout_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5064);
/* harmony import */ var _checkout_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1123);
/* harmony import */ var _checkout_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__, _components_checkout_loader__WEBPACK_IMPORTED_MODULE_5__, _checkout_form__WEBPACK_IMPORTED_MODULE_6__, _checkout_summary__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__, _components_checkout_loader__WEBPACK_IMPORTED_MODULE_5__, _checkout_form__WEBPACK_IMPORTED_MODULE_6__, _checkout_summary__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CheckoutTemplate = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_context_checkout_context__WEBPACK_IMPORTED_MODULE_1__/* .CheckoutProvider */ .o, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-gray-100 relative small:min-h-screen",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-16 bg-white",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center h-full justify-between content-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/cart",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            className: "rotate-90",
                                            size: 16
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mt-px hidden small:block",
                                            children: "Back to shopping cart"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mt-px block small:hidden",
                                            children: "Back"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-xl-semi",
                                    children: "ACME"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 basis-0"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_checkout_loader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-1 small:grid-cols-[1fr_416px] gap-y-8 content-container gap-x-8 py-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_checkout_form__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_checkout_summary__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-4 w-full flex items-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_components_medusa_cta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Checkbox = ({ checked =false , onChange , label ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "text-base-regular flex items-center gap-x-2",
        role: "checkbox",
        type: "button",
        "aria-checked": checked,
        onClick: onChange,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                role: "checkbox",
                "aria-checked": checked,
                className: "border border-gray-900 w-5 h-5 flex items-center justify-center",
                children: checked ? "✓" : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: label
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ }),

/***/ 7367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_0__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * Utility component for nested forms.
 */ const ConnectForm = ({ children  })=>{
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useFormContext)();
    return children({
        ...methods
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const Radio = ({ checked  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("h-3 w-3 rounded-full border border-gray-200 flex items-center justify-center", {
            "border-gray-900": checked
        }),
        children: checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-2 h-2 rounded-full bg-gray-900"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);


/***/ }),

/***/ 4250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_checkout_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7803);
/* harmony import */ var _modules_common_components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_checkout_templates__WEBPACK_IMPORTED_MODULE_1__]);
_modules_checkout_templates__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Checkout = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Checkout"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_checkout_templates__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3218:
/***/ ((module) => {

module.exports = require("@hookform/error-message");

/***/ }),

/***/ 2929:
/***/ ((module) => {

module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ 4515:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,571,788,642,639,832,580], () => (__webpack_exec__(4250)));
module.exports = __webpack_exports__;

})();